package com.anaselrayan.springcashiero.features.app.controller;

import com.anaselrayan.springcashiero.features.app.model.AppDetails;
import com.anaselrayan.springcashiero.features.app.service.AppDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequiredArgsConstructor
@RequestMapping(API_URL + "/app")
public class AppController {

    private final AppDetailsService appDetailsService;

    @GetMapping("/public")
    public ResponseEntity<AppDetails> getPublicDetails() {
        return ResponseEntity.ok(appDetailsService.getAppDetails());
    }

}
