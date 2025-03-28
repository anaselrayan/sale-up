package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import static com.anaselrayan.springcashiero.core.constatnts.Table.PRODUCT;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@SQLRestriction("deleted = false")
public class Product extends BaseModel {

    @OneToOne
    private ProductBasic productBasic;

    @OneToOne
    private ProductPrice productPrice;

}
