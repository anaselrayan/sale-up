package com.anaselrayan.springcashiero.security.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AuthDTO {
    private String username;
    private String token;
    private String refreshToken;
}
