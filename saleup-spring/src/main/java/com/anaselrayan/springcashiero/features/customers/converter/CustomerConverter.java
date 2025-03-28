package com.anaselrayan.springcashiero.features.customers.converter;

import com.anaselrayan.springcashiero.features.customers.dto.CustomerDTO;
import com.anaselrayan.springcashiero.features.customers.model.Customer;

import java.util.List;
import java.util.stream.Collectors;

public class CustomerConverter {

    public static CustomerDTO convert(Customer from) {
        if (from == null) return null;

        return CustomerDTO.builder()
                .customerId(from.getId())
                .firstName(from.getFirstName())
                .lastName(from.getLastName())
                .email(from.getEmail())
                .phone(from.getPhone())
                .email(from.getEmail())
                .country(from.getCountry())
                .address(from.getAddress())
                .build();
    }

    public static List<CustomerDTO> convert(List<Customer> from) {
        if (from == null) return null;

        return from.stream().map(CustomerConverter::convert).collect(Collectors.toList());
    }

}
