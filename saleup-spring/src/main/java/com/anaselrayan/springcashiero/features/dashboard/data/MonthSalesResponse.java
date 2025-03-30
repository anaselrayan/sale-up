package com.anaselrayan.springcashiero.features.dashboard.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MonthSalesResponse {
    private Integer month;
    private Double total;
    private Double revenue;
}
