package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT_BASIC;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_BASIC)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductBasic extends BaseModel {

    @ManyToOne
    private ProductCategory productCategory;

    @ManyToOne
    private ProductUnitOfMeasure unitOfMeasure;

    @ManyToOne
    private ProductStatus productStatus;

    @ManyToOne
    private ProductBrand productBrand;

    @OneToMany(mappedBy = "productBasic")
    private List<ProductImage> productImages;

    @Column(nullable = false)
    private String productName;

    @Column(unique = true)
    private String barcode;

    private String description;

    private Integer lowStockPoint;

    @Column(columnDefinition = "integer default 0")
    private Integer quantity = 0;

}
