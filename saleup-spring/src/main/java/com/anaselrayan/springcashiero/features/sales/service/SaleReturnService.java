package com.anaselrayan.springcashiero.features.sales.service;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.repository.ProductBasicRepository;
import com.anaselrayan.springcashiero.features.sales.converter.SaleReturnConverter;
import com.anaselrayan.springcashiero.features.sales.dto.SaleReturnDTO;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import com.anaselrayan.springcashiero.features.sales.model.SaleReturn;
import com.anaselrayan.springcashiero.features.sales.model.SaleReturnItem;
import com.anaselrayan.springcashiero.features.sales.repository.SaleItemRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleReturnItemRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleReturnRepository;
import com.anaselrayan.springcashiero.features.sales.request.SaleReturnItemRequest;
import com.anaselrayan.springcashiero.features.sales.request.SaleReturnRequest;
import com.anaselrayan.springcashiero.features.sales.util.SaleReturnUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleReturnService {

    private final SaleReturnRepository saleReturnRepository;
    private final SaleReturnItemRepository saleReturnItemRepository;
    private final SaleRepository saleRepository;
    private final SaleItemRepository saleItemRepository;
    private final ProductBasicRepository productBasicRepository;

    public ApiResponse createSaleReturn(SaleReturnRequest request) {
        try {
            ApiResponse validateResponse = validateReturnRequest(request);
            if (!validateResponse.getSuccess())
                return validateResponse;

            Sale sale = saleRepository.findById(request.getSaleId()).orElseThrow();
            SaleReturn saleReturn = SaleReturn.builder()
                    .sale(saleRepository.getReferenceById(request.getSaleId())).build();
            SaleReturn saleReturnWithId = saleReturnRepository.save(saleReturn);
            saleReturnWithId.setBarcode(SaleReturnUtil.generateBarcode(saleReturn.getId()));

            double returnAmount = 0.0;
            for (SaleReturnItemRequest itemRequest : request.getReturnItems()) {
                double itemSubTotal = SaleReturnUtil.getSaleReturnItemSubTotal(itemRequest, sale);
                returnAmount += itemSubTotal;
                SaleItem saleItem = SaleReturnUtil.getSaleItemForReturn(itemRequest, sale);
                SaleReturnItem returnItem = SaleReturnItem.builder()
                        .saleItem(saleItem)
                        .saleReturn(saleReturnWithId)
                        .quantity(itemRequest.getQuantity())
                        .subTotal(itemSubTotal)
                        .build();
                saleReturnItemRepository.save(returnItem);
                saleItem.setReturnedQuantity(saleItem.getReturnedQuantity() + returnItem.getQuantity());
                saleItemRepository.save(saleItem);
                this.updateProductQuantity(saleItem, returnItem);
            }
            // Update Sale Total
            sale.setPartiallyReturned(true);
            saleRepository.save(sale);
            // Check if all the sale items has been returned
            checkTotallyReturned(sale.getId());
            // Update Sale Return Total
            saleReturnWithId.setSubTotal(returnAmount);
            saleReturnWithId.setFeesAmount(request.getFeesAmount());
            saleReturnWithId.setTotalReturn(returnAmount - request.getFeesAmount());
            return new ApiResponse(SaleReturnConverter.convert(saleReturnRepository.save(saleReturnWithId)), StatusCode.CREATED);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new ApiResponse(false, StatusCode.BAD_REQUEST, e.getMessage());
        }
    }

    public ApiResponse getSaleReturnPage(PageRequest pr) {
        try {
            Page<SaleReturn> saleReturnPage = saleReturnRepository.findAll(pr.withSort(Sort.Direction.DESC, "createdAt"));
            PageImpl<SaleReturnDTO> dtoPage = new PageImpl<>(
                    saleReturnPage.getContent().stream().map(SaleReturnConverter::convert).toList(),
                    saleReturnPage.getPageable(),
                    saleReturnPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getSaleReturnsBySaleId(Long saleId, PageRequest pr) {
        try {
            Page<SaleReturn> saleReturnPage = saleReturnRepository.findAllBySaleId(saleId, pr.withSort(Sort.Direction.DESC, "createdAt"));
            PageImpl<SaleReturnDTO> dtoPage = new PageImpl<>(
                    saleReturnPage.getContent().stream().map(SaleReturnConverter::convert).toList(),
                    saleReturnPage.getPageable(),
                    saleReturnPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getSaleReturnById(Long id) {
        Optional<SaleReturn> saleReturn = saleReturnRepository.findById(id);
        if (saleReturn.isPresent()) {
            return new ApiResponse(SaleReturnConverter.convert(saleReturn.get()), StatusCode.OK);
        }
        return new ApiResponse(false, StatusCode.BAD_REQUEST, "SaleReturn not found");
    }

    private ApiResponse validateReturnRequest(SaleReturnRequest request) {
        assert request.getReturnItems() != null;
        Optional<Sale> optionalSale = saleRepository.findById(request.getSaleId());
        if (optionalSale.isEmpty())
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "Sale not found");

        // The return item request should exist once in the return request
        for (SaleReturnItemRequest itemRequest : request.getReturnItems()) {
            if (!SaleReturnUtil.saleReturnItemRequestExistingOnce(itemRequest, request.getReturnItems()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Sale return item exists many times");
        }

        // The return item request should reference to existing sale item and have a correct quantity
        for (SaleReturnItemRequest itemRequest : request.getReturnItems()) {
            if (!validItemRequest(itemRequest, optionalSale.get()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid item");
        }

        return new ApiResponse("valid", StatusCode.OK);
    }

    private boolean validItemRequest(SaleReturnItemRequest req, Sale sale) {
        SaleItem existingItem = null;
        for (SaleItem item : sale.getSaleItems()) {
            if (Objects.equals(item.getId(), req.getSaleItemId())) {
                existingItem = item;
                break;
            }
        }
        return existingItem != null && req.getQuantity() <= existingItem.getQuantity();
    }

    private void checkTotallyReturned(Long saleId) {
        Sale sale = saleRepository.findById(saleId).orElseThrow();
        int count = 0;
        for (SaleItem item : sale.getSaleItems()) {
            if (item.getQuantity().equals(item.getReturnedQuantity())) {
                count++;
            }
        }
        if (count == sale.getSaleItems().size()) {
            sale.setPartiallyReturned(false);
            sale.setTotallyReturned(true);
            saleRepository.save(sale);
        }
    }

    private void updateProductQuantity(SaleItem saleItem, SaleReturnItem saleReturnItem) {
        int oldQty = saleItem.getProduct().getProductBasic().getQuantity();
        saleItem.getProduct().getProductBasic().setQuantity(oldQty + saleReturnItem.getQuantity());
        productBasicRepository.save(saleItem.getProduct().getProductBasic());
    }

    private void updateQuantityAfterDeleteSaleReturn(SaleReturn saleReturn) {
        saleReturn.getReturnItems().forEach(saleReturnItem -> {
            int oldProductQty = saleReturnItem.getSaleItem().getProduct().getProductBasic().getQuantity();
            int oldReturnQty = saleReturnItem.getSaleItem().getReturnedQuantity();
            saleReturnItem.getSaleItem().setReturnedQuantity(oldReturnQty - saleReturnItem.getQuantity());
            saleReturnItem.getSaleItem().getProduct().getProductBasic().setQuantity(oldProductQty - saleReturnItem.getQuantity());
            productBasicRepository.save(saleReturnItem.getSaleItem().getProduct().getProductBasic());
        });
    }

    public ApiResponse deleteSaleReturn(Long saleReturnId) {
        try {
            SaleReturn saleReturn = saleReturnRepository.findById(saleReturnId).orElseThrow();
            Sale sale = saleReturn.getSale();
            updateQuantityAfterDeleteSaleReturn(saleReturn);
            saleReturnRepository.delete(saleReturn);
            sale.setTotallyReturned(false);
            sale.setPartiallyReturned(saleReturnRepository.countBySaleId(sale.getId()) > 0);
            saleRepository.save(sale);
            return new ApiResponse(true, StatusCode.OK, "Deleted Successfully");
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
