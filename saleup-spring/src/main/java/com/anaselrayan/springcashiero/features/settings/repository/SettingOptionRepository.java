package com.anaselrayan.springcashiero.features.settings.repository;

import com.anaselrayan.springcashiero.features.settings.model.SettingOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingOptionRepository extends JpaRepository<SettingOption, Long> {
}
