package com.anaselrayan.springcashiero.runner.seeders;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import com.anaselrayan.springcashiero.features.permissions.repository.PermissionRepository;
import com.anaselrayan.springcashiero.features.permissions.request.PermissionRequest;
import com.anaselrayan.springcashiero.features.permissions.service.PermissionService;
import com.anaselrayan.springcashiero.features.roles.repository.UserRoleRepository;
import com.anaselrayan.springcashiero.features.roles.request.RoleRequest;
import com.anaselrayan.springcashiero.features.roles.service.RoleService;
import com.anaselrayan.springcashiero.features.users.request.UserRequest;
import com.anaselrayan.springcashiero.features.users.service.UserService;
import com.anaselrayan.springcashiero.security.model.UserRole;
import com.anaselrayan.springcashiero.security.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class UserSeeder {

    private final PermissionRepository permissionRepository;
    private final UserRoleRepository roleRepository;
    private final AppUserRepository appUserRepository;
    private final UserService userService;
    private final RoleService roleService;
    private final PermissionService permissionService;

    @Bean
    public CommandLineRunner userSeed() {
        return args -> {
        };
    }

    private void createPermissions() {
        if (permissionRepository.count() > 0)
            return;
        permissionService.createPermission(new PermissionRequest(
                1L, "PERM.READ_USERS", "Read Users", "Enable user to read the users' details"
        ));
        permissionService.createPermission(new PermissionRequest(
                2L, "PERM.CREATE_USERS", "Create Users", "Enable user to create another user's details"
        ));
    }

    private void createRoles() {
        if (roleRepository.count() > 0)
            return;
        List<Long> perms = permissionRepository.findAll().stream().map(BaseModel::getId).toList();
        roleService.createUserRole(new RoleRequest(1L, "ADMIN", "administrator role", perms));
    }

    private void createUsers() {
        if (appUserRepository.count() > 0)
            return;
        UserRole role = roleRepository.findByRoleName("ADMIN").orElseThrow();
        userService.createUser(new UserRequest(1L, "admin", "123", "123", "012", "", null, role.getId()));
    }

}
