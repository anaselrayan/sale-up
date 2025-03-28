package com.anaselrayan.springcashiero.features.dashboard.data;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DashboardSnapshotResponse {
    private Integer todaySalesCount;
    private Double todaySalesQuantity;
    private Double todaySalesRevenue;
    private Long totalCustomers;
}
