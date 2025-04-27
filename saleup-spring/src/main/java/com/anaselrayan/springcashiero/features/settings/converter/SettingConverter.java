package com.anaselrayan.springcashiero.features.settings.converter;

import com.anaselrayan.springcashiero.features.settings.dto.SettingDTO;
import com.anaselrayan.springcashiero.features.settings.model.Setting;

public class SettingConverter {

    public static SettingDTO convert(Setting from) {
        return SettingDTO.builder()
                .key(from.getSettingKey())
                .value(from.getSettingValue())
                .type(from.getSettingType())
                .category(SettingCategoryConverter.convert(from.getSettingCategory()))
                .options(SettingOptionConverter.convert(from.getOptions()))
                .build();
    }

}
