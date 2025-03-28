package com.anaselrayan.springcashiero.features.sales.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SaleItemRequest {

    private Long saleItemId;

    private Long saleId;

    @NotNull(message = "product id can't be null")
    private Long productId;

    @NotNull(message = "quantity can't be null")
    @Min(value = 1, message = "quantity can be at least 1")
    private Integer quantity;

}
