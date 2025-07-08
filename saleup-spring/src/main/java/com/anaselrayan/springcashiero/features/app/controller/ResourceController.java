package com.anaselrayan.springcashiero.features.app.controller;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.features.app.service.AppResourceService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/resource")
@RequiredArgsConstructor
public class ResourceController {

    private final AppResourceService appResourceService;

    @PostMapping
    public ResponseEntity<ApiResponse> uploadResource(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(appResourceService.uploadResource(file));
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> downloadResource(@PathVariable String fileName) {
        return appResourceService.downloadResource(fileName);
    }

}
