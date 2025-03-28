package com.anaselrayan.springcashiero.features.products.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductCategoryRequest {

    private Long productCategoryId;

    @NotNull(message = "category name can't be null")
    @NotEmpty(message = "category name can't be empty")
    private String name;

    private String description;

    private MultipartFile image;

    private Long parentCategoryId;

}
