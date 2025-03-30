package com.anaselrayan.springcashiero.features.sales.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
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
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleService {

    private final SaleRepository saleRepository;
    private final SaleItemRepository saleItemRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final SaleReceiptService saleReceiptService;

    public ApiResponse createSale(SaleRequest request) {
        try {
            ApiResponse validateSaleRes = validateSale(request);
            if (!validateSaleRes.getSuccess())
                return validateSaleRes;

            Sale toSave = Sale.builder()
                    .customer(customerRepository.getReferenceById(request.getCustomerId()))
                    .subTotal(request.getSubTotal())
                    .grandTotal(request.getGrandTotal())
                    .discount(request.getDiscount())
                    .build();
            Sale savedSale = saleRepository.save(toSave);
            savedSale.setBarcode(SaleUtil.generateBarcode(savedSale));
            List<SaleItem> savedItems = new ArrayList<>();
            request.getSaleItems().forEach(req -> savedItems.add(this.saveSaleItem(req, savedSale)));
            this.updateQuantityAfterSale(savedItems);
            savedSale.setSaleItems(savedItems);
            saleRepository.save(savedSale);
            this.saleReceiptService.generateSaleReceipt(savedSale);
            return new ApiResponse(SaleConverter.convert(savedSale), StatusCode.CREATED);
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
        // TODO
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
        Double grandTotal = total - (request.getDiscount() * total / 100);
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

    private void updateQuantityAfterSale(List<SaleItem> saleItems) {
        saleItems.forEach(saleItem -> {
            Product product = productRepository.findById(saleItem.getProduct().getId()).orElseThrow();
            int oldQty = product.getProductBasic().getQuantity();
            int newQty = oldQty - saleItem.getQuantity();
            product.getProductBasic().setQuantity(newQty);
            productRepository.save(product);
        });
    }

}
