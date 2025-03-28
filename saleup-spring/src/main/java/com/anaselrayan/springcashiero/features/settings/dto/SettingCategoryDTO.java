package com.anaselrayan.springcashiero.features.settings.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SettingCategoryDTO {
    private Long categoryId;
    private String name;
    private String description;
}
