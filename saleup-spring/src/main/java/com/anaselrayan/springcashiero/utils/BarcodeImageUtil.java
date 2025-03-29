package com.anaselrayan.springcashiero.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

public class BarcodeImageUtil {

    public static byte[] generateBarcodeImage(String barcode) throws Exception {
        int width = 300;
        int height = 150;
        BitMatrix matrix = new MultiFormatWriter().encode(barcode, BarcodeFormat.CODE_128, width, height);
        BufferedImage bufferedImage = MatrixToImageWriter.toBufferedImage(matrix);

        ByteArrayOutputStream os = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", os);
        return os.toByteArray();
    }

}
