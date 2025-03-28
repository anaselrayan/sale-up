package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductBrandDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductBrand;

import java.util.List;
import java.util.stream.Collectors;

public class ProductBrandConverter {

    public static ProductBrandDTO convert(ProductBrand from) {
        if (from == null)
            return null;
        return ProductBrandDTO.builder()
                .productBrandId(from.getId())
                .name(from.getName())
                .description(from.getDescription())
                .imageUrl(from.getImageUrl())
                .build();
    }

    public static List<ProductBrandDTO> convert(List<ProductBrand> from) {
        return from.stream().map(ProductBrandConverter::convert).collect(Collectors.toList());
    }

}
