package com.anaselrayan.springcashiero.features.roles.repository;

import com.anaselrayan.springcashiero.security.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {

    Optional<UserRole> findByRoleName(String name);

}
