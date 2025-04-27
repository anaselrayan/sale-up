package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.products.dto.ProductStatisticsSummaryDTO;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface SaleItemRepository extends JpaRepository<SaleItem, Long> {

    @Query("""
    SELECT si.product, SUM(si.subTotal) AS totalSold FROM SaleItem si
    WHERE si.createdAt >= :startDate
    GROUP BY si.product
    ORDER BY totalSold DESC
    """)
    List<Object[]> findTopSoldProducts(LocalDateTime startDate, Pageable pageable);

    @Query("""
    SELECT SUM(si.quantity) AS totalSoldUnits,
           SUM(si.subTotal) AS totalSoldAmount,
           SUM(si.unitCost * si.quantity) AS totalCost,
           (SUM(si.unitPrice * (si.quantity - si.returnedQuantity)) - SUM(si.unitCost * (si.quantity - si.returnedQuantity))) AS totalRevenue
    FROM SaleItem si
    WHERE si.createdAt >= :startDate AND si.product.id = :productId
    GROUP BY si.product
    """)
    ProductStatisticsSummaryDTO findProductStatistics(Long productId, LocalDateTime startDate);

    @Query("""
    SELECT FUNCTION('MONTH', si.createdAt) AS month,
    SUM(si.subTotal) AS total,
    (SUM(si.unitPrice * (si.quantity - si.returnedQuantity)) - SUM(si.unitCost * (si.quantity - si.returnedQuantity))) AS revenue
    FROM SaleItem si
    WHERE FUNCTION('YEAR', si.createdAt) = :year
    GROUP BY FUNCTION('MONTH', si.createdAt)
    ORDER BY FUNCTION('MONTH', si.createdAt)
    """)
    List<Object[]> getMonthlySales(int year);
}
