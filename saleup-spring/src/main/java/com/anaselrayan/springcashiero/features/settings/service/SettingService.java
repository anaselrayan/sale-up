package com.anaselrayan.springcashiero.features.settings.service;

import com.anaselrayan.springcashiero.features.settings.constant.SettingType;
import com.anaselrayan.springcashiero.features.settings.model.SettingOption;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
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

        validateSettingValue(setting.getSettingType(), newValue, setting.getOptions());

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
        try {
            if (settingRequests != null && !settingRequests.isEmpty()) {
                settingRequests.forEach(req -> this.updateSetting(req.getKey(), req.getValue()));
            }
            return new ApiResponse("", StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.BAD_REQUEST, ex.getMessage());
        }
    }

    private void validateSettingValue(SettingType type, String value, List<SettingOption> options) {
        switch (type) {
            case STRING:
                break;
            case NUMBER:
                try {
                    Double.parseDouble(value);
                } catch (NumberFormatException e) {
                    throw new IllegalArgumentException("Invalid number format for value: " + value);
                }
                break;
            case BOOLEAN:
                if (!value.equalsIgnoreCase("true") && !value.equalsIgnoreCase("false")) {
                    throw new IllegalArgumentException("Invalid boolean value: " + value);
                }
                break;
            case SELECT:
                boolean match = options.stream()
                        .anyMatch(option -> option.getValue().equals(value));
                if (!match) {
                    throw new IllegalArgumentException("Invalid selection: " + value + " is not in options.");
                }
                break;
            case IMAGE:
                if (!value.matches(".*\\.(png|jpg|jpeg|gif|bmp)$")) {
                    throw new IllegalArgumentException("Invalid image file format for value: " + value);
                }
                break;
            default:
                throw new UnsupportedOperationException("Unknown setting type: " + type);
        }
    }

}
