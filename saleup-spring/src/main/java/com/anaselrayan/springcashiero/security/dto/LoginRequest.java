package com.anaselrayan.springcashiero.security.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class LoginRequest {

    @NotNull(message = "username can't be null")
    @NotEmpty(message = "username can't be empty")
    private String username;

    @NotNull(message = "password can't be null")
    @NotEmpty(message = "password can't be empty")
    private String password;

}
