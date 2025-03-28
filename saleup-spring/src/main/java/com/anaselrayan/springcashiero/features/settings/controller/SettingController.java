package com.anaselrayan.springcashiero.features.settings.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.settings.dto.SettingDTO;
import com.anaselrayan.springcashiero.features.settings.dto.SettingRequest;
import com.anaselrayan.springcashiero.features.settings.service.SettingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/setting")
@RequiredArgsConstructor
public class SettingController {

    private final SettingService settingService;

    @GetMapping("/category")
    public ResponseEntity<ApiResponse> getSettingsByCategory(@RequestParam String type) {
        ApiResponse res = settingService.getAllSettingsByCategory(type);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ApiResponse getSetting(@RequestParam String key) {
        SettingDTO setting = settingService.getSetting(key);
        return new ApiResponse(setting, StatusCode.OK);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateSettings(@RequestBody List<SettingRequest> settingRequests) {
        ApiResponse res = settingService.updateSettings(settingRequests);
        return ResponseEntity.ok(res);
    }

}
