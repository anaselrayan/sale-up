package com.anaselrayan.springcashiero.features.app.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AppDetails {
    private String appName;
    private String appDescription;
    private String appIcon;
    private String appLogo;
    private String appFooter;
}
