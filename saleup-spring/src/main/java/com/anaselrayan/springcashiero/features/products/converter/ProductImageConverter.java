package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductImageDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductImage;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProductImageConverter {

    public static ProductImageDTO convert(ProductImage from) {
        if (from == null)
            return null;
        return ProductImageDTO.builder()
                .productImageId(from.getId())
                .fileName(from.getFileName())
                .filePath(from.getFilePath())
                .imageOrder(from.getImageOrder())
                .isPrimary(from.getIsPrimary())
                .build();
    }

    public static List<ProductImageDTO> convert(List<ProductImage> from) {
        if (from == null)
            return Collections.emptyList();
        return from.stream().map(ProductImageConverter::convert).collect(Collectors.toList());
    }

}
