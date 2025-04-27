package com.anaselrayan.springcashiero.features.settings.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SettingOptionDTO {
    private Long optionId;
    private String name;
    private String value;
}
