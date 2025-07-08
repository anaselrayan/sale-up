package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT_IMAGE;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_IMAGE)
@Getter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductImage extends BaseModel {

    private String fileName;

    private String filePath;

    private Integer imageOrder;

    private Boolean isPrimary = Boolean.FALSE;

    @ManyToOne(fetch = FetchType.LAZY)
    private ProductBasic productBasic;

}
