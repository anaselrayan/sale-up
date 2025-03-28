package com.anaselrayan.springcashiero.features.permissions.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PermissionDTO {

    private Long permId;

    private String permCode;

    private String permName;

    private String permDescription;

}
