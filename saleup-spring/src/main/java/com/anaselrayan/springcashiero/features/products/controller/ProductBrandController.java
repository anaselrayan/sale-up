package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.features.products.request.ProductBrandRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductBrandService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product-brand")
@RequiredArgsConstructor
public class ProductBrandController {

    private final ProductBrandService productBrandService;

    @PreAuthorize("hasAuthority('perm.create.brand')")
    @PostMapping
    public ResponseEntity<ApiResponse> createProductBrand(@ModelAttribute ProductBrandRequest request) {
        ApiResponse res = productBrandService.createProductBrand(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.brand')")
    @PutMapping
    public ResponseEntity<ApiResponse> updateProductBrand(@ModelAttribute ProductBrandRequest request) {
        ApiResponse res = productBrandService.updateProductBrand(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.brand')")
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

    @PreAuthorize("hasAuthority('perm.access.brand')")
    @GetMapping("/{brandId}")
    public ResponseEntity<ApiResponse> getById(@PathVariable Long brandId) {
        ApiResponse res = productBrandService.getBrandById(brandId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.brand')")
    @DeleteMapping("/{brandId}")
    public ResponseEntity<ApiResponse> deleteBrand(@PathVariable Long brandId) {
        ApiResponse res = productBrandService.deleteBrand(brandId);
        return ResponseEntity.ok(res);
    }

}
