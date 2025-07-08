package com.anaselrayan.springcashiero.security.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.JT_ROLE_PERMISSIONS;
import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.USER_ROLE;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = USER_ROLE)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserRole extends BaseModel {

    private String roleName;

    private String description;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = JT_ROLE_PERMISSIONS)
    private List<Permission> permissions;

}
