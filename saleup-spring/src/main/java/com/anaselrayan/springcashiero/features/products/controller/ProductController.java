package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.products.request.ProductDiscountRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductStockSimpleRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductService;
import com.anaselrayan.springcashiero.features.products.service.ProductStatisticsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final ProductStatisticsService productStatisticsService;

    @PostMapping
    public ResponseEntity<ApiResponse> createProduct(@ModelAttribute @Valid ProductRequest request) {
        ApiResponse res = productService.createProduct(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateProduct(@ModelAttribute @Valid ProductRequest request) {
        ApiResponse res = productService.updateProduct(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getProductPage(@RequestParam Integer page,
                                                      @RequestParam Integer size) {
        ApiResponse res = productService.getProductsPage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/filter")
    public ResponseEntity<ApiResponse> getProductPage(@RequestParam String keyword,
                                                      @RequestParam Integer page,
                                                      @RequestParam Integer size) {
        ApiResponse res = productService.searchByKeyword(keyword, PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ApiResponse> getProductById(@PathVariable Long productId) {
        ApiResponse res = productService.getProductById(productId);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/barcode/{barcode}")
    public ResponseEntity<ApiResponse> getProductByBarcode(@PathVariable String barcode) {
        ApiResponse res = productService.getProductByBarcode(barcode);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/discount")
    public ResponseEntity<ApiResponse> createProductDiscount(@RequestBody @Valid ProductDiscountRequest req) {
        ApiResponse res = productService.createProductDiscount(req);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/statistics/{productId}")
    public ResponseEntity<ApiResponse> getProductStatistics(@PathVariable Long productId,
                                                            @RequestParam(required = false) String range) {
        ApiResponse res = productStatisticsService.getProductStatisticsSummary(productId, range);
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) {
        ApiResponse res = productService.deleteProduct(productId);
        return ResponseEntity.ok(res);
    }

    @PutMapping("/stock-update")
    public ResponseEntity<ApiResponse> updateProductStock(@RequestBody @Valid ProductStockSimpleRequest req) {
        ApiResponse res = productService.updateProductStock(req);
        return ResponseEntity.ok(res);
    }

}
