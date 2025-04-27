package com.anaselrayan.springcashiero.features.settings.dto;

import com.anaselrayan.springcashiero.features.settings.constant.SettingType;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SettingDTO {

    private String key;

    private String value;

    private SettingType type;

    private SettingCategoryDTO category;

    private List<SettingOptionDTO> options;

}
