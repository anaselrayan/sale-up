package com.anaselrayan.springcashiero.security.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.APP_USER;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = APP_USER)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AppUser extends BaseModel {

    private String username;

    private String password;

    private String phone;

    private String email;

    private Boolean locked;

    private String imageUrl;

    private LocalDateTime lastLoginTime;

    @ManyToOne(fetch = FetchType.EAGER)
    private UserRole userRole;

}
