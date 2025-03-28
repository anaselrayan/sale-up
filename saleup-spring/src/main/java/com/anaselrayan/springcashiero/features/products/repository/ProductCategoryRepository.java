package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
