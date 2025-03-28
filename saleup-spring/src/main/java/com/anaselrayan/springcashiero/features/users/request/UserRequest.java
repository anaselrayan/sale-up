package com.anaselrayan.springcashiero.features.users.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
public class UserRequest {

    private Long userId;

    @NotNull(message = "username can't be null")
    @NotEmpty(message = "username can't be empty")
    private String username;

    @NotNull(message = "password can't be null")
    @NotEmpty(message = "password can't be empty")
    private String password;

    @NotNull(message = "password confirm can't be null")
    @NotEmpty(message = "password confirm can't be empty")
    private String passwordConfirm;

    private String phone;

    private String email;

    private MultipartFile imageFile;

    @NotNull(message = "role id can't be null")
    private Long roleId;

}
