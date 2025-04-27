package com.anaselrayan.springcashiero.features.dashboard.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MonthSaleReturnsResponse {
    private Integer month;
    private Double total;
}

