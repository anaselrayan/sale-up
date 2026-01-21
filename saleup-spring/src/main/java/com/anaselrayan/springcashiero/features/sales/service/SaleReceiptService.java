package com.anaselrayan.springcashiero.features.sales.service;

import com.anaselrayan.springcashiero.features.sales.dto.SaleReceiptOptions;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.request.ReceiptItemRequest;
import com.anaselrayan.springcashiero.features.settings.service.SettingService;
import com.anaselrayan.springcashiero.infrastructure.constatnts.Upload;
import com.anaselrayan.springcashiero.shared.UploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleReceiptService {

    private final SettingService settingService;
    private final UploadService uploadService;
    public static final String RECEIPT_REPORT_PATH = "/report/receipt.jasper";
    public static final String RECEIPT_FILE_PREFIX = "receipt-";
    public static final String RECEIPT_EXTENSION = ".pdf";
    private static final String NO_CUSTOMER_FOLDER = "NOT_REGISTERED";

    public byte[] generateSaleReceipt(Sale sale) {
        try {
            String companyName = settingService.getSetting("company.name").getValue();

            ClassPathResource reportPath = new ClassPathResource(RECEIPT_REPORT_PATH);
            JasperReport jasperReport = (JasperReport) JRLoader.loadObject(reportPath.getInputStream());

            List<ReceiptItemRequest> productList = sale.getSaleItems()
                    .stream()
                    .map(ReceiptItemRequest::new)
                    .toList();

            Map<String, Object> params = new HashMap<>();
            params.put("PRODUCT_LIST", new JRBeanCollectionDataSource(productList));
            params.put("companyName", companyName);
            params.put("companyTel", getCompanyPhone());
            params.put("companyAddr", getCompanyAddress());
            params.put("customerName", getCustomer(sale));
            params.put("staffName", getSeller(sale));
            params.put("subTotal", Math.round(sale.getSubTotal() * 100) / 100.0);
            params.put("total", Math.round(sale.getGrandTotal() * 100) / 100.0);
            params.put("discount", sale.getDiscount() == null ? 0.0 : Math.round(sale.getDiscount() * 100) / 100.0);
            params.put("deliveryAmount", sale.getDeliveryAmount() == null ? 0.0 : Math.round(sale.getDeliveryAmount() * 100) / 100.0);
            params.put("billFooter", getReceiptFooter());
            params.put("logoImage", getLogoImageBytes());
            params.put("barcode", sale.getBarcode());
            params.put("currentDate", LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));

            Locale locale = new Locale( "en", "US" );
            params.put( JRParameter.REPORT_LOCALE, locale );
            // dummy datasource
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(List.of("dummy"));

            JasperPrint jp = JasperFillManager.fillReport(jasperReport, params, dataSource);

            return JasperExportManager.exportReportToPdf(jp);

        } catch (Exception ex) {
            log.error("Couldn't export the receipt: {}", ex.getMessage());
            return null;
        }
    }

    public void saveSaleReceipt(Sale sale) {
        byte[] pdfBytes = generateSaleReceipt(sale);
        if (pdfBytes == null || pdfBytes.length == 0) {
            return;
        }

        try {
            String customerFolder = resolveCustomerFolder(sale);
            Path targetDir = Paths.get(Upload.UPLOAD_RECEIPT_PATH, customerFolder);
            Files.createDirectories(targetDir);

            String fileName = buildReceiptFileName(sale);
            Path receiptPath = targetDir.resolve(fileName);

            Files.write(receiptPath, pdfBytes);
            log.info("Receipt saved at {}", receiptPath);

        } catch (Exception ex) {
            log.error("Failed to save receipt to disk: {}", ex.getMessage(), ex);
        }
    }

    private String resolveCustomerFolder(Sale sale) {
        if (sale.getCustomer() == null || sale.getCustomer().getPhone() == null) {
            return NO_CUSTOMER_FOLDER;
        }
        return sale.getCustomer().getPhone();
    }

    private String buildReceiptFileName(Sale sale) {
        String timestamp = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm-ss"));

        String barcodePart = sale.getBarcode() != null
                ? sale.getBarcode()
                : "NO_BARCODE";

        return RECEIPT_FILE_PREFIX + barcodePart + "-" + timestamp + RECEIPT_EXTENSION;
    }

    private ByteArrayInputStream getLogoImageBytes() {
        if ("false".equals(settingService.getSetting("pos.receipt.showLogo").getValue()))
            return null;

        try {
            String logo = settingService.getSetting("app.logo").getValue();
            ResponseEntity<Resource> res = uploadService.downloadResource(Upload.UPLOAD_STATIC_RESOURCES, logo);
            Resource resource = res.getBody();
            if (resource == null) return null;
            byte[] bytes = resource.getInputStream().readAllBytes();
            return new ByteArrayInputStream(bytes);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    private String getReceiptFooter() {
        if ("true".equals(settingService.getSetting("pos.receipt.showFooter").getValue()))
            return settingService.getSetting("pos.receipt.footer").getValue();
        else return null;
    }

    private String getSeller(Sale sale) {
        if ("true".equals(settingService.getSetting("pos.receipt.showSeller").getValue()))
            return sale.getCreatedBy();
        else return null;
    }

    private String getCustomer(Sale sale) {
        if ("true".equals(settingService.getSetting("pos.receipt.showCustomer").getValue())) {
            if (sale.getCustomer() != null)
                return sale.getCustomer().getFullName() + " ( " + sale.getCustomer().getPhone() + " ) ";
            else
                return "NOT_REGISTERED_CUSTOMER";
        }
        else return null;
    }

    private String getCompanyPhone() {
        if ("true".equals(settingService.getSetting("pos.receipt.showCompanyPhone").getValue()))
            return settingService.getSetting("company.phone").getValue();
        else return null;
    }

    private String getCompanyAddress() {
        if ("true".equals(settingService.getSetting("pos.receipt.showCompanyAddress").getValue()))
            return settingService.getSetting("company.address").getValue();
        else return null;
    }

    public SaleReceiptOptions getSaleReceiptOptions() {
        return SaleReceiptOptions.builder()
                .companyName(settingService.getSetting("company.name").getValue())
                .companyAddress(settingService.getSetting("company.address").getValue())
                .companyLogo(settingService.getSetting("app.logo").getValue())
                .companyPhone(settingService.getSetting("company.phone").getValue())
                .receiptFooter(settingService.getSetting("pos.receipt.footer").getValue())
                .showBarcode(settingService.getSetting("pos.receipt.showBarcode").getValue().equals("true"))
                .showCustomer(settingService.getSetting("pos.receipt.showCustomer").getValue().equals("true"))
                .showCompanyAddress(settingService.getSetting("pos.receipt.showCompanyAddress").getValue().equals("true"))
                .showCompanyPhone(settingService.getSetting("pos.receipt.showCompanyPhone").getValue().equals("true"))
                .showSeller(settingService.getSetting("pos.receipt.showSeller").getValue().equals("true"))
                .showLogo(settingService.getSetting("pos.receipt.showLogo").getValue().equals("true"))
                .showFooter(settingService.getSetting("pos.receipt.showFooter").getValue().equals("true"))
                .build();
    }

}
