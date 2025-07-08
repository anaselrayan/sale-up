package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.products.request.ProductBrandRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductBrandService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product-brand")
@RequiredArgsConstructor
public class ProductBrandController {
    private final ProductBrandService productBrandService;

    @PostMapping
    public ResponseEntity<ApiResponse> createProductBrand(@ModelAttribute @Valid ProductBrandRequest request) {
        ApiResponse res = productBrandService.createProductBrand(request);
        return ResponseEntity.ok(res);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateProductBrand(@ModelAttribute @Valid ProductBrandRequest request) {
        ApiResponse res = productBrandService.updateProductBrand(request);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getBrandsPage(@RequestParam int page, @RequestParam int size) {
        ApiResponse res = productBrandService.getBrandsPage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getProductBrands() {
        ApiResponse res = productBrandService.getAllBrands();
        return ResponseEntity.ok(res);
    }

    @GetMapping("/{brandId}")
    public ResponseEntity<ApiResponse> getById(@PathVariable Long brandId) {
        ApiResponse res = productBrandService.getBrandById(brandId);
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/{brandId}")
    public ResponseEntity<ApiResponse> deleteBrand(@PathVariable Long brandId) {
        ApiResponse res = productBrandService.deleteBrand(brandId);
        return ResponseEntity.ok(res);
    }

}
