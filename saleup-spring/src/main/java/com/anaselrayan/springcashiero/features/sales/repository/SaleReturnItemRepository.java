package com.anaselrayan.springcashiero.features.sales.repository;

import com.anaselrayan.springcashiero.features.sales.model.SaleReturnItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SaleReturnItemRepository extends JpaRepository<SaleReturnItem, Long> {
}
