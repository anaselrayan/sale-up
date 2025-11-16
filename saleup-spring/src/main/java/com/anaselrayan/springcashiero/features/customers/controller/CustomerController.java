package com.anaselrayan.springcashiero.features.customers.controller;

import com.anaselrayan.springcashiero.features.customers.request.CustomerRequest;
import com.anaselrayan.springcashiero.features.customers.service.CustomerService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PreAuthorize("hasAuthority('perm.create.customer')")
    @PostMapping
    public ResponseEntity<ApiResponse> createCustomer(@RequestBody CustomerRequest request) {
        ApiResponse res = customerService.createCustomer(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.update.customer')")
    @PutMapping
    public ResponseEntity<ApiResponse> updateCustomer(@RequestBody CustomerRequest request) {
        ApiResponse res = customerService.updateCustomer(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.customer')")
    @GetMapping
    public ResponseEntity<ApiResponse> getCustomersPage(@RequestParam Integer page,
                                                        @RequestParam Integer size) {
        ApiResponse res = customerService.getCustomersPage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.customer')")
    @GetMapping("/filter/phone")
    public ResponseEntity<ApiResponse> filterCustomersByPhone(@RequestParam String key) {
        ApiResponse res = customerService.filterCustomersByPhone(key);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.customer')")
    @GetMapping("/filter")
    public ResponseEntity<ApiResponse> filterCustomers(@RequestParam Integer page,
                                                       @RequestParam Integer size,
                                                       @RequestParam String key) {
        ApiResponse res = customerService.filterCustomersByKeyword(key, PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.customer')")
    @GetMapping("/{customerId}")
    public ResponseEntity<ApiResponse> getCustomerById(@PathVariable Long customerId) {
        ApiResponse res = customerService.getCustomerById(customerId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.customer')")
    @DeleteMapping("/{customerId}")
    public ResponseEntity<ApiResponse> deleteCustomer(@PathVariable Long customerId) {
        ApiResponse res = customerService.deleteCustomer(customerId);
        return ResponseEntity.ok(res);
    }

}
