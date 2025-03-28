package com.anaselrayan.springcashiero.features.sales.util;

import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;

public class SaleUtil {

    public static double getSaleRevenue(Sale sale) {
        double cost = 0.0;
        for (SaleItem item : sale.getSaleItems()) {
            cost += item.getProduct().getProductPrice().getCostPrice();
        }
        return sale.getGrandTotal() - cost;
    }

}
