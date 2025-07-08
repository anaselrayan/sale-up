package com.anaselrayan.springcashiero.features.sales.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.sales.request.SaleReturnRequest;
import com.anaselrayan.springcashiero.features.sales.service.SaleReturnService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/sale-return")
@RequiredArgsConstructor
public class SaleReturnController {

    private final SaleReturnService saleReturnService;

    @PostMapping
    public ResponseEntity<ApiResponse> createSaleReturn(@RequestBody @Valid SaleReturnRequest request) {
        ApiResponse res = saleReturnService.createSaleReturn(request);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getReturnsPage(@RequestParam int page, @RequestParam int size) {
        ApiResponse res = saleReturnService.getSaleReturnPage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @GetMapping("{saleReturnId}")
    public ResponseEntity<ApiResponse> getSaleReturnById(@PathVariable Long saleReturnId) {
        ApiResponse res = saleReturnService.getSaleReturnById(saleReturnId);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/sale/{saleId}")
    public ResponseEntity<ApiResponse> getReturnsPage(@PathVariable Long saleId, @RequestParam int page, @RequestParam int size) {
        ApiResponse res = saleReturnService.getSaleReturnsBySaleId(saleId, PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("{saleReturnId}")
    public ResponseEntity<ApiResponse> deleteSaleReturn(@PathVariable Long saleReturnId) {
        ApiResponse res = saleReturnService.deleteSaleReturn(saleReturnId);
        return ResponseEntity.ok(res);
    }


}
