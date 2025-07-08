package com.anaselrayan.springcashiero.utils;

import com.anaselrayan.springcashiero.shared.DataType;
import com.anaselrayan.springcashiero.shared.ImportColumnSpec;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Utility class for validating and processing Excel import data based on column specifications.
 */
@Component
public class ExcelImportUtil {

    public Map<String, Integer> validateHeader(Sheet sheet, List<ImportColumnSpec> specs) {
        Row headerRow = sheet.getRow(0);
        if (headerRow == null) {
            throw new IllegalArgumentException("Excel file must contain a header row.");
        }

        Map<String, Integer> columnMapping = new HashMap<>();
        // Populate the mapping from header row cell values to their indices
        for (Cell cell : headerRow) {
            String headerName = cell.getStringCellValue().trim();
            columnMapping.put(headerName.toLowerCase(), cell.getColumnIndex());
        }

        // Validate that all required columns are present in the header
        for (ImportColumnSpec spec : specs) {
            if (!spec.isOptional() && !columnMapping.containsKey(spec.getColumnName().toLowerCase())) {
                throw new IllegalArgumentException("Required column '" + spec.getColumnName() + "' is missing in the Excel header.");
            }
        }
        return columnMapping;
    }

    public Map<String, Object> validateAndMapRow(Row row, Map<String, Integer> columnMapping, List<ImportColumnSpec> specs) {
        Map<String, Object> rowData = new HashMap<>();

        for (ImportColumnSpec spec : specs) {
            String columnName = spec.getColumnName().toLowerCase();
            Integer columnIndex = columnMapping.get(columnName);

            if (columnIndex == null) {
                if (!spec.isOptional()) {
                    throw new IllegalStateException("Internal error: Required column '" + spec.getColumnName() + "' not found in mapping after header validation.");
                }
                continue;
            }

            Cell cell = row.getCell(columnIndex);

            if (cell == null || cell.getCellType() == CellType.BLANK) {
                if (!spec.isOptional()) {
                    throw new IllegalArgumentException("Required column '" + spec.getColumnName() + "' has an empty or blank cell in row " + (row.getRowNum() + 1));
                }
                rowData.put(spec.getColumnName(), null); // Store null for optional empty cells
                continue;
            }

            Object cellValue = getCellValue(cell, spec.getDataType(), spec.getColumnName());
            rowData.put(spec.getColumnName(), cellValue);
        }
        return rowData;
    }

    private Object getCellValue(Cell cell, DataType expectedType, String columnName) {
        try {
            switch (expectedType) {
                case TEXT:
                    // Try to get as string, convert numeric to string if needed
                    if (cell.getCellType() == CellType.NUMERIC) {
                        return String.valueOf(cell.getNumericCellValue());
                    } else if (cell.getCellType() == CellType.STRING) {
                        return cell.getStringCellValue().trim();
                    } else if (cell.getCellType() == CellType.BOOLEAN) {
                        return String.valueOf(cell.getBooleanCellValue());
                    } else {
                        throw new IllegalArgumentException("Column '" + columnName + "': Expected TEXT, but found " + cell.getCellType().name());
                    }
                case NUMERIC:
                    if (cell.getCellType() == CellType.NUMERIC) {
                        return cell.getNumericCellValue();
                    } else if (cell.getCellType() == CellType.STRING) {
                        try {
                            return Double.parseDouble(cell.getStringCellValue().trim());
                        } catch (NumberFormatException e) {
                            throw new IllegalArgumentException("Column '" + columnName + "': Expected NUMERIC, but string '" + cell.getStringCellValue() + "' is not a valid number.");
                        }
                    } else {
                        throw new IllegalArgumentException("Column '" + columnName + "': Expected NUMERIC, but found " + cell.getCellType().name());
                    }
                case INTEGER:
                    if (cell.getCellType() == CellType.NUMERIC) {
                        double value = cell.getNumericCellValue();
                        if (value == Math.floor(value)) { // Check if it's an integer
                            return (int) value;
                        } else {
                            throw new IllegalArgumentException("Column '" + columnName + "': Expected INTEGER, but found decimal value " + value);
                        }
                    } else if (cell.getCellType() == CellType.STRING) {
                        try {
                            return Integer.parseInt(cell.getStringCellValue().trim());
                        } catch (NumberFormatException e) {
                            throw new IllegalArgumentException("Column '" + columnName + "': Expected INTEGER, but string '" + cell.getStringCellValue() + "' is not a valid integer.");
                        }
                    } else {
                        throw new IllegalArgumentException("Column '" + columnName + "': Expected INTEGER, but found " + cell.getCellType().name());
                    }
                default:
                    throw new IllegalArgumentException("Unsupported data type: " + expectedType);
            }
        } catch (IllegalStateException e) {
            throw new IllegalArgumentException("Column '" + columnName + "': Data type mismatch. Expected " + expectedType.name() + ", but cell type is " + cell.getCellType().name() + ". Error: " + e.getMessage());
        }
    }
}
