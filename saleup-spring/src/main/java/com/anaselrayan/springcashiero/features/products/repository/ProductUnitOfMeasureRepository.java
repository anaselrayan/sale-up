package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.ProductUnitOfMeasure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductUnitOfMeasureRepository extends JpaRepository<ProductUnitOfMeasure, Long> {
}
