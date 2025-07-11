package com.anaselrayan.springcashiero.features.sales.model;

import com.anaselrayan.springcashiero.infrastructure.model.BaseModel;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Table.SALE_RETURN;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = SALE_RETURN)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SaleReturn extends BaseModel {

    @ManyToOne
    private Sale sale;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "saleReturn")
    private List<SaleReturnItem> returnItems;

    private Double subTotal;

    private Double feesAmount;

    private Double totalReturn;

    private String barcode;

}
