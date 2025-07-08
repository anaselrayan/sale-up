package com.anaselrayan.springcashiero.features.products.imports;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.utils.ExcelImportUtil;
import com.anaselrayan.springcashiero.shared.ImportColumnSpec;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.model.ProductBasic;
import com.anaselrayan.springcashiero.features.products.model.ProductPrice;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductImportService {

    private final ProductImportConfig productImportConfig;
    private final ExcelImportUtil importUtil;
    private final ProductRepository productRepository;

    public ApiResponse importProducts(ProductImportRequest req) {
        List<Product> importedProducts = new ArrayList<>();
        List<String> errors = new ArrayList<>(); // To collect all validation errors

        try (Workbook workbook = new XSSFWorkbook(req.getFile().getInputStream())) {
            Sheet sheet = workbook.getSheetAt(0);
            List<ImportColumnSpec> importSpecs = productImportConfig.getImportSpec();

            Map<String, Integer> columnMapping;
            try {
                // Validate header row and get column mapping
                columnMapping = importUtil.validateHeader(sheet, importSpecs);
                log.info("Excel header validated successfully. Column mapping: {}", columnMapping);
            } catch (IllegalArgumentException e) {
                log.error("Header validation failed: {}", e.getMessage());
                return new ApiResponse(false, StatusCode.BAD_REQUEST, e.getMessage());
            }

            // Iterate over rows, starting from the second row (index 1) for data
            for (int rowNum = 1; rowNum <= sheet.getLastRowNum(); rowNum++) {
                Row row = sheet.getRow(rowNum);
                if (row == null) {
                    log.warn("Skipping empty row at index {}", rowNum);
                    continue;
                }
                try {
                    // Validate and map the current row's data
                    Map<String, Object> rowData = importUtil.validateAndMapRow(row, columnMapping, importSpecs);

                    // Map the row data to a Product object
                    Product product = mapRowDataToProduct(rowData);
                    importedProducts.add(product);
                    log.debug("Successfully processed row {}: {}", rowNum, product);

                } catch (IllegalArgumentException e) {
                    String errorMessage = String.format("Validation error in row %d: %s", rowNum + 1, e.getMessage());
                    errors.add(errorMessage);
                    log.warn(errorMessage);
                } catch (Exception e) {
                    String errorMessage = String.format("Unexpected error processing row %d: %s", rowNum + 1, e.getMessage());
                    errors.add(errorMessage);
                    log.error(errorMessage, e);
                }
            }

            if (!errors.isEmpty()) {
                // If there are any errors, return BAD_REQUEST with all error messages
                return new ApiResponse(false, StatusCode.BAD_REQUEST, String.join("\n", errors));
            } else if (importedProducts.isEmpty()){
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "No valid products found in the Excel file.");
            }
            else {
                // Successfully imported products
                for (Product product : importedProducts) {
                    if (!productRepository.existsByProductBasicBarcode(product.getProductBasic().getBarcode()))
                        productRepository.save(product);
                }
                log.info("Successfully imported {} products.", importedProducts.size());
                return ApiResponse.builder().data(importedProducts).success(true).message("Data imported").build();
            }

        } catch (IOException e) {
            log.error("Error reading Excel file: {}", e.getMessage(), e);
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "Failed to read Excel file: " + e.getMessage());
        } catch (Exception e) {
            log.error("An unexpected error occurred during product import: {}", e.getMessage(), e);
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, "An unexpected error occurred: " + e.getMessage());
        }
    }

    private Product mapRowDataToProduct(Map<String, Object> rowData) {
        Product product = new Product();
        ProductBasic productBasic = new ProductBasic();
        productBasic.setDescription((String) rowData.get("description")); // Optional, can be null
        ProductPrice productPrice = new ProductPrice();
        productBasic.setProductName((String) rowData.get("name"));
        productBasic.setBarcode((String) rowData.get("barcode"));
        productBasic.setQuantity((Integer) rowData.get("quantity"));
        productBasic.setLowStockPoint(0);
        productPrice.setCostPrice((Double) rowData.get("cost"));
        productPrice.setSellingPrice((Double) rowData.get("price"));

        product.setProductBasic(productBasic);
        product.setProductPrice(productPrice);
        return product;
    }

}
