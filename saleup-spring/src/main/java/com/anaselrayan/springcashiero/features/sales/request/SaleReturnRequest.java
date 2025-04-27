package com.anaselrayan.springcashiero.features.sales.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
public class SaleReturnRequest {

    private Long saleId;

    @NotNull(message = "return items can't be null")
    @Size(min = 1, message = "return items should have at least one")
    @Valid
    private List<SaleReturnItemRequest> returnItems;

    @NotNull(message = "fees amount can't be null")
    @Min(value = 0, message = "fees amount can't be negative")
    private Double feesAmount;

}
