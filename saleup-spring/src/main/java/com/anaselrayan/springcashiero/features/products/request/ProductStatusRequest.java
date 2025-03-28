package com.anaselrayan.springcashiero.features.products.request;

import lombok.Data;

@Data
public class ProductStatusRequest {
    private Long productStatusId;
    private String name;
    private String description;
}
