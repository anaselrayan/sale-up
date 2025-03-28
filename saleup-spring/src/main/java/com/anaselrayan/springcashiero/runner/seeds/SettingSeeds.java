package com.anaselrayan.springcashiero.runner.seeds;

import com.anaselrayan.springcashiero.features.settings.constant.SettingCategories;
import com.anaselrayan.springcashiero.features.settings.constant.Settings;
import com.anaselrayan.springcashiero.features.settings.model.Setting;
import com.anaselrayan.springcashiero.features.settings.model.SettingCategory;

import java.util.List;

public class SettingSeeds {

    public static List<SettingCategory> getSettingCategories() {
        return List.of(
                new SettingCategory(SettingCategories.APP_SETTING, "General app settings"),
                new SettingCategory(SettingCategories.COMPANY_SETTING, "Company settings"),
                new SettingCategory(SettingCategories.POS_SETTING, "POS settings")
        );
    }

    public static List<Setting> getCompanySettings(SettingCategory category) {
        return List.of(
                new Setting("company.name", Settings.COMPANY_NAME, "string", category),
                new Setting("company.description", Settings.COMPANY_DESCRIPTION, "string", category),
                new Setting("company.phone", Settings.COMPANY_PHONE, "string", category),
                new Setting("company.email", Settings.COMPANY_EMAIL, "string", category),
                new Setting("company.address", Settings.COMPANY_ADDRESS, "string", category)
        );
    }

    public static List<Setting> getAppSettings(SettingCategory category) {
        return List.of(
                new Setting("app.logo", Settings.APP_LOGO, "file", category),
                new Setting("app.icon", Settings.APP_ICON, "file", category),
                new Setting("app.footer", Settings.APP_FOOTER, "string", category),
                new Setting("app.defaultCurrency", Settings.APP_DEFAULT_CURRENCY, "string", category),
                new Setting("app.defaultLanguage", Settings.APP_DEFAULT_LANGUAGE, "string", category)
        );
    }

    public static List<Setting> getPOSSettings(SettingCategory category) {
        return List.of(
                new Setting("pos.receipt.footer", Settings.RECEIPT_FOOTER, "string", category),
                new Setting("pos.receipt.showFooter", Settings.RECEIPT_SHOW_FOOTER, "boolean", category),
                new Setting("pos.receipt.showLogo", Settings.RECEIPT_SHOW_LOGO, "boolean", category),
                new Setting("pos.receipt.showSeller", Settings.RECEIPT_SHOW_SELLER, "boolean", category)
        );
    }
    
}
