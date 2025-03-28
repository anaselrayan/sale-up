package com.anaselrayan.springcashiero.features.products.controller;


import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.products.request.ProductUnitOfMeasureRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductUnitOfMeasureService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product-unit")
@RequiredArgsConstructor
public class ProductUnitOfMeasureController {

    private final ProductUnitOfMeasureService productUnitOfMeasureService;

    @PostMapping
    public ResponseEntity<ApiResponse> createProductUnit(@RequestBody @Valid ProductUnitOfMeasureRequest request) {
        ApiResponse res = productUnitOfMeasureService.createProductUnit(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateProductUnit(@RequestBody @Valid ProductUnitOfMeasureRequest request) {
        ApiResponse res = productUnitOfMeasureService.updateProductUnit(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllUnits() {
        ApiResponse res = productUnitOfMeasureService.getAllProductUnits();
        return ResponseEntity.status(res.getCode()).body(res);
    }

}
