package com.anaselrayan.springcashiero.shared.filter;

public enum FilterOperator {
    // Text operators
    EQUALS("equals"),
    NOT_EQUALS("notEquals"),
    STARTS_WITH("startsWith"),
    ENDS_WITH("endsWith"),
    CONTAINS("contains"),

    // Numeric operators
    GREATER_THAN("greaterThan"),
    LESS_THAN("lessThan"),
    GREATER_THAN_OR_EQUAL("greaterThanOrEqual"),
    LESS_THAN_OR_EQUAL("lessThanOrEqual"),
    BETWEEN("between"),

    // Multi-choice operators
    IN("in"),
    NOT_IN("notIn"),

    // Date operators
    BEFORE("before"),
    AFTER("after"),
    DATE_BETWEEN("dateBetween");

    private final String value;

    FilterOperator(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static FilterOperator fromValue(String value) {
        for (FilterOperator op : values()) {
            if (op.value.equals(value)) {
                return op;
            }
        }
        throw new IllegalArgumentException("Unknown operator: " + value);
    }
}