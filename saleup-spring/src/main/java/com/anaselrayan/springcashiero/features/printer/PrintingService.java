package com.anaselrayan.springcashiero.features.printer;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.utils.BarcodeUtils;
import com.anaselrayan.springcashiero.utils.PrintUtils;
import org.springframework.stereotype.Service;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import java.util.Arrays;
import java.util.List;

@Service
public class PrintingService {
    public List<PrinterDevice> getAllPrinters() {
        PrintService defaultPrinter = PrintServiceLookup.lookupDefaultPrintService();
        return Arrays.stream(PrintServiceLookup.lookupPrintServices(null, null))
                .map(ps -> new PrinterDevice(ps.getName(), ps.equals(defaultPrinter))).toList();
    }

    public ApiResponse printBarcodes(PrintBarcodesRequest req) {
        try {
            var printer = PrintUtils.getPrinterOrDefault(req.getPrinter());
            if (printer == null)
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "No default printer found!");

            var barcodeFormat = BarcodeUtils.getBarcodeFormat(req.getBarcodeFormat());
            for (String barcode : req.getBarcodes()) {
                var barcodeImg = BarcodeUtils.generateBarcodeImage(barcode, barcodeFormat, req.getSize());
                PrintUtils.printBarcodeImage(barcodeImg, printer, req.getCopies());
            }
            return new ApiResponse(true, StatusCode.OK, "Print Success");
        } catch (Exception ex) {
            return new ApiResponse(false, StatusCode.BAD_REQUEST, ex.getMessage());
        }
    }



}
