package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductBrandDTO {

    private Long productBrandId;

    private String name;

    private String description;

    private String imageUrl;

}
