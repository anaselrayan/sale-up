package com.anaselrayan.springcashiero.features.products.utils;

import com.anaselrayan.springcashiero.features.products.enums.DiscountType;
import com.anaselrayan.springcashiero.features.products.model.ProductPrice;

import java.time.LocalDateTime;

public class ProductUtils {

    public static boolean validProductDiscount(ProductPrice price) {
        LocalDateTime now = LocalDateTime.now();
        return price.getDiscountAmount() != null &&
                price.getDiscountActive() &&
                price.getDiscountStartDate() != null &&
                price.getDiscountEndDate() != null &&
                now.isAfter(price.getDiscountStartDate()) &&
                now.isBefore(price.getDiscountEndDate());
    }

    public static Double getProductPriceWithDiscount(ProductPrice price) {
        if (validProductDiscount(price)) {
            if (DiscountType.FIXED.equals(price.getDiscountType())) {
                return price.getSellingPrice() - price.getDiscountAmount();
            }
            else if (DiscountType.PERCENT.equals(price.getDiscountType())){
                return price.getSellingPrice() - (price.getDiscountAmount() / 100 * price.getSellingPrice());
            }
        }
        return price.getSellingPrice();
    }

    public static boolean validDiscountAmount(Double amount, DiscountType type, ProductPrice price) {
        // TODO: Set maximum discount amount
        if (DiscountType.FIXED.equals(type))
            return amount <= price.getSellingPrice();
        else if (DiscountType.PERCENT.equals(type))
            return amount <= 100;
        return false;
    }

}
