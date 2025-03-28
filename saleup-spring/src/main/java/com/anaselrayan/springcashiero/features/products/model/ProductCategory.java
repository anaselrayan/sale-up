package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import static com.anaselrayan.springcashiero.core.constatnts.Table.PRODUCT_CATEGORY;


@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_CATEGORY)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@SQLRestriction("deleted = false")
public class ProductCategory extends BaseModel {

    @Column(unique = true, nullable = false)
    private String name;

    @Column
    private String description;

    @Column
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductCategory parentCategory;

}