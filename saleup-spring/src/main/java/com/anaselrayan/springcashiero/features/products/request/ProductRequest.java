package com.anaselrayan.springcashiero.features.products.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class ProductRequest {

    private Long productId;

    private Long productCategoryId;

    private Long unitOfMeasureId;

    private Long productStatusId;

    private Long productBrandId;

    private List<MultipartFile> imageFiles;

    @NotNull(message = "product name can't be null")
    @NotEmpty(message = "product name can't be empty")
    private String productName;

    @NotNull(message = "product name can't be null")
    @NotEmpty(message = "product name can't be empty")
    private String barcode;

    private String description;

    private Integer lowStockPoint;

    private Integer quantity;

    @NotNull(message = "product cost can't be null")
    private Double costPrice;

    @NotNull(message = "product price can't be null")
    private Double sellingPrice;

}
