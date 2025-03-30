package com.anaselrayan.springcashiero.features.sales.dto;

import com.anaselrayan.springcashiero.features.products.dto.ProductDTO;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SaleItemDTO {

    private Long saleItemId;

    private ProductDTO product;

    private Integer quantity;

    private Double unitPrice;

    private Double unitCost;

    private Double subTotal;

}
