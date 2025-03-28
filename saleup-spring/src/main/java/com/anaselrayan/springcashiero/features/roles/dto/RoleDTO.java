package com.anaselrayan.springcashiero.features.roles.dto;

import com.anaselrayan.springcashiero.features.permissions.dto.PermissionDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RoleDTO {

    private Long roleId;

    private String roleName;

    private String description;

    private List<PermissionDTO> permissions;

}
