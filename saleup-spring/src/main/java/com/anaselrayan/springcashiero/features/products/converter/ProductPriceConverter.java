package com.anaselrayan.springcashiero.features.products.converter;

import com.anaselrayan.springcashiero.features.products.dto.ProductPriceDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductPrice;
import com.anaselrayan.springcashiero.features.products.utils.ProductUtils;

public class ProductPriceConverter {

    public static ProductPriceDTO convert(ProductPrice from) {
        if (from == null)
            return null;
        return ProductPriceDTO.builder()
                .productPriceId(from.getId())
                .costPrice(from.getCostPrice())
                .sellingPrice(from.getSellingPrice())
                .discountDisabled(from.getDiscountDisabled())
                .discountType(from.getDiscountType())
                .discountRangeActive(ProductUtils.activeDiscountRange(from))
                .discountAmount(from.getDiscountAmount())
                .discountStartDate(from.getDiscountStartDate())
                .discountEndDate(from.getDiscountEndDate())
                .priceWithDiscount(ProductUtils.getProductPriceWithDiscount(from))
                .build();
    }

}
