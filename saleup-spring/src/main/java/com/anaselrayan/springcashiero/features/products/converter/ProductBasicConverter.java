package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductBasicDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductBasic;

public class ProductBasicConverter {

    public static ProductBasicDTO convert(ProductBasic from) {
        if (from == null)
            return null;
        return ProductBasicDTO.builder()
                .productBasicId(from.getId())
                .productName(from.getProductName())
                .barcode(from.getBarcode())
                .quantity(from.getQuantity())
                .lowStockPoint(from.getLowStockPoint())
                .description(from.getDescription())
                .productCategory(ProductCategoryConverter.convert(from.getProductCategory()))
                .productBrand(ProductBrandConverter.convert(from.getProductBrand()))
                .productStatus(ProductStatusConverter.convert(from.getProductStatus()))
                .unitOfMeasure(ProductUnitOfMeasureConverter.convert(from.getUnitOfMeasure()))
                .productImages(ProductImageConverter.convert(from.getProductImages()))
                .build();
    }

}
