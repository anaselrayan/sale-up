package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductStatusDTO {

    private Long productStatusId;

    private String name;

    private String description;

}
