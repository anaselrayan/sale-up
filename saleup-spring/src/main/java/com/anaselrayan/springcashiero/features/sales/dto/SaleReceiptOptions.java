package com.anaselrayan.springcashiero.features.sales.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SaleReceiptOptions {
    private String companyName;
    private String companyAddress;
    private String companyPhone;
    private String companyLogo;
    private String receiptFooter;
    private boolean showFooter;
    private boolean showLogo;
    private boolean showCompanyAddress;
    private boolean showCompanyPhone;
    private boolean showSeller;
    private boolean showBarcode;
    private boolean showCustomer;
}
