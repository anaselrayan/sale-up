package com.anaselrayan.springcashiero.infrastructure.Registeration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "registration.plan")
@Getter @Setter
public class RegistrationProperties {
    private RegistrationPlan active = RegistrationPlan.TRIAL;
    private int trialDurationInDays = 14;
    private int basicDurationInDays = 30;
    private int advancedDurationInDays = 365;
    private int premiumDurationInDays = 1095;
}
