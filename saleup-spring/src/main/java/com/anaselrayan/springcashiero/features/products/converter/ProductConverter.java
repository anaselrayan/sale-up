package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductDTO;
import com.anaselrayan.springcashiero.features.products.model.Product;

public class ProductConverter {

    public static ProductDTO convert(Product from) {
        if (from == null)
            return null;
        return ProductDTO.builder()
                .productId(from.getId())
                .basicDetails(ProductBasicConverter.convert(from.getProductBasic()))
                .priceDetails(ProductPriceConverter.convert(from.getProductPrice()))
                .build();
    }

}
