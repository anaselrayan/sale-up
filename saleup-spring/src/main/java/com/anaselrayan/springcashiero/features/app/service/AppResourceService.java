package com.anaselrayan.springcashiero.features.app.service;

import com.anaselrayan.springcashiero.core.constatnts.Upload;
import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.shared.UploadFileRequest;
import com.anaselrayan.springcashiero.shared.UploadFileResponse;
import com.anaselrayan.springcashiero.shared.UploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class AppResourceService {

    private final UploadService uploadService;

    public ApiResponse uploadResource(MultipartFile file) {
        UploadFileResponse res = uploadService.uploadFile(new UploadFileRequest(file, file.getOriginalFilename(), Upload.UPLOAD_STATIC_RESOURCES));
        if (res.success)
            return new ApiResponse(res, StatusCode.OK);
        else
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Failed to upload file");
    }

    public ResponseEntity<Resource> downloadResource(String fileName) {
        return uploadService.downloadResource(Upload.UPLOAD_STATIC_RESOURCES, fileName);
    }

}
