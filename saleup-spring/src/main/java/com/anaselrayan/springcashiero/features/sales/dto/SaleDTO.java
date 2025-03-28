package com.anaselrayan.springcashiero.features.sales.dto;

import com.anaselrayan.springcashiero.features.customers.dto.CustomerDTO;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class SaleDTO {

    private Long saleId;

    private List<SaleItemDTO> saleItems;

    private CustomerDTO customer;

    private Double subTotal;

    private Double grandTotal;

    private Double discount;

    private LocalDateTime createdAt;

    private String createdBy;

}
