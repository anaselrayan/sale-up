package com.anaselrayan.springcashiero.features.customers.service;

import com.anaselrayan.springcashiero.infrastructure.constatnts.ActionType;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
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
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public ApiResponse createCustomer(CustomerRequest request) {
        try {
            ApiResponse validateRes = validateCustomerRequest(request, ActionType.CREATE);
            if (!validateRes.getSuccess()) return validateRes;

            Customer toSave = Customer.builder()
                    .fullName(request.getFullName())
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

    public ApiResponse updateCustomer(CustomerRequest request) {
        try {
            ApiResponse validateRes = validateCustomerRequest(request, ActionType.UPDATE);
            if (!validateRes.getSuccess()) return validateRes;

            Customer toUpdate = customerRepository.findById(request.getCustomerId()).orElseThrow();
            toUpdate.setFullName(request.getFullName());
            toUpdate.setPhone(request.getPhone());
            toUpdate.setEmail(request.getEmail());
            toUpdate.setCountry(request.getCountry());
            toUpdate.setAddress(request.getAddress());
            return new ApiResponse(CustomerConverter.convert(customerRepository.save(toUpdate)), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse validateCustomerRequest(CustomerRequest request, ActionType actionType) {
        if (ActionType.CREATE.equals(actionType)) {
            if (customerRepository.existsByPhoneAndDeletedFalse(request.getPhone()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Phone number already in use");
        } else if (ActionType.UPDATE.equals(actionType)) {
            Optional<Customer> customer = customerRepository.findById(request.getCustomerId());
            if (customer.isEmpty())
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Customer not found");
            if (!customer.get().getPhone().equals(request.getPhone()) && customerRepository.existsByPhoneAndDeletedFalse(request.getPhone()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Phone number already in use");
        }
        return new ApiResponse("valid", StatusCode.OK);
    }

    public ApiResponse getCustomersPage(PageRequest pr) {
        try {
            Page<Customer> customerPage = customerRepository.findAllByDeletedFalse(pr);
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
            List<Customer> list = customerRepository.findByDeletedFalseAndPhoneLike(keyword);
            return new ApiResponse(CustomerConverter.convert(list), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse deleteCustomer(Long customerId) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        if (customer.isEmpty()) return new ApiResponse(false, StatusCode.BAD_REQUEST, "Customer not found");
        customer.get().setDeleted(true);
        return new ApiResponse(CustomerConverter.convert(customerRepository.save(customer.get())), StatusCode.OK);
    }

}
