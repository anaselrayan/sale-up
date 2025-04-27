package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductUnitOfMeasureDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductUnitOfMeasure;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProductUnitOfMeasureConverter {

    public static ProductUnitOfMeasureDTO convert(ProductUnitOfMeasure from) {
        if (from == null)
            return null;
        return ProductUnitOfMeasureDTO.builder()
                .unitOfMeasureId(from.getId())
                .code(from.getCode())
                .name(from.getName())
                .build();
    }

    public static List<ProductUnitOfMeasureDTO> convert(List<ProductUnitOfMeasure> from) {
        if (from == null) return Collections.emptyList();
        return from.stream().map(ProductUnitOfMeasureConverter::convert).collect(Collectors.toList());
    }

}
