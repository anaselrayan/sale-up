package com.anaselrayan.springcashiero.shared.filter;

public class NotSupportedFilterCriteriaException extends RuntimeException {
    public NotSupportedFilterCriteriaException(String criteria) {
        super("This is filter criteria is not allowed here: " + criteria);
    }
}
