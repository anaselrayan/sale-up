package com.anaselrayan.springcashiero.shared.filter;

import lombok.Data;

import java.util.List;
import java.util.Optional;

@Data
public class FilterCriteria {
    
    private List<FilterFieldCriteria> filterFields;
    
    public Optional<FilterFieldCriteria> getFilterOn(String field) {
        return filterFields.stream().filter(f -> f.getFieldName().equals(field)).findFirst();
    }
    
}

