package com.anaselrayan.springcashiero.features.printer;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.utils.BarcodeUtils;
import com.anaselrayan.springcashiero.utils.PrintUtils;
import com.google.zxing.BarcodeFormat;
import org.springframework.stereotype.Service;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.standard.Copies;
import javax.print.attribute.standard.JobName;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.awt.print.PageFormat;
import java.awt.print.Paper;
import java.awt.print.Printable;
import java.awt.print.PrinterJob;
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
                this.printBarcode(barcode, printer, req.getCopies(), barcodeFormat,
                        req.getWidth(), req.getHeight(), req.getMarginLeft(), req.getMarginTop());
            }
            return new ApiResponse(true, StatusCode.OK, "Print Success");
        } catch (Exception ex) {
            return new ApiResponse(false, StatusCode.BAD_REQUEST, ex.getMessage());
        }
    }

    private void printBarcode(String barcodeText, PrintService printer, int copies, BarcodeFormat barcodeFormat,
                              int width, int height, int marginLeft, int marginTop) throws Exception {

        BufferedImage barcodeImage = BarcodeUtils.generateBarcodeImage(barcodeText, barcodeFormat, width, height);

        PrinterJob job = PrinterJob.getPrinterJob();
        job.setPrintService(printer);

        int textSpace = 20;
        int totalHeight = height + textSpace;

        Paper paper = new Paper();
        int printableWidth = width - 2 * marginLeft;

        paper.setSize(width, totalHeight);
        paper.setImageableArea(marginLeft, marginTop, printableWidth, height + textSpace);

        PageFormat format = new PageFormat();
        format.setPaper(paper);
        format.setOrientation(PageFormat.PORTRAIT);

        job.setPrintable((graphics, pf, pageIndex) -> {
            if (pageIndex > 0) return Printable.NO_SUCH_PAGE;

            Graphics2D g2d = (Graphics2D) graphics;
            g2d.translate(pf.getImageableX(), pf.getImageableY());

            g2d.drawImage(barcodeImage, 0, 0, printableWidth, height, null);

            g2d.setColor(Color.BLACK);
            g2d.setFont(new Font("Arial", Font.PLAIN, 14));
            FontMetrics metrics = g2d.getFontMetrics();
            int textWidth = metrics.stringWidth(barcodeText);
            int x = (printableWidth - textWidth) / 2;
            int y = height + metrics.getAscent();

            g2d.drawString(barcodeText, x, y);

            return Printable.PAGE_EXISTS;
        }, format);

        PrintRequestAttributeSet attributes = new HashPrintRequestAttributeSet();
        attributes.add(new Copies(copies));
        attributes.add(new JobName("Barcode_" + barcodeText, null));

        job.print(attributes);
    }

}
