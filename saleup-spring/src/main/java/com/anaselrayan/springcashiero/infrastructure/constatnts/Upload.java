package com.anaselrayan.springcashiero.infrastructure.constatnts;

public class Upload {
    public static final String WORK_DIR = System.getProperty("user.dir");
    public static final String UPLOAD_PRODUCT_IMAGE_DIR = WORK_DIR + "/uploads/products";
    public static final String UPLOAD_CATEGORY_IMAGE_DIR = WORK_DIR + "/uploads/categories";
    public static final String UPLOAD_BRANDS_IMAGE_DIR = WORK_DIR + "/uploads/brands";
    public static final String UPLOAD_USER_IMAGE_DIR = WORK_DIR + "/uploads/users";
    public static final String UPLOAD_STATIC_RESOURCES = WORK_DIR + "/uploads/static";
    public static final String UPLOAD_RECEIPT_PATH = WORK_DIR + "/uploads/receipt";

    public static final int MAX_PRODUCT_IMAGES = 5;
    public static int MAX_IMAGE_SIZE = 1024 * 1024;
}
