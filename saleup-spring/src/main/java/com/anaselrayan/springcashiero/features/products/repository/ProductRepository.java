package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.reports.ProductKpiResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    boolean existsByProductBasicBarcode(String barcode);

    @Query("""
    SELECT p FROM Product  p WHERE (p.productBasic.productName LIKE %:keyword% OR p.productBasic.barcode LIKE %:keyword%)
    AND p.deleted = false""")
    Page<Product> findByKeywordAndDeletedFalse(String keyword, Pageable pageable);

    Optional<Product> findByProductBasicBarcode(String barcode);

    @Query("""
    SELECT p FROM Product p
    WHERE p.productBasic.quantity <= p.productBasic.lowStockPoint AND p.deleted = false
    ORDER BY p.productBasic.lowStockPoint
    """)
    List<Product> findMinStockProducts(Pageable pageable);

    Page<Product> findAllByDeletedFalse(Pageable pageable);
    List<Product> findAllByDeletedFalse();

    @Query("""
    SELECT sum(p.productBasic.quantity) as remainingTotalQty, sum(p.productPrice.costPrice) * p.productBasic.quantity as remainingTotalCost,
         sum(p.productPrice.sellingPrice) * p.productBasic.quantity as remainingTotalSales,
         (sum(p.productPrice.sellingPrice) - sum(p.productPrice.costPrice)) * p.productBasic.quantity as remainingTotalRevenue
         FROM Product p WHERE p.deleted = false
    """)
    ProductKpiResponse getProductKpis();
}
