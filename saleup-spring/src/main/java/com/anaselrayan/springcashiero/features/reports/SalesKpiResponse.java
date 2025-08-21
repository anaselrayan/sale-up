package com.anaselrayan.springcashiero.features.reports;

public interface SalesKpiResponse {

    Long getTotalSales();
    Double getTotalRevenue();
    Double getTotalDiscount();
    Long getTotalItemsSold();
    Long getTotalItemsReturned();
    Double getTotalReturnsValue();
    Double getTotalProfit();
    Double getAverageSaleValue();

}