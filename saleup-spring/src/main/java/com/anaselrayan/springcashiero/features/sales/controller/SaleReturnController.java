package com.anaselrayan.springcashiero.features.sales.controller;

import com.anaselrayan.springcashiero.features.sales.request.SaleReturnRequest;
import com.anaselrayan.springcashiero.features.sales.service.SaleReturnService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/sale-return")
@RequiredArgsConstructor
public class SaleReturnController {

    private final SaleReturnService saleReturnService;

    @PreAuthorize("hasAuthority('perm.create.sale-return')")
    @PostMapping
    public ResponseEntity<ApiResponse> createSaleReturn(@RequestBody SaleReturnRequest request) {
        ApiResponse res = saleReturnService.createSaleReturn(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale-return')")
    @GetMapping
    public ResponseEntity<ApiResponse> getReturnsPage(@RequestParam int page, @RequestParam int size) {
        ApiResponse res = saleReturnService.getSaleReturnPage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale-return')")
    @GetMapping("{saleReturnId}")
    public ResponseEntity<ApiResponse> getSaleReturnById(@PathVariable Long saleReturnId) {
        ApiResponse res = saleReturnService.getSaleReturnById(saleReturnId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale-return')")
    @GetMapping("/sale/{saleId}")
    public ResponseEntity<ApiResponse> getReturnsPage(@PathVariable Long saleId, @RequestParam int page, @RequestParam int size) {
        ApiResponse res = saleReturnService.getSaleReturnsBySaleId(saleId, PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.sale-return')")
    @DeleteMapping("{saleReturnId}")
    public ResponseEntity<ApiResponse> deleteSaleReturn(@PathVariable Long saleReturnId) {
        ApiResponse res = saleReturnService.deleteSaleReturn(saleReturnId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.sale-return')")
    @DeleteMapping("/multi-delete")
    public ResponseEntity<ApiResponse> deleteMultipleSaleReturns(@RequestBody List<Long> IDs) {
        ApiResponse res = saleReturnService.deleteMultipleSaleReturns(IDs);
        return ResponseEntity.ok(res);
    }

}
