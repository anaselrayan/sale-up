package com.anaselrayan.springcashiero.shared;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ImportColumnSpec {
    private String columnName;
    private DataType dataType;
    private boolean optional;
}
