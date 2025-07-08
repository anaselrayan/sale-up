package com.anaselrayan.springcashiero.features.permissions.service;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.features.permissions.converter.PermissionConverter;
import com.anaselrayan.springcashiero.features.permissions.dto.PermissionDTO;
import com.anaselrayan.springcashiero.features.permissions.dto.PermissionGroupDTO;
import com.anaselrayan.springcashiero.features.permissions.repository.PermissionRepository;
import com.anaselrayan.springcashiero.features.permissions.request.PermissionRequest;
import com.anaselrayan.springcashiero.security.model.Permission;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class PermissionService {

    private final PermissionRepository permissionRepository;

    public ApiResponse createPermission(PermissionRequest request) {
        try {
            Permission toSave = Permission.builder()
                    .permCode(request.getPermCode())
                    .permName(request.getPermName())
                    .permCategory(request.getPermDescription())
                    .build();
            Permission saved = permissionRepository.save(toSave);
            return new ApiResponse(PermissionConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getAllPermissions() {
        try {
            List<String> uniqueGroups = permissionRepository.selectUniquePermissionCategories();
            List<PermissionGroupDTO> permGroups = new ArrayList<>();
            for (String g : uniqueGroups) {
                permGroups.add(new PermissionGroupDTO(g, getPermissionsByPermCategory(g)));
            }
            return new ApiResponse(permGroups, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    private List<PermissionDTO> getPermissionsByPermCategory(String cat) {
        return permissionRepository.findAllByPermCategory(cat)
                .stream().map(PermissionConverter::convert)
                .toList();
    }

}
