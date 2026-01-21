package com.anaselrayan.springcashiero.features.sales.controller;

import com.anaselrayan.springcashiero.features.sales.dto.SaleReceiptOptions;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.features.sales.request.SaleRequest;
import com.anaselrayan.springcashiero.features.sales.service.SaleReceiptService;
import com.anaselrayan.springcashiero.features.sales.service.SaleService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/sale")
@RequiredArgsConstructor
public class SaleController {

    private final SaleService saleService;
    private final SaleRepository saleRepository;
    private final SaleReceiptService saleReceiptService;

    @PreAuthorize("hasAuthority('perm.create.sale')")
    @PostMapping
    public ResponseEntity<ApiResponse> createSale(@RequestBody SaleRequest request) {
        ApiResponse res = saleService.createSale(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.sale')")
    @PutMapping
    public ResponseEntity<ApiResponse> editSale(@RequestBody SaleRequest request) {
        ApiResponse res = saleService.editSale(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale')")
    @GetMapping
    public ResponseEntity<ApiResponse> getSalePage(@RequestParam Integer page,
                                                   @RequestParam Integer size) {
        ApiResponse res = saleService.getSalePage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale')")
    @GetMapping("/filter")
    public ResponseEntity<ApiResponse> filterSales(@RequestParam String keyword,
                                                   @RequestParam Integer page,
                                                   @RequestParam Integer size) {
        ApiResponse res = saleService.filterSales(keyword, PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale')")
    @GetMapping("/{saleId}")
    public ResponseEntity<ApiResponse> getSaleById(@PathVariable Long saleId) {
        ApiResponse res = saleService.getSaleById(saleId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale')")
    @GetMapping("/barcode/{barcode}")
    public ResponseEntity<ApiResponse> getSaleIdByBarcode(@PathVariable String barcode) {
        var res = saleService.getSaleIdByBarcode(barcode);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.sale')")
    @GetMapping("/{id}/receipt")
    public ResponseEntity<byte[]> getSaleReceipt(@PathVariable Long id) {
        var sale = saleRepository.findById(id);
        if (sale.isEmpty())
            return ResponseEntity.ofNullable(null);

        byte[] pdfBytes = saleReceiptService.generateSaleReceipt(sale.get());
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=receipt.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }

    @PreAuthorize("hasAuthority('perm.delete.sale')")
    @DeleteMapping("/{saleId}")
    public ResponseEntity<ApiResponse> deleteSale(@PathVariable Long saleId) {
        ApiResponse res = saleService.deleteSale(saleId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.sale')")
    @DeleteMapping("/multi-delete")
    public ResponseEntity<ApiResponse> deleteMultipleSales(@RequestBody List<Long> IDs) {
        ApiResponse res = saleService.deleteMultipleSales(IDs);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/receipt-options")
    public ResponseEntity<SaleReceiptOptions> getReceiptOptions() {
        return ResponseEntity.ok(saleReceiptService.getSaleReceiptOptions());
    }

    @PreAuthorize("hasAuthority('perm.delete.sale')")
    @GetMapping("/export-receipts")
    public ResponseEntity<?> printAllReceipts() {
        this.saleService.exportAllReceipts();
        return ResponseEntity.ok(true);
    }

}
