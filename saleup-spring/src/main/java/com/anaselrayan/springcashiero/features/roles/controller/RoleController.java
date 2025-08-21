package com.anaselrayan.springcashiero.features.roles.controller;

import com.anaselrayan.springcashiero.features.roles.request.RoleRequest;
import com.anaselrayan.springcashiero.features.roles.service.RoleService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/role")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @PreAuthorize("hasAuthority('perm.create.role')")
    @PostMapping
    public ResponseEntity<ApiResponse> createRole(@RequestBody RoleRequest request) {
        ApiResponse res = roleService.createUserRole(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.role')")
    @PutMapping
    public ResponseEntity<ApiResponse> updateRole(@RequestBody RoleRequest request) {
        ApiResponse res = roleService.updateUserRole(request);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllRoles() {
        ApiResponse res = roleService.getAllRoles();
        return ResponseEntity.ok(res);
    }

}
