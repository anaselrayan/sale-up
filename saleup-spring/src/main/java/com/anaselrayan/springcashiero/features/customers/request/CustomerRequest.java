package com.anaselrayan.springcashiero.features.customers.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CustomerRequest {

    private Long customerId;

    @NotNull(message = "customer firstname can't be null")
    @NotEmpty(message = "customer firstname can't be empty")
    private String firstName;

    @NotNull(message = "customer lastname can't be null")
    @NotEmpty(message = "customer lastname can't be empty")
    private String lastName;

    private String email;

    @NotNull(message = "customer phone can't be null")
    @NotEmpty(message = "customer phone can't be empty")
    private String phone;

    private String country;

    private String address;

}
