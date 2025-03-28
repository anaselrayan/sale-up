package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductImageDTO {

    private Long productImageId;

    private String fileName;

    private String filePath;

    private Integer imageOrder;

    private Boolean isPrimary;

}
