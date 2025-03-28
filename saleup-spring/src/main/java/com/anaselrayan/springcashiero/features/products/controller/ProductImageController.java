package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.products.request.ProductImagesRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;



@RestController
@RequestMapping(API_URL + "/product-image")
@RequiredArgsConstructor
@Slf4j
public class ProductImageController {

    private final ProductImageService productImageService;

    @GetMapping("/file/{productId}/{fileName}")
    public ResponseEntity<Resource> getImage(@PathVariable Long productId, @PathVariable String fileName) {
        return productImageService.getProductImageResource(productId, fileName);
    }

    @GetMapping("/file/category/{categoryId}/{fileName}")
    public ResponseEntity<Resource> getCategoryImage(@PathVariable Long categoryId, @PathVariable String fileName) {
        return productImageService.getCategoryImageResource(categoryId, fileName);
    }

    @GetMapping("/file/brand/{brandId}/{fileName}")
    public ResponseEntity<Resource> getBrandImage(@PathVariable Long brandId, @PathVariable String fileName) {
        return productImageService.getBrandImageResource(brandId, fileName);
    }

    @PutMapping("/primary/{imageId}")
    public ResponseEntity<ApiResponse> setPrimaryImage(@PathVariable Long imageId) {
        ApiResponse res = productImageService.setPrimaryImage(imageId);
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/{imageId}")
    public ResponseEntity<ApiResponse> deleteProductImage(@PathVariable Long imageId) {
        ApiResponse res = productImageService.deleteProductImage(imageId);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/{productId}")
    public ResponseEntity<ApiResponse> addProductImages(@PathVariable Long productId, @ModelAttribute ProductImagesRequest req) {
        req.setProductId(productId);
        ApiResponse res = productImageService.addProductImages(req);
        return ResponseEntity.ok(res);
    }

}
