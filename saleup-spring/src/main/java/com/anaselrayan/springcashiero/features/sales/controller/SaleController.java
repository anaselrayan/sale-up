package com.anaselrayan.springcashiero.features.sales.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.sales.request.SaleRequest;
import com.anaselrayan.springcashiero.features.sales.service.SaleReceiptService;
import com.anaselrayan.springcashiero.features.sales.service.SaleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/sale")
@RequiredArgsConstructor
public class SaleController {

    private final SaleService saleService;
    private final SaleReceiptService saleReceiptService;

    @PostMapping
    public ResponseEntity<ApiResponse> createSale(@RequestBody @Valid SaleRequest request) {
        ApiResponse res = saleService.createSale(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getSalePage(@RequestParam Integer page,
                                                   @RequestParam Integer size) {
        ApiResponse res = saleService.getSalePage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/{saleId}")
    public ResponseEntity<ApiResponse> getSaleById(@PathVariable Long saleId) {
        ApiResponse res = saleService.getSaleById(saleId);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/receipt/{saleId}")
    public ResponseEntity<Resource> getSaleReceipt(@PathVariable Long saleId) {
        return saleReceiptService.getSaleReceipt(saleId);
    }

    @DeleteMapping("/{saleId}")
    public ResponseEntity<ApiResponse> deleteSale(@PathVariable Long saleId) {
        ApiResponse res = saleService.deleteSale(saleId);
        return ResponseEntity.ok(res);
    }

}
