package com.anaselrayan.springcashiero.features.dashboard.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.customers.repository.CustomerRepository;
import com.anaselrayan.springcashiero.features.dashboard.data.BestSellingProduct;
import com.anaselrayan.springcashiero.features.dashboard.data.DashboardSnapshotResponse;
import com.anaselrayan.springcashiero.features.dashboard.data.MonthSalesResponse;
import com.anaselrayan.springcashiero.features.products.converter.ProductConverter;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.repository.SaleItemRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.features.sales.util.SaleUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class DashboardService {

    private final SaleRepository saleRepository;
    private final CustomerRepository customerRepository;
    private final SaleItemRepository saleItemRepository;
    private final ProductRepository productRepository;

    public ApiResponse getDashboardSnapshot() {
        List<Sale> todaySales = saleRepository.findAllByCreatedAtAfter(LocalDate.now().atStartOfDay());
        double quantity = 0.0;
        double revenue = 0.0;
        for (Sale sale : todaySales) {
            revenue += SaleUtil.getSaleRevenue(sale);
            quantity += sale.getGrandTotal();
        }
        DashboardSnapshotResponse res = DashboardSnapshotResponse.builder()
                .todaySalesCount(todaySales.size())
                .todaySalesQuantity(quantity)
                .todaySalesRevenue(revenue)
                .totalCustomers(customerRepository.count())
                .build();
        return new ApiResponse(res, StatusCode.OK);
    }

    public ApiResponse getTopSellingProducts(String type) {
        LocalDateTime startDate;
        if (type == null) startDate = LocalDate.now().minusYears(1).atStartOfDay();
        else if ("month".equals(type)) startDate = LocalDate.now().minusMonths(1).atStartOfDay();
        else if ("week".equals(type)) startDate = LocalDate.now().minusWeeks(1).atStartOfDay();
        else startDate = LocalDate.now().minusYears(1).atStartOfDay();
        Pageable pageable = PageRequest.of(0, 5);
        List<Object[]> result = saleItemRepository.findTopSoldProducts(startDate, pageable);
        List<BestSellingProduct> bestSellingProducts = result.stream().map(row -> {
            Product product = (Product) row[0];
            Double totalSold = (Double) row[1];
            return new BestSellingProduct(ProductConverter.convert(product), totalSold);
        }).toList();

        return new ApiResponse(bestSellingProducts, StatusCode.OK);
    }

    public ApiResponse getMonthlySales(int year) {
        List<Object[]> result = saleItemRepository.getMonthlySales(year);
        List<MonthSalesResponse> bestSellingProducts = result.stream().map(row -> {
            Integer month = (Integer) row[0];
            Double total = (Double) row[1];
            Double revenue = (Double) row[2];
            return new MonthSalesResponse(month, total, revenue);
        }).toList();
        return new ApiResponse(bestSellingProducts, StatusCode.OK);
    }

    public ApiResponse getLowStockProducts() {
        PageRequest pr = PageRequest.of(0, 100);
        List<Product> list = productRepository.findMinStockProducts(pr);
        return new ApiResponse(ProductConverter.convert(list), StatusCode.OK);
    }

}
