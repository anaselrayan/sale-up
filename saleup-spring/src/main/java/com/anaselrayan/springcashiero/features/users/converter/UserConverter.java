package com.anaselrayan.springcashiero.features.users.converter;

import com.anaselrayan.springcashiero.features.roles.converter.RoleConverter;
import com.anaselrayan.springcashiero.features.users.dto.UserDTO;
import com.anaselrayan.springcashiero.security.model.AppUser;

public class UserConverter {

    public static UserDTO convert(AppUser from) {
        return UserDTO.builder()
                .username(from.getUsername())
                .phone(from.getPhone())
                .email(from.getEmail())
                .imageUrl(from.getImageUrl())
                .locked(from.getLocked())
                .role(RoleConverter.convert(from.getUserRole()))
                .build();
    }

}
