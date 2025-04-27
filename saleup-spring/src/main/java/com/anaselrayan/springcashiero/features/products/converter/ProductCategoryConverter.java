package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductCategoryDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductCategory;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProductCategoryConverter {
    public static ProductCategoryDTO convert(ProductCategory from) {
        if (from == null)
            return null;
        return ProductCategoryDTO.builder()
                .productCategoryId(from.getId())
                .name(from.getName())
                .description(from.getDescription())
                .imageUrl(from.getImageUrl())
                .build();
    }

    public static List<ProductCategoryDTO> convert(List<ProductCategory> from) {
        if (from == null) return Collections.emptyList();
        return from.stream().map(ProductCategoryConverter::convert).collect(Collectors.toList());
    }

}
