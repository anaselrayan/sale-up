package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.sales.model.SaleReturn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleReturnRepository extends JpaRepository<SaleReturn, Long> {

    @Query("""
    SELECT FUNCTION('MONTH', sr.createdAt) AS month,
    SUM(sr.totalReturn) AS total
    FROM SaleReturn sr
    WHERE FUNCTION('YEAR', sr.createdAt) = :year
    GROUP BY FUNCTION('MONTH', sr.createdAt)
    ORDER BY FUNCTION('MONTH', sr.createdAt)
    """)
    List<Object[]> getMonthlySaleReturns(int year);

    @Query("SELECT SUM(sr.totalReturn) FROM SaleReturn sr WHERE DATE(sr.createdAt) = CURRENT_DATE")
    Double getTotalReturn();

    Page<SaleReturn> findAllBySaleId(Long saleId, Pageable pageable);

    int countBySaleId(Long saleId);

}
