package com.anaselrayan.springcashiero.features.sales.converter;

import com.anaselrayan.springcashiero.features.sales.dto.SaleReturnDTO;
import com.anaselrayan.springcashiero.features.sales.model.SaleReturn;

public class SaleReturnConverter {

    public static SaleReturnDTO convert(SaleReturn from) {
        if (from == null) return null;

        return SaleReturnDTO.builder()
                .saleReturnId(from.getId())
                .sale(SaleConverter.convert(from.getSale()))
                .returnItems(SaleReturnItemConverter.from(from.getReturnItems()))
                .feesAmount(from.getFeesAmount())
                .subTotal(from.getSubTotal())
                .totalAmount(from.getTotalReturn())
                .returnDate(from.getCreatedAt())
                .returnedBy(from.getCreatedBy())
                .barcode(from.getBarcode())
                .build();
    };

}
