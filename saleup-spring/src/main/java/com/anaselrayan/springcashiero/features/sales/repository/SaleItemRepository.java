package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.products.dto.ProductStatisticsSummaryDTO;
import com.anaselrayan.springcashiero.features.reports.ProductReportResponse;
import com.anaselrayan.springcashiero.features.reports.SaleSummaryResponse;
import com.anaselrayan.springcashiero.features.sales.model.SaleItem;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    @Query("""
        SELECT pb.barcode as productBarcode,
           pb.productName as productName,
           COALESCE(SUM(si.quantity), 0) AS soldQty,
           COALESCE(SUM(si.subTotal), 0) AS soldAmount,
           COALESCE(SUM(si.unitPrice * (si.quantity - si.returnedQuantity)) - SUM(si.unitCost * (si.quantity - si.returnedQuantity)), 0) AS soldProfit,
           pb.quantity as availableQty,
           pb.quantity * pp.sellingPrice as availableAmount,
           (pb.quantity * pp.sellingPrice - pb.quantity * pp.costPrice) AS availableProfit,
           COALESCE(SUM(si.returnedQuantity), 0) AS returnedQty
        FROM Product p
        LEFT JOIN p.productBasic pb
        LEFT JOIN p.productPrice pp
        LEFT JOIN SaleItem si ON si.product = p
        WHERE p.deleted = false
        GROUP BY p
        ORDER BY 8 DESC
    """)
    List<ProductReportResponse> productReport();

    @Query("""
    SELECT
        s.id AS id,
        s.barcode AS barcode,
        s.createdAt AS createdAt,
        c.fullName AS customerName,
        COUNT(si.id) AS numberOfItems,
        SUM(si.quantity) AS totalQuantity,
        SUM(si.returnedQuantity) AS returnedQuantity,
        s.subTotal AS subTotal,
        s.discount AS discount,
        s.grandTotal AS grandTotal,
        SUM((si.unitPrice - si.unitCost) * (si.quantity - si.returnedQuantity)) AS profit,
        s.partiallyReturned AS partiallyReturned,
        s.totallyReturned AS totallyReturned
    FROM SaleItem si
    JOIN si.sale s
    LEFT JOIN s.customer c
    WHERE s.createdAt BETWEEN :from AND :to
    GROUP BY s.id
    ORDER BY s.createdAt DESC
    """)
    List<SaleSummaryResponse> getSalesSummaryInRange(@Param("from") LocalDateTime from,
                                                     @Param("to") LocalDateTime to);

}
