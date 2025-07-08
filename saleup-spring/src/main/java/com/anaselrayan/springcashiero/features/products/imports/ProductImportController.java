package com.anaselrayan.springcashiero.features.products.imports;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.shared.ImportColumnSpec;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/product/import")
@RequiredArgsConstructor
public class ProductImportController {

    private final ProductImportConfig productImportConfig;
    private final ProductImportService productImportService;

    @GetMapping("/spec")
    public List<ImportColumnSpec> getImportSpec() {
        return productImportConfig.getImportSpec();
    }

    @PostMapping
    public ResponseEntity<ApiResponse> importProducts(@ModelAttribute ProductImportRequest req) {
        ApiResponse res = productImportService.importProducts(req);
        return ResponseEntity.ok(res);
    }

}
