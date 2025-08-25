package com.anaselrayan.springcashiero.shared.filter;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Predicate;

public class FilterUtils {

    public static Predicate getTextPredicate(Expression<String> expression, String givenVal, FilterOperator oper, CriteriaBuilder cb) {
        return switch (oper) {
            case STARTS_WITH -> cb.like(expression, givenVal.toLowerCase() + "%");
            case CONTAINS -> cb.like(expression, "%" + givenVal.toLowerCase() + "%");
            case ENDS_WITH -> cb.like(expression, "%" + givenVal.toLowerCase());
            default -> throw new NotSupportedFilterCriteriaException(oper.getValue());
        };
    }

    public static Predicate getNumericPredicate(Expression<Integer> expression, int givenVal1, int givenVal2, FilterOperator oper, CriteriaBuilder cb) {
        return switch (oper) {
            case EQUALS ->  cb.equal(expression, givenVal1);
            case GREATER_THAN -> cb.greaterThan(expression, givenVal1);
            case LESS_THAN -> cb.lessThan(expression, givenVal1);
            case BETWEEN -> cb.between(expression, givenVal1, givenVal2);
            default -> throw new NotSupportedFilterCriteriaException(oper.getValue());
        };
    }

}
