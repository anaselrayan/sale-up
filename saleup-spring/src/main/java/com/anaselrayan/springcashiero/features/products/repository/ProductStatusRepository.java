package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.ProductStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductStatusRepository extends JpaRepository<ProductStatus, Long> {
}
