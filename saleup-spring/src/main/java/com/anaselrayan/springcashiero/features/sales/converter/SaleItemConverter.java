package com.anaselrayan.springcashiero.features.sales.converter;

import com.anaselrayan.springcashiero.features.products.converter.ProductConverter;
import com.anaselrayan.springcashiero.features.sales.dto.SaleItemDTO;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;

public class SaleItemConverter {

    public static SaleItemDTO convert(SaleItem from) {
        if (from == null) return null;

        return SaleItemDTO.builder()
                .saleItemId(from.getId())
                .quantity(from.getQuantity())
                .returnedQuantity(from.getReturnedQuantity())
                .unitPrice(from.getUnitPrice())
                .unitCost(from.getUnitCost())
                .subTotal(from.getSubTotal())
                .product(ProductConverter.convert(from.getProduct()))
                .build();
    }

}
