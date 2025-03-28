package com.anaselrayan.springcashiero.features.permissions.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PermissionRequest {

    private Long permId;

    @NotNull(message = "permission code name can't be null")
    @NotEmpty(message = "permission code can't be empty")
    private String permCode;

    @NotNull(message = "permission name can't be null")
    @NotEmpty(message = "permission name can't be empty")
    private String permName;

    private String permDescription;

}
