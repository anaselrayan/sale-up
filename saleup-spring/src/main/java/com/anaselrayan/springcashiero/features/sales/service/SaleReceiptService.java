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
import java.util.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaleReceiptService {

    private final SettingService settingService;
    private final UploadService uploadService;
    private final SaleRepository saleRepository;
    public static final String RECEIPT_REPORT_PATH = "/report/receipt.jasper";

    public String generateSaleReceipt(Sale sale) {
        log.info("Generating receipt: " + sale.getId() + " ...");
        try {
            String receiptPath = Upload.UPLOAD_RECEIPT_PATH + "/" + sale.getCustomer().getPhone();
            String companyName = settingService.getSetting("company.name").getValue();
            String companyTel = settingService.getSetting("company.phone").getValue();
            String companyAddr = settingService.getSetting("company.address").getValue();
            String customerName = sale.getCustomer().getFirstName() + " " + sale.getCustomer().getLastName();
            String staffName = sale.getCreatedBy();

            Files.createDirectories(Paths.get(receiptPath));

            var reportPath = new ClassPathResource(RECEIPT_REPORT_PATH);
            JasperReport jasperReport = (JasperReport) JRLoader.loadObject(reportPath.getInputStream());

            List<ReceiptItemRequest> productList = sale.getSaleItems().stream().map(ReceiptItemRequest::new).toList();

            Map<String, Object> params = new HashMap<>();
            params.put("PRODUCT_LIST", new JRBeanCollectionDataSource(productList));
            params.put("companyName", companyName);
            params.put("companyTel", companyTel);
            params.put("companyAddr", companyAddr);
            params.put("customerName", customerName);
            params.put("staffName", staffName);
            params.put("subTotal", sale.getSubTotal());
            params.put("total", sale.getGrandTotal());
            params.put("billFooter", "THANK YOU!");
            params.put("logoImage", getLogoImageBytes());
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));
            params.put("currentDate", timestamp);

            List<String> dummyList = new ArrayList<>();
            dummyList.add("dummy");
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(dummyList);

            JasperPrint jp = JasperFillManager.fillReport(jasperReport, params, dataSource);
            String receiptFilePath = receiptPath + "/" + sale.getId() + ".pdf";
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
        String receiptPath = Upload.UPLOAD_RECEIPT_PATH + "/" + sale.getCustomer().getPhone();
        return uploadService.downloadResource(receiptPath, saleId + ".pdf");
    }

    private ByteArrayInputStream getLogoImageBytes() {
        try {
            String logo = settingService.getSetting("app.logo").getValue();
            ResponseEntity<Resource> res = uploadService.downloadResource(Upload.UPLOAD_STATIC_RESOURCES, logo);
            Resource resource = res.getBody();
            byte[] bytes = resource.getInputStream().readAllBytes();
            return new ByteArrayInputStream(bytes);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

}
