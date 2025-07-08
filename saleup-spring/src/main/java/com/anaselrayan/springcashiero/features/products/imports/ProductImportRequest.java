package com.anaselrayan.springcashiero.features.products.imports;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductImportRequest {
    private MultipartFile file;
}
