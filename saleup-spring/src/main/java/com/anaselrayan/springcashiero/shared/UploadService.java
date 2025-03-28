package com.anaselrayan.springcashiero.shared;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@Slf4j
public class UploadService {

    public UploadFileResponse uploadFile(UploadFileRequest req) {
        if (req.file.isEmpty()) {
            log.error("No file provided for upload.");
            return new UploadFileResponse(false, null, null);
        }
        try {
            Files.createDirectories(Paths.get(req.uploadPath));
            Path filePath = Files.write(Paths.get(req.uploadPath + "/" + req.fileName), req.file.getBytes());
            log.info("File uploaded successfully to {}", filePath);
            return new UploadFileResponse(true, req.fileName, filePath.toString());
        } catch (IOException e) {
            log.error("Error uploading file: {}", e.getMessage());
            return new UploadFileResponse(false, null, null);
        }
    }

    public ResponseEntity<Resource> downloadResource(String path, String fileName) {
        try {
            Path filePath = Paths.get(path + "/" + fileName).toAbsolutePath();
            File file = filePath.toFile();

            if (!file.exists()) {
                log.error("{} does not exist", filePath);
                return ResponseEntity.notFound().build();
            }

            Resource resource = new UrlResource(filePath.toUri());
            if (!resource.exists() || !resource.isReadable()) {
                log.error("{} is not readable", resource.getFilename());
                return ResponseEntity.status(500).build();
            }

            String contentType = MediaType.APPLICATION_OCTET_STREAM_VALUE;
            if (fileName.endsWith(".png")) contentType = MediaType.IMAGE_PNG_VALUE;
            else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) contentType = MediaType.IMAGE_JPEG_VALUE;
            else if (fileName.endsWith(".pdf")) contentType = MediaType.APPLICATION_PDF_VALUE;

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .body(resource);

        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }

}
