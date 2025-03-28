package com.anaselrayan.springcashiero.features.roles.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class RoleRequest {

    private Long roleId;

    @NotNull(message = "role name can't be null")
    @NotEmpty(message = "role name can't be empty")
    private String roleName;

    private String description;

    @NotNull(message = "permissions list can't be null")
    @Size(min = 1, message = "role should have at least one permission")
    private List<Long> permissionsIDs;

}
