package com.anaselrayan.springcashiero.features.settings.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import com.anaselrayan.springcashiero.features.settings.constant.SettingType;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collections;
import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SETTING;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SETTING)
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Setting extends BaseModel {

    @Column(unique = true, nullable = false, updatable = false)
    private String settingKey;

    @Column(nullable = false)
    private String settingValue;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, updatable = false)
    private SettingType settingType;

    @ManyToOne
    private SettingCategory settingCategory;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<SettingOption> options;

    public Setting(String settingKey, String settingValue, SettingType settingType, SettingCategory settingCategory) {
        this.settingKey = settingKey;
        this.settingValue = settingValue;
        this.settingType = settingType;
        this.settingCategory = settingCategory;
        this.options = Collections.emptyList();
    }

}
