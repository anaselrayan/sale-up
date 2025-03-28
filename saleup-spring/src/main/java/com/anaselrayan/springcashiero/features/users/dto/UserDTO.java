package com.anaselrayan.springcashiero.features.users.dto;

import com.anaselrayan.springcashiero.features.roles.dto.RoleDTO;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class UserDTO {

    private String username;

    private String phone;

    private String email;

    private Boolean locked;

    private String imageUrl;

    private LocalDateTime lastLoginTime;

    private RoleDTO role;

}
