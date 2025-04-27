package com.anaselrayan.springcashiero.security.config;

import com.anaselrayan.springcashiero.security.service.AuthEntryPointJwt;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@Configuration
@RequiredArgsConstructor
@EnableMethodSecurity
public class AppSecurityConfig {

    private final AuthEntryPointJwt unauthorizedHandler;
    private final AccessDeniedHandler accessDeniedHandler;

    private static final String[] UI_WHITELIST = {
            "/",
            "/**.css", "/**.js",
            "/**.png", "/**.jpg", "/**.jpeg", "/**.svg", "**.svg", "**.jpg",
            "/**.woff", "/**.woff2", "/**.ttf",
            "/index.html", "/static/**", "/assets/**", "/media/**",
            "/swagger-ui/**", "/api-docs/**",
    };

    private static final String[] AUTH_WHITELIST = {
            API_URL + "/auth/**",
    };

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        authorizeHttpRequests(http);
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .exceptionHandling(exceptionHandling ->
                    exceptionHandling.authenticationEntryPoint(unauthorizedHandler)
                            .accessDeniedHandler(accessDeniedHandler)
            )
            .sessionManagement(sessionManagement ->
                    sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        http.addFilterBefore(
                authenticationJwtTokenFilter(),
                UsernamePasswordAuthenticationFilter.class
        );
        return http.build();
    }

    @Bean
    public JwtAuthFilter authenticationJwtTokenFilter() {
        return new JwtAuthFilter();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration
    ) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private void authorizeHttpRequests(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> {
            auth.requestMatchers(UI_WHITELIST).permitAll();
            auth.requestMatchers(AUTH_WHITELIST).permitAll();
            auth.requestMatchers(HttpMethod.GET, API_URL + "/app/public").permitAll();
            auth.requestMatchers(HttpMethod.GET, API_URL + "/resource/**").permitAll();
            auth.requestMatchers(HttpMethod.GET, API_URL + "/product-image/file/**").permitAll();
            auth.anyRequest().authenticated();
        });
    }

}