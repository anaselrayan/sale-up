package com.anaselrayan.springcashiero.features.customers.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.CUSTOMER;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = CUSTOMER)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Customer extends BaseModel {

    private String fullName;

    private String phone;

    private String email;

    private String country;

    private String address;

}
