package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.sales.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    List<Sale> findAllByCreatedAtAfter(LocalDateTime createdAt);
}
