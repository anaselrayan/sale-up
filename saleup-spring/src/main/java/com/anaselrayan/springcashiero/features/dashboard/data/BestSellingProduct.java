package com.anaselrayan.springcashiero.features.dashboard.data;

import com.anaselrayan.springcashiero.features.products.dto.ProductDTO;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BestSellingProduct {
    private ProductDTO product;
    private Double totalSold;
}
