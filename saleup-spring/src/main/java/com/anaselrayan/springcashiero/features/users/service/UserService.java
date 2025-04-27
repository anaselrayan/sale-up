package com.anaselrayan.springcashiero.features.users.service;

import com.anaselrayan.springcashiero.core.constatnts.ActionType;
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

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final AppUserRepository appUserRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    public ApiResponse createUser(UserRequest request) {
        ApiResponse validRes = this.validateUserRequest(request, ActionType.CREATE);
        if (!validRes.getSuccess()) return validRes;

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

    public ApiResponse updateUser(UserRequest request) {
        ApiResponse validRes = this.validateUserRequest(request, ActionType.UPDATE);
        if (!validRes.getSuccess()) return validRes;

        try {
            AppUser toSave = appUserRepository.findById(request.getUserId()).orElseThrow();
            toSave.setPhone(request.getPhone());
            toSave.setEmail(request.getEmail());
            toSave.setUsername(request.getUsername());
            toSave.setUserRole(userRoleRepository.getReferenceById(request.getRoleId()));
            AppUser saved = appUserRepository.save(toSave);
            return new ApiResponse(UserConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getUsersPage(PageRequest pr) {
        try {
            Page<AppUser> userPage = appUserRepository.findAllByDeletedFalse(pr);
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

    public ApiResponse deleteUser(Long userId) {
        Optional<AppUser> appUser = appUserRepository.findById(userId);
        if (appUser.isEmpty())
            return new ApiResponse(false, StatusCode.NOT_FOUND, "User not found");

        appUser.get().setUsername(appUser.get().getUsername() + "*" + userId);
        appUser.get().setDeleted(true);
        appUserRepository.save(appUser.get());
        return new ApiResponse("Deleted", StatusCode.OK);
    }

    public ApiResponse toggleUserStatus(Long userId, Boolean locked) {
        Optional<AppUser> appUser = appUserRepository.findById(userId);
        if (appUser.isEmpty())
            return new ApiResponse(false, StatusCode.NOT_FOUND, "User not found");
        appUser.get().setLocked(locked);
        AppUser saved = appUserRepository.save(appUser.get());
        return new ApiResponse(UserConverter.convert(saved), StatusCode.OK);
    }

    private ApiResponse validateUserRequest(UserRequest request, ActionType actionType) {
        if (ActionType.CREATE.equals(actionType)) {
            if (request.getPassword() == null || request.getPasswordConfirm() == null ||
                request.getPassword().isEmpty() || request.getPasswordConfirm().isEmpty()) {
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Passwords cannot be empty");
            }

            if (!request.getPassword().equals(request.getPasswordConfirm()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Password does not match");

            if (appUserRepository.existsByUsername(request.getUsername()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Username already exists");
        }

        if (ActionType.UPDATE.equals(actionType)) {
            Optional<AppUser> userOpt = appUserRepository.findById(request.getUserId());
            if (userOpt.isEmpty())
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "User does not exist");
            if (!userOpt.get().getUsername().equals(request.getUsername()) && appUserRepository.existsByUsername(request.getUsername()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Username already exists");
        }

        if (!userRoleRepository.existsById(request.getRoleId()))
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "Role does not exist");

        return new ApiResponse("valid", StatusCode.OK);
    }

}
