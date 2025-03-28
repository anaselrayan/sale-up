package com.anaselrayan.springcashiero.features.settings.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.core.constatnts.Table.SETTING;

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

    @Column(nullable = false, updatable = false)
    private String settingType;

    @ManyToOne
    private SettingCategory settingCategory;

}
