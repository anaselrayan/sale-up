package com.anaselrayan.springcashiero.features.reports;

import com.anaselrayan.springcashiero.features.sales.repository.SaleItemRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReportService {

    private final SaleRepository saleRepository;
    private final SaleItemRepository saleItemRepository;

    public ApiResponse getProductReport() {
        List<ProductReportResponse> data = saleItemRepository.productReport();
        return new ApiResponse(data, StatusCode.OK);
    }

    public ApiResponse getSalesKpis(ReportFilterRequest req) {
        SalesKpiResponse data = saleRepository.getSalesKPIsInRange(req.from(), req.to());
        return new ApiResponse(data, StatusCode.OK);
    }

    public ApiResponse getSalesSummary(ReportFilterRequest req) {
        List<SaleSummaryResponse> data = saleItemRepository.getSalesSummaryInRange(req.from(), req.to());
        return new ApiResponse(data, StatusCode.OK);
    }

}
