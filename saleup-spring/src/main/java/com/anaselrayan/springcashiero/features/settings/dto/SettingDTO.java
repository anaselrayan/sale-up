package com.anaselrayan.springcashiero.features.settings.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SettingDTO {

    private String key;

    private String value;

    private String type;

    private SettingCategoryDTO category;

}
