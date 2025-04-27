package com.anaselrayan.springcashiero.features.settings.model;

import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.core.constatnts.Table.SETTING_OPTION;

@Entity
@Table(name = SETTING_OPTION)
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SettingOption {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Setting setting;

    private String name;

    private String value;

    public SettingOption(String name, String value) {
        this.name = name;
        this.value = value;
    }

}
