package com.anaselrayan.springcashiero.features.customers.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.core.constatnts.Table.CUSTOMER;

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
