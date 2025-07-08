package com.anaselrayan.springcashiero.features.products.imports;

import com.anaselrayan.springcashiero.shared.DataType;
import com.anaselrayan.springcashiero.shared.ImportColumnSpec;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductImportConfig {

    public List<ImportColumnSpec> getImportSpec() {
        return List.of(
                new ImportColumnSpec("name", DataType.TEXT, false),
                new ImportColumnSpec("barcode", DataType.TEXT, false),
                new ImportColumnSpec("cost", DataType.NUMERIC, false),
                new ImportColumnSpec("price", DataType.NUMERIC, false),
                new ImportColumnSpec("quantity", DataType.INTEGER, false),
                new ImportColumnSpec("description", DataType.TEXT, true)
        );
    }

}
