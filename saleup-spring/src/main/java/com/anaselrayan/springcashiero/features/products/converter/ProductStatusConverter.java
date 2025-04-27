package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductStatusDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductStatus;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProductStatusConverter {

    public static ProductStatusDTO convert(ProductStatus from) {
        if (from == null)
            return null;
        return ProductStatusDTO.builder()
                .productStatusId(from.getId())
                .name(from.getName())
                .description(from.getDescription())
                .build();
    }

    public static List<ProductStatusDTO> convert(List<ProductStatus> from) {
        if (from == null) return Collections.emptyList();
        return from.stream().map(ProductStatusConverter::convert).collect(Collectors.toList());
    }

}
