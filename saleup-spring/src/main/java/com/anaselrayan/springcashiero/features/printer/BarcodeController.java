package com.anaselrayan.springcashiero.features.printer;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.google.zxing.BarcodeFormat;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/barcode")
@RequiredArgsConstructor
public class BarcodeController {

    private final PrintingService printingService;

    @GetMapping("/format")
    public List<String> getBarcodeFormats() {
        return Arrays.stream(BarcodeFormat.values()).map(String::valueOf).toList();
    }

    @PostMapping("/print")
    public ResponseEntity<ApiResponse> printBarcodes(@RequestBody @Valid PrintBarcodesRequest req) {
        var res = printingService.printBarcodes(req);
        return ResponseEntity.ok(res);
    }

}
