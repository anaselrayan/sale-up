package com.anaselrayan.springcashiero.features.sales.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SaleReturnItemRequest {

    private Long saleItemId;

    @NotNull(message = "return quantity can't be null")
    @Min(value = 1, message = "the return quantity should be at least one")
    private Integer quantity;

}