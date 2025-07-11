package com.anaselrayan.springcashiero.features.sales.service;

import com.anaselrayan.springcashiero.features.settings.service.SettingService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.features.customers.repository.CustomerRepository;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import com.anaselrayan.springcashiero.features.products.utils.ProductUtils;
import com.anaselrayan.springcashiero.features.sales.converter.SaleConverter;
import com.anaselrayan.springcashiero.features.sales.dto.SaleDTO;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import com.anaselrayan.springcashiero.features.sales.repository.SaleItemRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleReturnRepository;
import com.anaselrayan.springcashiero.features.sales.request.SaleItemRequest;
import com.anaselrayan.springcashiero.features.sales.request.SaleRequest;
import com.anaselrayan.springcashiero.features.sales.util.SaleUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository saleRepository;
    private final SaleReturnRepository saleReturnRepository;
    private final SaleItemRepository saleItemRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final SaleReceiptService saleReceiptService;
    private final SettingService settingService;

    public ApiResponse createSale(SaleRequest request) {
        try {
            ApiResponse validateSaleRes = validateSale(request);
            if (!validateSaleRes.getSuccess())
                return validateSaleRes;

            Sale toSave = Sale.builder()
                    .subTotal(request.getSubTotal())
                    .grandTotal(request.getGrandTotal())
                    .discount(request.getDiscount())
                    .build();
            if (request.getCustomerId() != null) {
                toSave.setCustomer(customerRepository.getReferenceById(request.getCustomerId()));
            }

            Sale savedSale = saleRepository.save(toSave);
            savedSale.setBarcode(SaleUtil.generateBarcode(savedSale));
            List<SaleItem> savedItems = new ArrayList<>();
            request.getSaleItems().forEach(req -> savedItems.add(this.saveSaleItem(req, savedSale)));
            this.updateQuantityAfterSale(savedItems, false);
            savedSale.setSaleItems(savedItems);
            saleRepository.save(savedSale);
            this.saleReceiptService.generateSaleReceipt(savedSale);
            return new ApiResponse(SaleConverter.convert(savedSale), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse editSale(SaleRequest request) {
        try {
            // Validate Sale
            if (request.getSaleId() == null || !saleRepository.existsById(request.getSaleId()))
                return new ApiResponse(false, StatusCode.NOT_FOUND, "Sale doesn't exist!");
            if (saleReturnRepository.countBySaleId(request.getSaleId()) > 0)
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Can't edit sale with returns!");
            ApiResponse validateSaleRes = validateSale(request);
            if (!validateSaleRes.getSuccess())
                return validateSaleRes;

            // Update Sale Details
            Sale saleToEdit = saleRepository.findById(request.getSaleId()).orElseThrow();
            saleToEdit.setSubTotal(request.getSubTotal());
            saleToEdit.setDiscount(request.getDiscount());
            saleToEdit.setGrandTotal(request.getGrandTotal());
            if (request.getCustomerId() != null)
                saleToEdit.setCustomer(customerRepository.getReferenceById(request.getCustomerId()));
            else saleToEdit.setCustomer(null);

            // Update Sale Items
            List<SaleItem> oldItems = saleToEdit.getSaleItems();
            List<SaleItemRequest> newItems = request.getSaleItems();

            // Delete the non-existing items
            List<SaleItem> itemsToDelete = oldItems.stream()
                    .filter(oi -> newItems.stream().noneMatch(ni -> Objects.equals(ni.getProductId(), oi.getProduct().getId())))
                    .toList();
            saleItemRepository.deleteAll(itemsToDelete);
            oldItems.removeAll(itemsToDelete);

            // Save the new items
            newItems.forEach(ni -> {
                if (oldItems.stream().noneMatch(oi -> Objects.equals(oi.getProduct().getId(), ni.getProductId())))
                    oldItems.add(saveSaleItem(ni, saleToEdit));
            });

            // Update the common items
            oldItems.forEach(oi -> {
                var itemReq = newItems.stream().filter(ni -> Objects.equals(ni.getProductId(), oi.getProduct().getId()))
                        .findFirst()
                        .orElse(null);
                assert itemReq != null;
                Double unitPrice = ProductUtils.getProductPriceWithDiscount(oi.getProduct().getProductPrice());
                oi.setQuantity(itemReq.getQuantity());
                oi.setUnitPrice(unitPrice);
                oi.setUnitCost(oi.getProduct().getProductPrice().getCostPrice());
                oi.setSubTotal(itemReq.getQuantity() * unitPrice);
                saleItemRepository.save(oi);
            });
            Sale saved = saleRepository.save(saleToEdit);
            saleReceiptService.generateSaleReceipt(saved);
            return new ApiResponse(SaleConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getSalePage(PageRequest pr) {
        try {
            Page<Sale> salePage = saleRepository.findAll(pr.withSort(Sort.Direction.DESC, "createdAt"));
            PageImpl<SaleDTO> dtoPage = new PageImpl<>(
                    salePage.getContent().stream().map(SaleConverter::convert).toList(),
                    salePage.getPageable(),
                    salePage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getSaleById(Long saleId) {
        try {
            Sale sale = saleRepository.findById(saleId).orElseThrow();
            return new ApiResponse(SaleConverter.convert(sale), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    private ApiResponse validateSale(SaleRequest request) {
        // Validate Sale discount
        Double discountLimit = Double.parseDouble(settingService.getSetting("pos.receipt.maxDiscount").getValue());
        if (request.getDiscount() > discountLimit)
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "Maximum allowed discount is " + discountLimit);
        // Validate Items quantities
        Double total = 0.0;
        for (SaleItemRequest req : request.getSaleItems()) {
            if (!productRepository.existsById(req.getProductId()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "product with id (" + req.getProductId() + " not found");
            Product product = productRepository.getReferenceById(req.getProductId());
            if (req.getQuantity() > product.getProductBasic().getQuantity())
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "product with id (" + req.getProductId() + ") quantity isn't enough");
            total += ProductUtils.getProductPriceWithDiscount(product.getProductPrice()) * req.getQuantity();
        }
        // Validate subTotal
        if (!total.equals(request.getSubTotal())) {
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid sub total, should be: " + total);
        }
        // Validate grandTotal
        Double grandTotal = total - request.getDiscount();
        if (!grandTotal.equals(request.getGrandTotal())) {
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid grand total, should be: " + grandTotal);
        }
        return new ApiResponse(true, StatusCode.OK, "Success");
    }

    private SaleItem saveSaleItem(SaleItemRequest req, Sale sale) {
        Product product = productRepository.getReferenceById(req.getProductId());
        double unitPrice = ProductUtils.getProductPriceWithDiscount(product.getProductPrice());
        SaleItem toSave = SaleItem.builder()
                .sale(sale)
                .product(product)
                .quantity(req.getQuantity())
                .unitPrice(unitPrice)
                .unitCost(product.getProductPrice().getCostPrice())
                .subTotal(req.getQuantity() * unitPrice)
                .build();
        return saleItemRepository.save(toSave);
    }

    private void updateQuantityAfterSale(List<SaleItem> saleItems, boolean isDelete) {
        saleItems.forEach(saleItem -> {
            Product product = productRepository.findById(saleItem.getProduct().getId()).orElseThrow();
            int oldQty = product.getProductBasic().getQuantity();
            int newQty = isDelete ? oldQty + saleItem.getQuantity() : oldQty - saleItem.getQuantity();
            product.getProductBasic().setQuantity(newQty);
            productRepository.save(product);
        });
    }

    public ApiResponse deleteSale(Long saleId) {
        try {
            Sale sale = saleRepository.findById(saleId).orElseThrow();
            // Check if the sale has returns
            if (saleReturnRepository.countBySaleId(saleId) > 0)
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Sale has some returns!");
            updateQuantityAfterSale(sale.getSaleItems(), true);
            saleRepository.delete(sale);
            return new ApiResponse(true, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
