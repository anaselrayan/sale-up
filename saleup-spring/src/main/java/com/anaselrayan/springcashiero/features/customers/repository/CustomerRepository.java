package com.anaselrayan.springcashiero.features.customers.repository;

import com.anaselrayan.springcashiero.features.customers.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("SELECT c FROM Customer c WHERE c.deleted = false AND c.phone LIKE %:phone%")
    List<Customer> findByDeletedFalseAndPhoneLike(String phone);

    boolean existsByPhoneAndDeletedFalse(String phone);

    Page<Customer> findAllByDeletedFalse(Pageable pageable);
}
