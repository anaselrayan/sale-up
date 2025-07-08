package com.anaselrayan.springcashiero.features.sales.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SALE_RETURN_ITEM;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SALE_RETURN_ITEM)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SaleReturnItem extends BaseModel {

    @ManyToOne(fetch = FetchType.EAGER)
    private SaleItem saleItem;

    private Integer quantity;

    private Double subTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    private SaleReturn saleReturn;

}
