package com.anaselrayan.springcashiero.runner.seeders;

import com.anaselrayan.springcashiero.features.permissions.repository.PermissionRepository;
import com.anaselrayan.springcashiero.runner.seeds.PermissionSeeds;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PermissionSeeder {

    private final PermissionRepository permissionRepository;

    @Bean
    public CommandLineRunner permissionRunner() {
        return args -> {
            if (permissionRepository.count() == 0) {
                permissionRepository.saveAll(PermissionSeeds.getPermList());
            }
        };
    }

}
