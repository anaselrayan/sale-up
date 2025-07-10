package com.anaselrayan.springcashiero.features.printer;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.List;

@Data
public class PrintBarcodesRequest {

    @NotNull(message = "barcodes can't be null")
    @Size(min = 1, max = 999, message = "you can print 1-999 barcodes at a time")
    private List<String> barcodes;

    @NotNull(message = "barcode format can't be null")
    private String barcodeFormat;

    @NotNull(message = "number of copies can't be null")
    @Min(value = 1, message = "number of copies should be at least 1")
    @Max(value = 100, message = "number of copies should be at most 100")
    private Integer copies;

    @NotEmpty(message = "printer can't be null")
    private String printer;

    @NotNull(message = "barcode size can't be null")
    @Min(value = 50, message = "barcode width should be at least 50")
    @Max(value = 500, message = "barcode width should be at most 500")
    private Integer width;

    @NotNull(message = "barcode size can't be null")
    @Min(value = 20, message = "barcode height should be at least 20")
    @Max(value = 500, message = "barcode height should be at most 500")
    private Integer height;

    @NotNull(message = "margin can't be null")
    @Min(value = 0, message = "margin should be at least 0")
    @Max(value = 100, message = "margin should be at most 100")
    private Integer marginLeft;

    @NotNull(message = "margin can't be null")
    @Min(value = 0, message = "margin should be at least 0")
    @Max(value = 100, message = "margin should be at most 100")
    private Integer marginTop;

}
