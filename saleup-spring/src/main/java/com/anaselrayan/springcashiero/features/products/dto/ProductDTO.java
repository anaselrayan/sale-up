package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductDTO {

    private Long productId;

    private ProductBasicDTO basicDetails;

    private ProductPriceDTO priceDetails;

}
