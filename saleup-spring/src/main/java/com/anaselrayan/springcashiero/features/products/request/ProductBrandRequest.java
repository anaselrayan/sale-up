package com.anaselrayan.springcashiero.features.products.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductBrandRequest {
    private Long productBrandId;
    private String name;
    private String description;
    private MultipartFile image;
}
