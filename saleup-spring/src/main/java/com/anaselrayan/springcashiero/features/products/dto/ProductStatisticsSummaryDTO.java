package com.anaselrayan.springcashiero.features.products.dto;

public interface ProductStatisticsSummaryDTO {
    Long getTotalSoldUnits();
    Double getTotalSoldAmount();
    Double getTotalCost();
    Double getTotalRevenue();
}
