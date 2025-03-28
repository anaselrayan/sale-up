package com.anaselrayan.springcashiero.shared;

import org.springframework.web.multipart.MultipartFile;

public class UploadFileRequest {
    public MultipartFile file;
    public String fileName;
    public String uploadPath;

    public UploadFileRequest(MultipartFile file, String fileName, String uploadPath) {
        this.file = file;
        this.fileName = fileName;
        this.uploadPath = uploadPath;
    }

}
