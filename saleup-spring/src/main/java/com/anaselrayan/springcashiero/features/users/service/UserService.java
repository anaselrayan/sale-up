package com.anaselrayan.springcashiero.features.users.service;

import com.anaselrayan.springcashiero.features.roles.repository.UserRoleRepository;
import com.anaselrayan.springcashiero.features.users.converter.UserConverter;
import com.anaselrayan.springcashiero.features.users.dto.UserDTO;
import com.anaselrayan.springcashiero.features.users.request.UserRequest;
import com.anaselrayan.springcashiero.infrastructure.constatnts.ActionType;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.security.model.AppUser;
import com.anaselrayan.springcashiero.security.repository.AppUserRepository;
import com.anaselrayan.springcashiero.shared.UploadFileRequest;
import com.anaselrayan.springcashiero.shared.UploadFileResponse;
import com.anaselrayan.springcashiero.shared.UploadService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Upload.UPLOAD_CATEGORY_IMAGE_DIR;
import static com.anaselrayan.springcashiero.infrastructure.constatnts.Upload.UPLOAD_USER_IMAGE_DIR;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final AppUserRepository appUserRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UploadService uploadService;

    public ApiResponse createUser(@Valid UserRequest request) {
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
            String imageUrl = uploadUserImage(request.getImageFile(), saved);
            saved.setImageUrl(imageUrl);
            appUserRepository.save(saved);
            return new ApiResponse(UserConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse updateUser(@Valid UserRequest request) {
        ApiResponse validRes = this.validateUserRequest(request, ActionType.UPDATE);
        if (!validRes.getSuccess()) return validRes;

        try {
            AppUser toSave = appUserRepository.findById(request.getUserId()).orElseThrow();
            toSave.setPhone(request.getPhone());
            toSave.setEmail(request.getEmail());
            toSave.setUsername(request.getUsername());
            toSave.setUserRole(userRoleRepository.getReferenceById(request.getRoleId()));
            if (request.getImageFile() != null && !request.getImageFile().isEmpty()) {
                if (toSave.getImageUrl() != null) {
                    String oldPath = UPLOAD_CATEGORY_IMAGE_DIR + "/" + request.getUserId() + "/" + toSave.getImageUrl();
                    Files.deleteIfExists(Paths.get(oldPath));
                }
                String imagePath = uploadUserImage(request.getImageFile(), toSave);
                toSave.setImageUrl(imagePath);
            }
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

    public String uploadUserImage(MultipartFile file, AppUser user) {
        if (file != null && !file.isEmpty()) {
            String path = UPLOAD_USER_IMAGE_DIR + "/" + user.getId();
            UploadFileResponse res = uploadService.uploadFile(
                    new UploadFileRequest(file, file.getOriginalFilename(), path)
            );
            return res.fileName;
        }
        return null;
    }

    public ResponseEntity<Resource> getUserImageResource(Long userId, String fileName) {
        return uploadService.downloadResource(UPLOAD_USER_IMAGE_DIR + "/" + userId, fileName);
    }

    public ResponseEntity<Resource> getUserImageResource(String username) {
        AppUser user = appUserRepository.findByUsername(username).orElseThrow();
        return uploadService.downloadResource(UPLOAD_USER_IMAGE_DIR + "/" + user.getId(), user.getImageUrl());
    }

}
