package com.anaselrayan.springcashiero.features.reports;

import java.time.LocalDateTime;

public interface SaleSummaryResponse {
    Long getId();
    String getBarcode();
    LocalDateTime getCreatedAt();
    String getCustomerName();
    Integer getNumberOfItems();
    Integer getTotalQuantity();
    Integer getReturnedQuantity();
    Double getSubTotal();
    Double getDiscount();
    Double getGrandTotal();
    Double getProfit();
    Boolean getPartiallyReturned();
    Boolean getTotallyReturned();
}
