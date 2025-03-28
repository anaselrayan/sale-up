package com.anaselrayan.springcashiero.features.products.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductUnitOfMeasureRequest {

    private Long unitOfMeasureId;

    @NotNull(message = "unit code can't be null")
    @NotEmpty(message = "unit code can't be empty")
    private String code;

    private String name;

}
