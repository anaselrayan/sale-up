package com.anaselrayan.springcashiero.features.settings.model;

import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SETTING_CATEGORY;

@Entity
@Table(name = SETTING_CATEGORY)
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SettingCategory {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, updatable = false)
    private String name;

    @Column
    private String description;

    public SettingCategory(String name, String description) {
        this.name = name;
        this.description = description;
    }

}
