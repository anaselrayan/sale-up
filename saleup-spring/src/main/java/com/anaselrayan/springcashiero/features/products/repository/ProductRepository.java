package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    boolean existsByProductBasicBarcode(String barcode);

    @Query("""
    SELECT p FROM Product  p WHERE p.productBasic.productName LIKE %:keyword% OR p.productBasic.barcode LIKE %:keyword%
    OR p.productBasic.description LIKE %:keyword%""")
    Page<Product> findByKeyword(String keyword, Pageable pageable);

    Optional<Product> findByProductBasicBarcode(String barcode);

    @Query("""
    SELECT p FROM Product p
    WHERE p.productBasic.quantity <= p.productBasic.lowStockPoint
    ORDER BY p.productBasic.lowStockPoint
    """)
    List<Product> findMinStockProducts(Pageable pageable);
}
