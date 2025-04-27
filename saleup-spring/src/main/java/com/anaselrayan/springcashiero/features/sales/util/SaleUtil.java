package com.anaselrayan.springcashiero.features.sales.util;

import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;

import java.text.DecimalFormat;

public class SaleUtil {

    public static double getSaleRevenue(Sale sale) {
        double totalCost = 0.0;
        double totalPrice = 0.0;
        for (SaleItem item : sale.getSaleItems()) {
            totalCost += ((item.getQuantity() - item.getReturnedQuantity()) * item.getUnitCost());
            totalPrice += ((item.getQuantity() - item.getReturnedQuantity()) * item.getUnitPrice());
        }
        return totalPrice - totalCost;
    }

    public static String generateBarcode(Sale sale) {
        DecimalFormat formatter = new DecimalFormat("000000");
        return  "SL_" + formatter.format(sale.getId());
    }

}
