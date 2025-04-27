package com.anaselrayan.springcashiero.features.sales.request;

import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import lombok.Data;

@Data
public class ReceiptItemRequest {
    private String itemName;
    private Integer itemQty;
    private Double itemPrice;
    private Double totalPrice;

    public ReceiptItemRequest(SaleItem item) {
        this.itemName = item.getProduct().getProductBasic().getProductName();
        this.itemQty = item.getQuantity();
        this.itemPrice = item.getUnitPrice();
        this.totalPrice = Math.round(item.getSubTotal() * 100.0) / 100.0;
    }

}
