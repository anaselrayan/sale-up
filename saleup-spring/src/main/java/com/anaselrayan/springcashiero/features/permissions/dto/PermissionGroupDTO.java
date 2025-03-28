package com.anaselrayan.springcashiero.features.permissions.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PermissionGroupDTO {
    private String group;
    private List<PermissionDTO> permissions;
}
