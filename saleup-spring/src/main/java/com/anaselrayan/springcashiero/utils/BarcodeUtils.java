package com.anaselrayan.springcashiero.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import java.awt.image.BufferedImage;

public class BarcodeUtils {

    public static final BarcodeFormat DEFAULT_FORMAT = BarcodeFormat.CODE_128;

    public static BufferedImage generateBarcodeImage(String text, BarcodeFormat format, int width, int height) throws Exception {
        BitMatrix bitMatrix = new MultiFormatWriter().encode(text, format, width, height);
        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }

    public static BarcodeFormat getBarcodeFormat(String format) {
        try {
            return BarcodeFormat.valueOf(format);
        } catch (Exception ex) {
            return DEFAULT_FORMAT;
        }
    }

}
