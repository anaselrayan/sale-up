package com.anaselrayan.springcashiero.features.sales.converter;

import com.anaselrayan.springcashiero.features.customers.converter.CustomerConverter;
import com.anaselrayan.springcashiero.features.sales.dto.SaleDTO;
import com.anaselrayan.springcashiero.features.sales.model.Sale;

public class SaleConverter {

    public static SaleDTO convert(Sale from) {
        if (from == null) return null;

        return SaleDTO.builder()
                .saleId(from.getId())
                .createdAt(from.getCreatedAt())
                .createdBy(from.getCreatedBy())
                .customer(CustomerConverter.convert(from.getCustomer()))
                .saleItems(from.getSaleItems().stream().map(SaleItemConverter::convert).toList())
                .grandTotal(from.getGrandTotal())
                .discount(from.getDiscount())
                .build();
    }
}
