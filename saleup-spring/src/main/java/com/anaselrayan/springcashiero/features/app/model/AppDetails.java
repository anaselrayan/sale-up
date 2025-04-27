package com.anaselrayan.springcashiero.features.app.model;

import com.anaselrayan.springcashiero.features.settings.dto.SettingOptionDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class AppDetails {
    private String appName;
    private String appDescription;
    private String appIcon;
    private String appLogo;
    private String appFooter;
    private List<SettingOptionDTO> languageOptions;
    private List<SettingOptionDTO> currencyOptions;
    private String defaultLanguage;
    private String defaultCurrency;
}
