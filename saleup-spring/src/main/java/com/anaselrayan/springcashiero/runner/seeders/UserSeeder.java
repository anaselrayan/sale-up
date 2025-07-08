package com.anaselrayan.springcashiero.runner.seeders;

import com.anaselrayan.springcashiero.features.permissions.repository.PermissionRepository;
import com.anaselrayan.springcashiero.features.roles.repository.UserRoleRepository;
import com.anaselrayan.springcashiero.runner.AdminUserProperties;
import com.anaselrayan.springcashiero.runner.seeds.PermissionSeeds;
import com.anaselrayan.springcashiero.security.model.AppUser;
import com.anaselrayan.springcashiero.security.model.Permission;
import com.anaselrayan.springcashiero.security.model.UserRole;
import com.anaselrayan.springcashiero.security.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserSeeder {

    private final PermissionRepository permissionRepository;
    private final UserRoleRepository roleRepository;
    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final AdminUserProperties adminProps;
    private final static String ROLE_ADMIN = "ADMIN";

    @Bean
    public CommandLineRunner userSeed() {
        this.createPermissions();
        return args -> createAdminUser();
    }


    private Optional<UserRole> createRoleAdmin() {
        if (roleRepository.findByRoleName(ROLE_ADMIN).isEmpty()) {
            List<Permission> perms = permissionRepository.findAll();
            UserRole role = UserRole.builder()
                    .roleName(ROLE_ADMIN)
                    .description("System Administrator who has all the permissions")
                    .permissions(perms)
                    .build();
            return Optional.of(roleRepository.save(role));
        }
        return Optional.empty();
    }

    private void createAdminUser() {
        Optional<UserRole> roleAdmin = createRoleAdmin();
        Optional<AppUser> userAdmin = appUserRepository.findByUsername(adminProps.getUsername());
        if (roleAdmin.isPresent() && userAdmin.isEmpty()) {
            AppUser user = AppUser.builder()
                    .username(adminProps.getUsername())
                    .password(passwordEncoder.encode(adminProps.getPassword()))
                    .userRole(roleAdmin.get())
                    .locked(false)
                    .build();
            appUserRepository.save(user);
        }
    }

    private void createPermissions() {
        if (permissionRepository.count() == 0) {
            permissionRepository.saveAll(PermissionSeeds.getPermList());
        }
    }

}
