package com.anaselrayan.springcashiero.features.sales.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class SaleReturnDTO {

    private Long saleReturnId;

    private SaleDTO sale;

    private List<SaleReturnItemDTO> returnItems;

    private Double subTotal;

    private Double feesAmount;

    private Double totalAmount;

    private LocalDateTime returnDate;

    private String returnedBy;

    private String barcode;

}
