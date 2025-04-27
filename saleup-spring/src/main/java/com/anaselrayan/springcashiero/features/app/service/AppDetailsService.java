package com.anaselrayan.springcashiero.features.app.service;

import com.anaselrayan.springcashiero.features.app.model.AppDetails;
import com.anaselrayan.springcashiero.features.settings.converter.SettingOptionConverter;
import com.anaselrayan.springcashiero.features.settings.service.SettingService;
import com.anaselrayan.springcashiero.runner.seeds.SettingSeeds;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AppDetailsService {

    private final SettingService settingService;

    public AppDetails getAppDetails() {
        return AppDetails.builder()
                .appName(settingService.getSetting("company.name").getValue())
                .appDescription(settingService.getSetting("company.description").getValue())
                .appIcon(settingService.getSetting("app.icon").getValue())
                .appLogo(settingService.getSetting("app.logo").getValue())
                .appFooter(settingService.getSetting("app.footer").getValue())
                .languageOptions(SettingOptionConverter.convert(SettingSeeds.languageOptions()))
                .currencyOptions(SettingOptionConverter.convert(SettingSeeds.currencyOptions()))
                .defaultLanguage(settingService.getSetting("app.defaultLanguage").getValue())
                .defaultCurrency(settingService.getSetting("app.defaultCurrency").getValue())
                .build();
    }

}
