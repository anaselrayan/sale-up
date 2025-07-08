package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.products.request.ProductCategoryRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductCategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product-category")
@RequiredArgsConstructor
public class ProductCategoryController {

    private final ProductCategoryService productCategoryService;

    @PostMapping
    public ResponseEntity<ApiResponse> createProductCategory(@ModelAttribute @Valid ProductCategoryRequest request) {
        ApiResponse res = productCategoryService.createProductCategory(request);
        return ResponseEntity.ok(res);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> editProductCategory(@ModelAttribute @Valid ProductCategoryRequest request) {
        ApiResponse res = productCategoryService.updateProductCategory(request);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getCategoriesPage(@RequestParam int page, @RequestParam int size) {
        ApiResponse res = productCategoryService.getCategoriesPage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getProductCategories() {
        ApiResponse res = productCategoryService.getAllCategories();
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<ApiResponse> getById(@PathVariable Long categoryId) {
        ApiResponse res = productCategoryService.getCategoryById(categoryId);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Long categoryId) {
        ApiResponse res = productCategoryService.deleteCategory(categoryId);
        return ResponseEntity.ok(res);
    }

}
