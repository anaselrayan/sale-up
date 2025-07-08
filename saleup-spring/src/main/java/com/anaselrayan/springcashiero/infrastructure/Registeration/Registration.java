package com.anaselrayan.springcashiero.infrastructure.Registeration;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SYSTEM_REGISTRATION;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SYSTEM_REGISTRATION)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Registration extends BaseModel {

    private String name;

    @Enumerated(EnumType.STRING)
    private RegistrationPlan registrationPlan;

    private String timeSpent;

}
