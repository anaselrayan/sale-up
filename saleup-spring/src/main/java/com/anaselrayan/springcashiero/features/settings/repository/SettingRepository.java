package com.anaselrayan.springcashiero.features.settings.repository;

import com.anaselrayan.springcashiero.features.settings.model.Setting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SettingRepository extends JpaRepository<Setting, Long> {

    Optional<Setting> findBySettingKey(String key);

    List<Setting> findAllBySettingCategoryName(String category);

    boolean existsBySettingKey(String key);
}
