package com.anaselrayan.springcashiero.runner.seeders;

import com.anaselrayan.springcashiero.features.settings.constant.SettingCategories;
import com.anaselrayan.springcashiero.features.settings.constant.SettingType;
import com.anaselrayan.springcashiero.features.settings.model.Setting;
import com.anaselrayan.springcashiero.features.settings.model.SettingCategory;
import com.anaselrayan.springcashiero.features.settings.model.SettingOption;
import com.anaselrayan.springcashiero.features.settings.repository.SettingCategoryRepository;
import com.anaselrayan.springcashiero.features.settings.repository.SettingOptionRepository;
import com.anaselrayan.springcashiero.features.settings.repository.SettingRepository;
import com.anaselrayan.springcashiero.runner.seeds.SettingSeeds;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SettingSeeder {

    private final SettingRepository settingRepository;
    private final SettingCategoryRepository settingCategoryRepository;
    private final SettingOptionRepository settingOptionRepository;

    @Bean
    public CommandLineRunner run() {
        return (args) -> {
            addSettingCategories();
            addCompanySettings();
            addAppSettings();
            addPOSSettings();
        };
    }

    private void addSettingCategories() {
        for (SettingCategory category : SettingSeeds.getSettingCategories()) {
            if (!settingCategoryRepository.existsByName(category.getName()))
                settingCategoryRepository.save(category);
        }
    }

    private void addCompanySettings() {
        Optional<SettingCategory> optional = settingCategoryRepository.findByName(SettingCategories.COMPANY_SETTING);
        optional.ifPresent(settingCategory -> addSettings(SettingSeeds.getCompanySettings(settingCategory)));
    }

    private void addAppSettings() {
        Optional<SettingCategory> optional = settingCategoryRepository.findByName(SettingCategories.APP_SETTING);
        optional.ifPresent(settingCategory -> addSettings(SettingSeeds.getAppSettings(settingCategory)));
    }

    private void addPOSSettings() {
        Optional<SettingCategory> optional = settingCategoryRepository.findByName(SettingCategories.POS_SETTING);
        optional.ifPresent(settingCategory -> addSettings(SettingSeeds.getPOSSettings(settingCategory)));
    }

    private void addSettings(List<Setting> settingList) {
        for (Setting setting : settingList) {
            if (!settingRepository.existsBySettingKey(setting.getSettingKey())) {
                Setting saved = settingRepository.save(setting);
                saveSettingOptions(saved, setting.getOptions());
            }

        }
    }

    private void saveSettingOptions(Setting setting, List<SettingOption> options) {
        if (options == null || options.isEmpty() || !setting.getSettingType().equals(SettingType.SELECT))
            return;

        for (SettingOption option : options) {
            option.setSetting(setting);
            settingOptionRepository.save(option);
        }
    }

}
