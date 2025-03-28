package com.anaselrayan.springcashiero.features.settings.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.settings.SettingNotFoundException;
import com.anaselrayan.springcashiero.features.settings.converter.SettingConverter;
import com.anaselrayan.springcashiero.features.settings.dto.SettingDTO;
import com.anaselrayan.springcashiero.features.settings.dto.SettingRequest;
import com.anaselrayan.springcashiero.features.settings.model.Setting;
import com.anaselrayan.springcashiero.features.settings.repository.SettingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Slf4j
@RequiredArgsConstructor
public class SettingService {

    private final SettingRepository settingRepository;

    public void updateSetting(String key, String newValue) {
        Setting setting = this.settingRepository.findBySettingKey(key)
                .orElseThrow(()-> new SettingNotFoundException("Setting with key " + key + " not found"));

        setting.setSettingValue(newValue);
        this.settingRepository.save(setting);
    }

    public SettingDTO getSetting(String key) {
        Setting setting = this.settingRepository.findBySettingKey(key)
                .orElseThrow(()-> new SettingNotFoundException("Setting with key " + key + " not found"));
        return SettingConverter.convert(setting);
    }

    public ApiResponse getAllSettingsByCategory(String category) {
        List<SettingDTO> dtoList =  settingRepository.findAllBySettingCategoryName(category)
                .stream().map(SettingConverter::convert).toList();
        return new ApiResponse(dtoList, StatusCode.OK);
    }

    public ApiResponse updateSettings(List<SettingRequest> settingRequests) {
        if (settingRequests != null && !settingRequests.isEmpty()) {
            settingRequests.forEach(req -> this.updateSetting(req.getKey(), req.getValue()));
        }
        return new ApiResponse("", StatusCode.OK);
    }

}
