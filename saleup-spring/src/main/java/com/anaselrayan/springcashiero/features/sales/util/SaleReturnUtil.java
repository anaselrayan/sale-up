package com.anaselrayan.springcashiero.features.sales.util;

import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import com.anaselrayan.springcashiero.features.sales.model.SaleReturn;
import com.anaselrayan.springcashiero.features.sales.request.SaleReturnItemRequest;

import java.text.DecimalFormat;
import java.util.List;

public class SaleReturnUtil {

    public static boolean saleReturnItemRequestExistingOnce(SaleReturnItemRequest req, List<SaleReturnItemRequest> itemRequests) {
        int count = 0;
        for (SaleReturnItemRequest reqItem : itemRequests) {
            if (count > 1) return false;
            if (reqItem.getSaleItemId().equals(req.getSaleItemId())) {
                count++;
            }
        }
        return count == 1;
    }

    public static double getSaleReturnItemSubTotal(SaleReturnItemRequest req, Sale sale) {
        for (SaleItem saleItem : sale.getSaleItems()) {
            if (saleItem.getId().equals(req.getSaleItemId())) {
                return req.getQuantity() * saleItem.getUnitPrice();
            }
        }
        return 0;
    }

    public static SaleItem getSaleItemForReturn(SaleReturnItemRequest req, Sale sale) {
        for (SaleItem saleItem : sale.getSaleItems()) {
            if (saleItem.getId().equals(req.getSaleItemId())) {
                return saleItem;
            }
        }
        throw new IllegalArgumentException("No such sale item");
    }

    public static String generateBarcode(Long id) {
        DecimalFormat formatter = new DecimalFormat("000000");
        return  "SR_" + formatter.format(id);
    }

}
