package com.anaselrayan.springcashiero.features.products.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductStockSimpleRequest {
    @NotNull(message = "product id can't be null")
    private Long productId;
    @NotNull(message = "product quantity can't be null")
    private Integer quantity;
    @NotNull(message = "product price can't be null")
    private Double price;
    @NotNull(message = "product cost can't be null")
    private Double cost;
}
