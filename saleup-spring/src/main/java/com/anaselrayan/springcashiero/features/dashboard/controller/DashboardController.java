package com.anaselrayan.springcashiero.features.dashboard.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/snapshot")
    public ResponseEntity<ApiResponse> getDashboardSnapshot() {
        ApiResponse res = dashboardService.getDashboardSnapshot();
        return ResponseEntity.ok(res);
    }

    @GetMapping("/top-selling")
    public ResponseEntity<ApiResponse> getTopSoldProducts(@RequestParam(required = false) String type) {
        ApiResponse res = dashboardService.getTopSellingProducts(type);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/monthly-sales")
    public ResponseEntity<ApiResponse> getMonthlySales(@RequestParam Integer year) {
        ApiResponse res = dashboardService.getMonthlySales(year);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/monthly-sale-returns")
    public ResponseEntity<ApiResponse> getMonthlySaleReturns(@RequestParam Integer year) {
        ApiResponse res = dashboardService.getMonthlySaleReturns(year);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/low-stock")
    public ResponseEntity<ApiResponse> getMinStockProducts() {
        ApiResponse res = dashboardService.getLowStockProducts();
        return ResponseEntity.ok(res);
    }

}
