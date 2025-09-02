package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.reports.SalesKpiResponse;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    List<Sale> findAllByCreatedAtAfter(LocalDateTime createdAt);

    @Query("""
    SELECT
        COUNT(s.id) AS totalSales,
        SUM(s.grandTotal) AS totalRevenue,
        SUM(s.discount) AS totalDiscount,
        (SELECT SUM(si.quantity) FROM SaleItem si WHERE si.createdAt BETWEEN :from AND :to) AS totalItemsSold,
        (SELECT SUM(si.returnedQuantity) FROM SaleItem si WHERE si.createdAt BETWEEN :from AND :to) AS totalItemsReturned,
        (SELECT SUM(sr.totalReturn) FROM SaleReturn sr WHERE  sr.createdAt BETWEEN :from AND :to) AS totalReturnsValue,
        (SELECT SUM((si.unitPrice - si.unitCost) * (si.quantity - si.returnedQuantity)) FROM SaleItem si WHERE si.createdAt BETWEEN :from AND :to) AS totalProfit,
        AVG(s.grandTotal) AS averageSaleValue
    FROM Sale s
    WHERE s.createdAt BETWEEN :from AND :to
    """)
    SalesKpiResponse getSalesKPIsInRange(@Param("from") LocalDateTime from,
                                         @Param("to") LocalDateTime to);

    @Query("SELECT s.id FROM Sale s WHERE s.barcode = :barcode")
    Optional<Long> findSaleIdByBarcode(@Param("barcode") String barcode);
}
