package com.anaselrayan.springcashiero.security.utils;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class AuthorityUtils {

    public static String commaSeperatedAuthorities(Collection< ? extends GrantedAuthority> authorities) {
        return String.join(",", authorities.stream().map(GrantedAuthority::getAuthority).toList());
    }

}
