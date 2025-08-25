package com.anaselrayan.springcashiero.shared.filter;

import lombok.Data;

@Data
public class FilterFieldCriteria {
    private String fieldName;
    private Object value1;
    private Object value2;
    private String operator;
}
