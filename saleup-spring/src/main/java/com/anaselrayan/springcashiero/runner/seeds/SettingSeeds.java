package com.anaselrayan.springcashiero.runner.seeds;

import com.anaselrayan.springcashiero.features.settings.constant.SettingCategories;
import com.anaselrayan.springcashiero.features.settings.constant.SettingType;
import com.anaselrayan.springcashiero.features.settings.constant.Settings;
import com.anaselrayan.springcashiero.features.settings.model.Setting;
import com.anaselrayan.springcashiero.features.settings.model.SettingCategory;
import com.anaselrayan.springcashiero.features.settings.model.SettingOption;

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
                new Setting("company.name", Settings.COMPANY_NAME, SettingType.STRING, category),
                new Setting("company.description", Settings.COMPANY_DESCRIPTION, SettingType.STRING, category),
                new Setting("company.phone", Settings.COMPANY_PHONE, SettingType.STRING, category),
                new Setting("company.email", Settings.COMPANY_EMAIL, SettingType.STRING, category),
                new Setting("company.address", Settings.COMPANY_ADDRESS, SettingType.STRING, category)
        );
    }

    public static List<Setting> getAppSettings(SettingCategory category) {
        return List.of(
                new Setting("app.logo", Settings.APP_LOGO, SettingType.IMAGE, category),
                new Setting("app.icon", Settings.APP_ICON, SettingType.IMAGE, category),
                new Setting("app.footer", Settings.APP_FOOTER, SettingType.STRING, category),
                new Setting("app.defaultCurrency", Settings.APP_DEFAULT_CURRENCY, SettingType.SELECT, category, currencyOptions()),
                new Setting("app.defaultLanguage", Settings.APP_DEFAULT_LANGUAGE, SettingType.SELECT, category, languageOptions())
        );
    }

    public static List<Setting> getPOSSettings(SettingCategory category) {
        return List.of(
                new Setting("pos.receipt.footer", Settings.RECEIPT_FOOTER, SettingType.STRING, category),
                new Setting("pos.receipt.maxDiscount", Settings.RECEIPT_MAX_DISCOUNT, SettingType.NUMBER, category),
                new Setting("pos.receipt.showFooter", Settings.RECEIPT_SHOW_FOOTER, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showLogo", Settings.RECEIPT_SHOW_LOGO, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showSeller", Settings.RECEIPT_SHOW_SELLER, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showCompanyPhone", Settings.RECEIPT_SHOW_COMPANY_PHONE, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showCompanyAddress", Settings.RECEIPT_SHOW_COMPANY_ADDRESS, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showCustomer", Settings.RECEIPT_SHOW_CUSTOMER, SettingType.BOOLEAN, category),
                new Setting("pos.receipt.showBarcode", Settings.RECEIPT_SHOW_BARCODE, SettingType.BOOLEAN, category)
        );
    }

    public static List<SettingOption> currencyOptions() {
        return List.of(
                new SettingOption("Dollar", "USD"),
                new SettingOption("Euro", "EUR"),
                new SettingOption("Egyptian Pound", "EGP"),
                new SettingOption("Saudi Riyal", "SAR")
        );
    }

    public static List<SettingOption> languageOptions() {
        return List.of(
                new SettingOption("English", "en"),
                new SettingOption("العربية", "ar"),
                new SettingOption("Spanish", "es"),
                new SettingOption("French", "fr"),
                new SettingOption("German", "de"),
                new SettingOption("Hindi", "hi")
        );
    }

}
