package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.PRODUCT_UNIT_OF_MEASURE;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_UNIT_OF_MEASURE)
@Getter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductUnitOfMeasure extends BaseModel {

    private String code;

    private String name;

}
