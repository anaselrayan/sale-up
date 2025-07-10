package com.anaselrayan.springcashiero.features.sales.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import com.anaselrayan.springcashiero.features.customers.model.Customer;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SALE;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SALE)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@SQLRestriction("deleted = false")
public class Sale extends BaseModel {

    @ManyToOne(fetch = FetchType.EAGER)
    private Customer customer;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "sale")
    List<SaleItem> saleItems;

    private Double subTotal;

    private Double grandTotal;

    private Double discount;

    private String barcode;

    private boolean partiallyReturned = false;

    private boolean totallyReturned = false;

}
