package com.anaselrayan.springcashiero.features.permissions.repository;

import com.anaselrayan.springcashiero.security.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long> {

    @Query("SELECT DISTINCT p.permCategory FROM Permission p")
    List<String> selectUniquePermissionCategories();

    List<Permission> findAllByPermCategory(String permCategory);
}
