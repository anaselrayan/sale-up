package com.anaselrayan.springcashiero.utils;

import javax.imageio.ImageIO;
import javax.print.*;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.standard.Copies;
import javax.print.attribute.standard.JobName;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

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

    public static void printBarcodeImage(
            BufferedImage barcodeImage,
            PrintService printer,
            int copies
    ) throws Exception {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(barcodeImage, "png", baos);
        baos.flush();
        byte[] imageData = baos.toByteArray();
        baos.close();

        DocFlavor flavor = DocFlavor.INPUT_STREAM.PNG;
        Doc doc = new SimpleDoc(new ByteArrayInputStream(imageData), flavor, null);

        PrintRequestAttributeSet attributes = new HashPrintRequestAttributeSet();
        attributes.add(new Copies(copies));
        attributes.add(new JobName("Printing barcode", null));
        DocPrintJob printJob = printer.createPrintJob();
        printJob.print(doc, attributes);
    }

}
