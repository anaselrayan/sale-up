package com.anaselrayan.springcashiero.features.sales.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SaleReturnItemDTO {

    private Long returnItemId;

    private SaleItemDTO saleItem;

    private Integer quantity;

    private Double subTotal;

}
