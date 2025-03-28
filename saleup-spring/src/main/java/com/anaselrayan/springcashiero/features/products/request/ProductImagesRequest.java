package com.anaselrayan.springcashiero.features.products.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@AllArgsConstructor
public class ProductImagesRequest {
    private Long productId;
    private List<MultipartFile> files;
}
