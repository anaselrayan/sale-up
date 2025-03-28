package com.anaselrayan.springcashiero.features.products.request;

import com.anaselrayan.springcashiero.features.products.enums.DiscountType;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProductDiscountRequest {
    @NotNull(message = "product id can't be null")
    private Long productId;
    private Boolean discountActive;
    @NotNull(message = "discount type can't be null")
    private DiscountType discountType;
    @NotNull(message = "discount amount can't be null")
    private Double discountAmount;
    @NotNull(message = "discount start date can't be null")
    private LocalDateTime discountStartDate;
    @NotNull(message = "discount end date can't be null")
    private LocalDateTime discountEndDate;
}
