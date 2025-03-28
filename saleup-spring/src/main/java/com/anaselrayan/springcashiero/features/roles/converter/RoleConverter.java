package com.anaselrayan.springcashiero.features.roles.converter;

import com.anaselrayan.springcashiero.features.permissions.converter.PermissionConverter;
import com.anaselrayan.springcashiero.features.roles.dto.RoleDTO;
import com.anaselrayan.springcashiero.security.model.UserRole;

public class RoleConverter {

    public static RoleDTO convert(UserRole from) {
        return RoleDTO.builder()
                .roleId(from.getId())
                .roleName(from.getRoleName())
                .description(from.getDescription())
                .permissions(PermissionConverter.convert(from.getPermissions()))
                .build();
    }

}
