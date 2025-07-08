package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product extends BaseModel {

    @OneToOne(cascade = CascadeType.ALL)
    private ProductBasic productBasic;

    @OneToOne(cascade = CascadeType.ALL)
    private ProductPrice productPrice;

}
