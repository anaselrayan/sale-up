package com.anaselrayan.springcashiero.utils;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;

public class PrintUtils {

    public static PrintService getPrinterOrDefault(String printerName) {
        PrintService[] allPrinters = PrintServiceLookup.lookupPrintServices(null, null);
        for (PrintService printer : allPrinters) {
            if (printer.getName().equalsIgnoreCase(printerName)) {
                return printer;
            }
        }
        return PrintServiceLookup.lookupDefaultPrintService();
    }

}
