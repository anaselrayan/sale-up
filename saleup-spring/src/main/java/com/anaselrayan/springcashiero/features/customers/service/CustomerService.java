package com.anaselrayan.springcashiero.features.customers.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.customers.converter.CustomerConverter;
import com.anaselrayan.springcashiero.features.customers.dto.CustomerDTO;
import com.anaselrayan.springcashiero.features.customers.model.Customer;
import com.anaselrayan.springcashiero.features.customers.repository.CustomerRepository;
import com.anaselrayan.springcashiero.features.customers.request.CustomerRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public ApiResponse createCustomer(CustomerRequest request) {
        try {
            Customer toSave = Customer.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .phone(request.getPhone())
                    .email(request.getEmail())
                    .country(request.getCountry())
                    .address(request.getAddress())
                    .build();
            Customer saved = customerRepository.save(toSave);
            return new ApiResponse(CustomerConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getCustomersPage(PageRequest pr) {
        try {
            Page<Customer> customerPage = customerRepository.findAll(pr);
            PageImpl<CustomerDTO> dtoPage = new PageImpl<>(
                    customerPage.getContent().stream().map(CustomerConverter::convert).toList(),
                    customerPage.getPageable(),
                    customerPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getCustomerById(Long id) {
        try {
            Customer customer = customerRepository.findById(id).orElseThrow();
            return new ApiResponse(CustomerConverter.convert(customer), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse filterCustomers(String keyword) {
        try {
            List<Customer> list = customerRepository.findByPhoneLike(keyword);
            return new ApiResponse(CustomerConverter.convert(list), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
