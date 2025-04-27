package com.anaselrayan.springcashiero.features.sales.converter;

import com.anaselrayan.springcashiero.features.sales.dto.SaleReturnItemDTO;
import com.anaselrayan.springcashiero.features.sales.model.SaleReturnItem;

import java.util.Collections;
import java.util.List;

public class SaleReturnItemConverter {

    public static SaleReturnItemDTO from(SaleReturnItem from) {
        return SaleReturnItemDTO.builder()
                .returnItemId(from.getId())
                .saleItem(SaleItemConverter.convert(from.getSaleItem()))
                .quantity(from.getQuantity())
                .subTotal(from.getSubTotal())
                .build();
    }

    public static List<SaleReturnItemDTO> from(List<SaleReturnItem> from) {
        if (from == null) return Collections.emptyList();
        return from.stream().map(SaleReturnItemConverter::from).toList();
    }

}
