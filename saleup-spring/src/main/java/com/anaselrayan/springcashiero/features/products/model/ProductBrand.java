package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT_BRAND;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_BRAND)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductBrand extends BaseModel {

    @Column(unique = true, nullable = false)
    private String name;

    @Column
    private String description;

    @Column
    private String imageUrl;

}
