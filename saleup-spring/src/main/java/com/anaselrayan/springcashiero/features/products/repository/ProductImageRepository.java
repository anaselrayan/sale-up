package com.anaselrayan.springcashiero.features.products.repository;

import com.anaselrayan.springcashiero.features.products.model.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
