package com.anaselrayan.springcashiero.features.reports;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/report")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @PreAuthorize("hasAuthority('perm.product-report')")
    @GetMapping("/products")
    public ResponseEntity<ApiResponse> getProductsReport() {
        var res = reportService.getProductReport();
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.sales-report')")
    @PostMapping("/sales-kpi")
    public ResponseEntity<ApiResponse> getSalesKpisReport(@RequestBody ReportFilterRequest filterReq) {
        var res = reportService.getSalesKpis(filterReq);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.sales-report')")
    @PostMapping("/sales-summary")
    public ResponseEntity<ApiResponse> getSalesSummary(@RequestBody ReportFilterRequest filterRequest) {
        var res = reportService.getSalesSummary(filterRequest);
        return ResponseEntity.ok(res);
    }

}
