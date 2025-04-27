package com.anaselrayan.springcashiero.features.roles.service;

import com.anaselrayan.springcashiero.core.constatnts.ActionType;
import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.permissions.repository.PermissionRepository;
import com.anaselrayan.springcashiero.features.roles.converter.RoleConverter;
import com.anaselrayan.springcashiero.features.roles.dto.RoleDTO;
import com.anaselrayan.springcashiero.features.roles.repository.UserRoleRepository;
import com.anaselrayan.springcashiero.features.roles.request.RoleRequest;
import com.anaselrayan.springcashiero.security.model.Permission;
import com.anaselrayan.springcashiero.security.model.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class RoleService {

    private final UserRoleRepository userRoleRepository;
    private final PermissionRepository permissionRepository;

    public ApiResponse createUserRole(RoleRequest request) {
        ApiResponse validationRes = validRoleRequest(request, ActionType.CREATE);
        if (!validationRes.getSuccess())
            return validationRes;
        try {
            UserRole toSave = UserRole.builder()
                    .roleName(request.getRoleName())
                    .description(request.getDescription())
                    .permissions(getPermissionsByIDs(request.getPermissionsIDs()))
                    .build();
            UserRole saved = userRoleRepository.save(toSave);
            return new ApiResponse(RoleConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse updateUserRole(RoleRequest request) {
        ApiResponse validationRes = validRoleRequest(request, ActionType.UPDATE);
        if (!validationRes.getSuccess())
            return validationRes;
        try {
            UserRole toSave = userRoleRepository.findById(request.getRoleId()).orElseThrow();
            toSave.setRoleName(request.getRoleName());
            toSave.setDescription(request.getDescription());
            toSave.setPermissions(getPermissionsByIDs(request.getPermissionsIDs()));
            UserRole saved = userRoleRepository.save(toSave);
            return new ApiResponse(RoleConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getAllRoles() {
        try {
            List<RoleDTO> roles = userRoleRepository.findAll()
                    .stream().map(RoleConverter::convert)
                    .toList();
            return new ApiResponse(roles, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    private ApiResponse validRoleRequest(RoleRequest req, ActionType actionType) {
        if (ActionType.CREATE.equals(actionType)) {
            if (userRoleRepository.existsByRoleName(req.getRoleName()))
                return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Role name already in use");
        }
        else if (ActionType.UPDATE.equals(actionType)) {
            Optional<UserRole> existingRole = userRoleRepository.findById(req.getRoleId());
            if (existingRole.isEmpty())
                return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Role not found");
            if (!existingRole.get().getRoleName().equals(req.getRoleName()) && userRoleRepository.existsByRoleName(req.getRoleName()))
                return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Role name already in use");

            if (userRoleRepository.existsByRoleName(req.getRoleName()))
                return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Role name already in use");
        }
        for (Long permId : req.getPermissionsIDs()) {
            if (!permissionRepository.existsById(permId))
                return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "permission with id (" + permId + ") not found");
        }
        return new ApiResponse("valid", StatusCode.OK);
    }

    private List<Permission> getPermissionsByIDs(List<Long> permIDs) {
        List<Permission> permissions = new ArrayList<>();
        for (Long id : permIDs) {
            permissions.add(permissionRepository.getReferenceById(id));
        }
        return permissions;
    }

}
