package com.anaselrayan.springcashiero.features.reports;

public interface ProductReportResponse {
    String getProductBarcode();
    String getProductName();
    Integer getSoldQty();
    Double getSoldAmount();
    Double getSoldProfit();
    Integer getAvailableQty();
    Double getAvailableAmount();
    Double getAvailableProfit();
    Integer getReturnedQty();
}
