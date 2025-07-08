package com.anaselrayan.springcashiero.security.service;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.security.dto.AuthDTO;
import com.anaselrayan.springcashiero.security.dto.LoginRequest;
import com.anaselrayan.springcashiero.security.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtils;

    public ApiResponse getUserLogin(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        if (authentication.isAuthenticated()) {
            String username = authentication.getName();
            String token = jwtUtils.generateToken(authentication);
            AuthDTO authDTO = AuthDTO.builder()
                    .token(token)
                    .username(username)
                    .build();
            return new ApiResponse(authDTO, StatusCode.OK);
        }
        return new ApiResponse(false, StatusCode.UNAUTHORIZED, "Login failed");
    }

}
