package com.anaselrayan.springcashiero.security.model;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class SecurityAppUser implements UserDetails {

    private final AppUser userEntity;

    public UserRole getRole() {
        return userEntity.getUserRole();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return userEntity.getUserRole().getPermissions()
                .stream()
                .map(perm -> new SimpleGrantedAuthority(perm.getPermCode()))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return userEntity.getUsername();
    }

    @Override
    public String getPassword() {
        return userEntity.getPassword();
    }

    @Override
    public boolean isEnabled() {
        return !userEntity.getLocked();
    }

}
