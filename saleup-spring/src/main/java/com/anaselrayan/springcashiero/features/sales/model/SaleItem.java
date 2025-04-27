package com.anaselrayan.springcashiero.features.sales.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import com.anaselrayan.springcashiero.features.products.model.Product;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import static com.anaselrayan.springcashiero.core.constatnts.Table.SALE_ITEM;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SALE_ITEM)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@SQLRestriction("deleted = false")
public class SaleItem extends BaseModel {

    @ManyToOne(fetch = FetchType.EAGER)
    private Product product;

    private Integer quantity;

    private int returnedQuantity = 0;

    private Double unitCost;

    private Double unitPrice;

    private Double subTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    private Sale sale;

}