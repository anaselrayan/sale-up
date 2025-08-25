package com.anaselrayan.springcashiero.shared.filter;

import org.springframework.stereotype.Service;

@Service
public class FilterCriteriaValidator {

    public void validate(FilterCriteria filterCriteria) throws Exception {
        filterCriteria.getFilterFields().forEach(field -> {

        });
    }

}
