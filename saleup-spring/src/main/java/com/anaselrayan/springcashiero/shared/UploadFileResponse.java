package com.anaselrayan.springcashiero.shared;

public class UploadFileResponse {
    public boolean success;
    public String fileName;
    public String filePath;

    public UploadFileResponse(boolean success, String fileName, String filePath) {
        this.success = success;
        this.fileName = fileName;
        this.filePath = filePath;
    }
}
