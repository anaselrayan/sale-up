package com.anaselrayan.springcashiero.features.customers.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.customers.request.CustomerRequest;
import com.anaselrayan.springcashiero.features.customers.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<ApiResponse> createCustomer(@RequestBody @Valid CustomerRequest request) {
        ApiResponse res = customerService.createCustomer(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getCustomersPage(@RequestParam Integer page,
                                                        @RequestParam Integer size) {
        ApiResponse res = customerService.getCustomersPage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping("/filter")
    public ResponseEntity<ApiResponse> filterCustomers(@RequestParam String key) {
        ApiResponse res = customerService.filterCustomers(key);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<ApiResponse> getCustomerById(@PathVariable Long customerId) {
        ApiResponse res = customerService.getCustomerById(customerId);
        return ResponseEntity.status(res.getCode()).body(res);
    }

}
