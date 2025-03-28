package com.anaselrayan.springcashiero.features.sales.repository;

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

}
