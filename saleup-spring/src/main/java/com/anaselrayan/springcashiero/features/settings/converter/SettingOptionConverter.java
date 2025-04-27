package com.anaselrayan.springcashiero.features.settings.converter;

import com.anaselrayan.springcashiero.features.settings.dto.SettingOptionDTO;
import com.anaselrayan.springcashiero.features.settings.model.SettingOption;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class SettingOptionConverter {

    public static SettingOptionDTO convert(SettingOption from) {
        return SettingOptionDTO.builder()
                .optionId(from.getId())
                .name(from.getName())
                .value(from.getValue())
                .build();
    }

    public static List<SettingOptionDTO> convert(List<SettingOption> from) {
        if (from == null) return Collections.emptyList();
        return from.stream().map(SettingOptionConverter::convert).collect(Collectors.toList());
    }
}
