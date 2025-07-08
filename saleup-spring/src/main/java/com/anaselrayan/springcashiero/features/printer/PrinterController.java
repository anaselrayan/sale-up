package com.anaselrayan.springcashiero.features.printer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/printer")
@RequiredArgsConstructor
public class PrinterController {

    private final PrintingService printingService;

    @GetMapping
    public List<PrinterDevice> getAllPrinters() {
        return printingService.getAllPrinters();
    }

}
