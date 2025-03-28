package com.anaselrayan.springcashiero.features.products.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductUnitOfMeasureDTO {

    private Long unitOfMeasureId;

    private String code;

    private String name;

}
