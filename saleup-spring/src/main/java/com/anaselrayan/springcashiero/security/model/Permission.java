package com.anaselrayan.springcashiero.security.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.core.constatnts.Table.ROLE_PERMISSION;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = ROLE_PERMISSION)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Permission extends BaseModel {

    private String permCode;

    private String permName;

    private String permCategory;

}
