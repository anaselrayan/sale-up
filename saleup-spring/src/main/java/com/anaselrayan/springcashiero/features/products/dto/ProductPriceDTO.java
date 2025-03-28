package com.anaselrayan.springcashiero.features.products.dto;

import com.anaselrayan.springcashiero.features.products.enums.DiscountType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class ProductPriceDTO {

    private Long productPriceId;

    private Double costPrice;

    private Double sellingPrice;

    private Boolean discountActive;

    private DiscountType discountType;

    private Double discountAmount;

    private LocalDateTime discountStartDate;

    private LocalDateTime discountEndDate;

    private Double priceWithDiscount;

}
