package com.anaselrayan.springcashiero.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import java.awt.*;
import java.awt.image.BufferedImage;

public class BarcodeUtils {

    public static final BarcodeFormat DEFAULT_FORMAT = BarcodeFormat.EAN_13;

    public static BufferedImage generateBarcodeImage(String barcode,
                                                     BarcodeFormat barcodeFormat,
                                                     Integer width) throws Exception {
        int height = width / 4;
        int fontSize = height / 4;
        int padding = 10;

        BitMatrix bitMatrix = new MultiFormatWriter().encode(barcode, barcodeFormat, width, height);
        BufferedImage barcodeImage = MatrixToImageWriter.toBufferedImage(bitMatrix);

        int fullHeight = height + fontSize + padding;
        BufferedImage combinedImage = new BufferedImage(width, fullHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = combinedImage.createGraphics();

        g.setColor(Color.WHITE);
        g.fillRect(0, 0, width, fullHeight);

        g.drawImage(barcodeImage, 0, 0, null);

        g.setColor(Color.BLACK);
        g.setFont(new Font("Arial", Font.PLAIN, fontSize));
        FontMetrics metrics = g.getFontMetrics();
        int textWidth = metrics.stringWidth(barcode);
        int x = (width - textWidth) / 2;
        int y = height + fontSize;
        g.drawString(barcode, x, y);

        g.dispose();
        return combinedImage;
    }

    public static BarcodeFormat getBarcodeFormat(String format) {
        try {
            return BarcodeFormat.valueOf(format);
        } catch (Exception ex) {
            return DEFAULT_FORMAT;
        }
    }

}
