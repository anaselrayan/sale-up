package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.dto.ProductStatisticsSummaryDTO;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import com.anaselrayan.springcashiero.features.sales.repository.SaleItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductStatisticsService {

    private final SaleItemRepository saleItemRepository;
    private final ProductRepository productRepository;

    public ApiResponse getProductStatisticsSummary(Long productId, String range) {
        if (!productRepository.existsById(productId))
            return new ApiResponse(false, StatusCode.NOT_FOUND, "Product doesn't exist");

        LocalDateTime startDate;
        if (range == null) startDate = LocalDate.now().minusYears(1).atStartOfDay();
        else if ("day".equals(range)) startDate = LocalDate.now().atStartOfDay();
        else if ("week".equals(range)) startDate = LocalDate.now().minusWeeks(1).atStartOfDay();
        else if ("month".equals(range)) startDate = LocalDate.now().minusMonths(1).atStartOfDay();
        else startDate = LocalDate.now().minusYears(1).atStartOfDay();

        ProductStatisticsSummaryDTO dto = saleItemRepository.findProductStatistics(productId, startDate);
        return new ApiResponse(dto, StatusCode.OK);
    }

}
