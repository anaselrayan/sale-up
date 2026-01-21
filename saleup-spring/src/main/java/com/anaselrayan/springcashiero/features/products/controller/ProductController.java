package com.anaselrayan.springcashiero.features.products.controller;

import com.anaselrayan.springcashiero.features.products.filter.ProductFilterService;
import com.anaselrayan.springcashiero.features.products.request.ProductDiscountRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductStockSimpleRequest;
import com.anaselrayan.springcashiero.features.products.service.ProductService;
import com.anaselrayan.springcashiero.features.products.service.ProductStatisticsService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.shared.filter.FilterCriteria;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final ProductFilterService productFilterService;
    private final ProductStatisticsService productStatisticsService;

    @PreAuthorize("hasAuthority('perm.create.product')")
    @PostMapping
    public ResponseEntity<ApiResponse> createProduct(@ModelAttribute ProductRequest request) {
        ApiResponse res = productService.createProduct(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.update.product')")
    @PutMapping
    public ResponseEntity<ApiResponse> updateProduct(@ModelAttribute ProductRequest request) {
        ApiResponse res = productService.updateProduct(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping
    public ResponseEntity<ApiResponse> getProductPage(@RequestParam Integer page,
                                                      @RequestParam Integer size) {
        ApiResponse res = productService.getProductsPage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllProduct() {
        ApiResponse res = productService.getAllProducts();
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping("/filter")
    public ResponseEntity<ApiResponse> filterProducts(@RequestParam String keyword,
                                                      @RequestParam Integer page,
                                                      @RequestParam Integer size) {
        ApiResponse res = productService.searchByKeyword(keyword, PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @PostMapping("/filter/criteria")
    public ResponseEntity<ApiResponse> findByCriteria(@RequestBody FilterCriteria criteria,
                                                      @RequestParam Integer page,
                                                      @RequestParam Integer size) {
        ApiResponse res = productFilterService.findByCriteria(criteria, PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping("/{productId}")
    public ResponseEntity<ApiResponse> getProductById(@PathVariable Long productId) {
        ApiResponse res = productService.getProductById(productId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping("/barcode/{barcode}")
    public ResponseEntity<ApiResponse> getProductByBarcode(@PathVariable String barcode) {
        ApiResponse res = productService.getProductByBarcode(barcode);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.product')")
    @PostMapping("/discount")
    public ResponseEntity<ApiResponse> createProductDiscount(@RequestBody ProductDiscountRequest req) {
        ApiResponse res = productService.createProductDiscount(req);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.product')")
    @GetMapping("/statistics/{productId}")
    public ResponseEntity<ApiResponse> getProductStatistics(@PathVariable Long productId,
                                                            @RequestParam(required = false) String range) {
        ApiResponse res = productStatisticsService.getProductStatisticsSummary(productId, range);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.product')")
    @DeleteMapping("/{productId}")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) {
        ApiResponse res = productService.deleteProduct(productId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.product')")
    @DeleteMapping("/multi-delete")
    public ResponseEntity<ApiResponse> deleteMultipleProducts(@RequestBody List<Long> productIds) {
        ApiResponse res = productService.deleteAll(productIds);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.product')")
    @PutMapping("/stock-update")
    public ResponseEntity<ApiResponse> updateProductStock(@RequestBody ProductStockSimpleRequest req) {
        ApiResponse res = productService.updateProductStock(req);
        return ResponseEntity.ok(res);
    }

}
