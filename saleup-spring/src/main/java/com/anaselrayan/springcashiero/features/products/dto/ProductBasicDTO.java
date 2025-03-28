package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class ProductBasicDTO {

    private Long productBasicId;

    private ProductCategoryDTO productCategory;

    private ProductUnitOfMeasureDTO unitOfMeasure;

    private ProductStatusDTO productStatus;

    private ProductBrandDTO productBrand;

    private List<ProductImageDTO> productImages;

    private String productName;

    private String barcode;

    private String description;

    private Integer lowStockPoint;

    private Integer quantity;

}
