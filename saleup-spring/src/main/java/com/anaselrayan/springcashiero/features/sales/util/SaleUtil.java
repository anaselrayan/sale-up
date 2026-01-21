package com.anaselrayan.springcashiero.features.sales.util;

import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

public class SaleUtil {

    public static double getSaleRevenue(Sale sale) {
        double totalCost = 0.0;
        double totalPrice = 0.0;
        for (SaleItem item : sale.getSaleItems()) {
            totalCost += ((item.getQuantity() - item.getReturnedQuantity()) * item.getUnitCost());
            totalPrice += ((item.getQuantity() - item.getReturnedQuantity()) * item.getUnitPrice());
        }
        return totalPrice - (totalCost + sale.getDiscount());
    }

    public static String generateBarcode(Sale sale) {
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.US);
        DecimalFormat formatter = new DecimalFormat("000000", symbols);
        return  "SL_" + formatter.format(sale.getId());
    }

}
