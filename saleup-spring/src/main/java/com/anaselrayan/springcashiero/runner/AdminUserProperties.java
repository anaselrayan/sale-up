package com.anaselrayan.springcashiero.runner;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "startup.admin")
@Getter @Setter
public class AdminUserProperties {
    @NotEmpty(message = "admin username can't be empty")
    private String username;
    @NotEmpty(message = "admin password can't be empty")
    private String password;
}
