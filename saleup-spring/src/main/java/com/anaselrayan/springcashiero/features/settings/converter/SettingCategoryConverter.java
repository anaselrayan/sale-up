package com.anaselrayan.springcashiero.features.settings.converter;

import com.anaselrayan.springcashiero.features.settings.dto.SettingCategoryDTO;
import com.anaselrayan.springcashiero.features.settings.model.SettingCategory;

public class SettingCategoryConverter {

    public static SettingCategoryDTO convert(SettingCategory from) {
        return SettingCategoryDTO.builder()
                .categoryId(from.getId())
                .name(from.getName())
                .description(from.getDescription())
                .build();
    }

}
