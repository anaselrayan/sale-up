package com.anaselrayan.springcashiero.features.permissions.converter;

import com.anaselrayan.springcashiero.features.permissions.dto.PermissionDTO;
import com.anaselrayan.springcashiero.security.model.Permission;

import java.util.Collections;
import java.util.List;

public class PermissionConverter {

    public static PermissionDTO convert(Permission from) {
        return PermissionDTO.builder()
                .permId(from.getId())
                .permCode(from.getPermCode())
                .permName(from.getPermName())
                .permDescription(from.getPermCategory())
                .build();
    }

    public static List<PermissionDTO> convert(List<Permission> from) {
        if (from == null) return Collections.emptyList();

        return from.stream().map(PermissionConverter::convert).toList();
    }

}
