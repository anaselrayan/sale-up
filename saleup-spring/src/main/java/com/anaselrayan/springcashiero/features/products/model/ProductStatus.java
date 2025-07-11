package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT_STATUS;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_STATUS)
@Getter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductStatus extends BaseModel {

    private String name;

    private String description;

}
