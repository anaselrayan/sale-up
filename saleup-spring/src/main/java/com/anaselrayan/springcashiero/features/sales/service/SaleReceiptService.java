package com.anaselrayan.springcashiero.features.sales.service;

import com.anaselrayan.springcashiero.core.constatnts.Upload;
import com.anaselrayan.springcashiero.features.sales.model.Sale;
import com.anaselrayan.springcashiero.features.sales.repository.SaleRepository;
import com.anaselrayan.springcashiero.features.sales.request.ReceiptItemRequest;
import com.anaselrayan.springcashiero.features.settings.service.SettingService;
import com.anaselrayan.springcashiero.shared.UploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleReceiptService {

    private final SettingService settingService;
    private final UploadService uploadService;
    private final SaleRepository saleRepository;
    public static final String RECEIPT_REPORT_PATH = "/report/receipt.jasper";
    private static final String NO_CUSTOMER_FOLDER = "NOT_REGISTERED";

    public String generateSaleReceipt(Sale sale) {
        try {
            String receiptPath = Upload.UPLOAD_RECEIPT_PATH + "/";
            receiptPath += (sale.getCustomer() == null ? NO_CUSTOMER_FOLDER : sale.getCustomer().getPhone());
            String companyName = settingService.getSetting("company.name").getValue();

            Files.createDirectories(Paths.get(receiptPath));

            ClassPathResource reportPath = new ClassPathResource(RECEIPT_REPORT_PATH);
            JasperReport jasperReport = (JasperReport) JRLoader.loadObject(reportPath.getInputStream());

            List<ReceiptItemRequest> productList = sale.getSaleItems().stream().map(ReceiptItemRequest::new).toList();

            Map<String, Object> params = new HashMap<>();
            params.put("PRODUCT_LIST", new JRBeanCollectionDataSource(productList));
            params.put("companyName", companyName);
            params.put("companyTel", getCompanyPhone());
            params.put("companyAddr", getCompanyAddress());
            params.put("customerName", getCustomer(sale));
            params.put("staffName", getSeller(sale));
            params.put("subTotal", Math.round(sale.getSubTotal() * 100) / 100.0);
            params.put("total", Math.round(sale.getGrandTotal() * 100) / 100.0);
            params.put("billFooter", getReceiptFooter());
            params.put("logoImage", getLogoImageBytes());
            params.put("barcode", sale.getBarcode());
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));
            params.put("currentDate", timestamp);

            List<String> dummyList = new ArrayList<>();
            dummyList.add("dummy");
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(dummyList);

            JasperPrint jp = JasperFillManager.fillReport(jasperReport, params, dataSource);
            String receiptFilePath = receiptPath + "/" + sale.getBarcode() + ".pdf";
            JasperExportManager.exportReportToPdfFile(jp, receiptFilePath);
            log.info("Receipt exported successfully to path: " + receiptFilePath);
            return receiptFilePath;
        } catch (Exception ex) {
            log.error("Couldn't export the receipt: " + ex.getMessage());
            return null;
        }
    }

    public ResponseEntity<Resource> getSaleReceipt(Long saleId) {
        Sale sale = saleRepository.findById(saleId).orElseThrow();
        String receiptPath = Upload.UPLOAD_RECEIPT_PATH + "/";
        receiptPath += (sale.getCustomer() == null ? NO_CUSTOMER_FOLDER : sale.getCustomer().getPhone());
        return uploadService.downloadResource(receiptPath, sale.getBarcode() + ".pdf");
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

}
