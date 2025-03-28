package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.ProductBasic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductBasicRepository extends JpaRepository<ProductBasic, Long> {
}
