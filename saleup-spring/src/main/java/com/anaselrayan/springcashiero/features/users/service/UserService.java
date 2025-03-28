package com.anaselrayan.springcashiero.features.users.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.roles.repository.UserRoleRepository;
import com.anaselrayan.springcashiero.features.users.converter.UserConverter;
import com.anaselrayan.springcashiero.features.users.dto.UserDTO;
import com.anaselrayan.springcashiero.features.users.request.UserRequest;
import com.anaselrayan.springcashiero.security.model.AppUser;
import com.anaselrayan.springcashiero.security.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final AppUserRepository appUserRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    public ApiResponse createUser(UserRequest request) {
        try {
            AppUser toSave = AppUser.builder()
                    .phone(request.getPhone())
                    .email(request.getEmail())
                    .username(request.getUsername())
                    .locked(false)
                    .userRole(userRoleRepository.getReferenceById(request.getRoleId()))
                    .password(passwordEncoder.encode(request.getPassword()))
                    .build();
            AppUser saved = appUserRepository.save(toSave);
            return new ApiResponse(UserConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getUsersPage(PageRequest pr) {
        try {
            Page<AppUser> userPage = appUserRepository.findAll(pr);
            PageImpl<UserDTO> dtoPage = new PageImpl<>(
                    userPage.getContent().stream().map(UserConverter::convert).toList(),
                    userPage.getPageable(),
                    userPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
