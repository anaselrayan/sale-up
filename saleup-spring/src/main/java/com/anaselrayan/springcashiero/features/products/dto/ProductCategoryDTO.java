package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductCategoryDTO {

    private Long productCategoryId;

    private String name;

    private String description;

    private String imageUrl;

    private ProductCategoryDTO parentCategory;

}
