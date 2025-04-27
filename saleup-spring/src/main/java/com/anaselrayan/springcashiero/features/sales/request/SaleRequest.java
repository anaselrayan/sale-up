package com.anaselrayan.springcashiero.features.sales.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
public class SaleRequest {

    private Long saleId;

    private Long customerId;

    @NotNull(message = "sale item list can't be null")
    @Size(min = 1, message = "any sale can has at least one item")
    @Valid
    private List<SaleItemRequest> saleItems;

    @NotNull(message = "sub total can't be null")
    private Double subTotal;

    @NotNull(message = "grand total can't be null")
    private Double grandTotal;

    private Double discount;

}
