package com.anaselrayan.springcashiero.features.settings.repository;

import com.anaselrayan.springcashiero.features.settings.model.SettingCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SettingCategoryRepository extends JpaRepository<SettingCategory, Long> {
    boolean existsByName(String name);

    Optional<SettingCategory> findByName(String name);
}
