package com.anaselrayan.springcashiero.features.products.model;

import com.anaselrayan.springcashiero.core.model.BaseModel;
import com.anaselrayan.springcashiero.features.products.enums.DiscountType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

import static com.anaselrayan.springcashiero.core.constatnts.Table.PRODUCT_PRICE;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = PRODUCT_PRICE)
@Getter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductPrice extends BaseModel {

    private Double costPrice;

    private Double sellingPrice;

    private Double discountAmount;

    @Enumerated(EnumType.STRING)
    private DiscountType discountType;

    private Boolean discountDisabled;

    private LocalDateTime discountStartDate;

    private LocalDateTime discountEndDate;

}
