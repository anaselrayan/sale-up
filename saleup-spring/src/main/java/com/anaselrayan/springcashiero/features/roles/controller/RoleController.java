package com.anaselrayan.springcashiero.features.roles.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.roles.request.RoleRequest;
import com.anaselrayan.springcashiero.features.roles.service.RoleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/role")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @PostMapping
    public ResponseEntity<ApiResponse> createRole(@RequestBody @Valid RoleRequest request) {
        ApiResponse res = roleService.createUserRole(request);
        return ResponseEntity.ok(res);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateRole(@RequestBody @Valid RoleRequest request) {
        ApiResponse res = roleService.updateUserRole(request);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllRoles() {
        ApiResponse res = roleService.getAllRoles();
        return ResponseEntity.ok(res);
    }

}
