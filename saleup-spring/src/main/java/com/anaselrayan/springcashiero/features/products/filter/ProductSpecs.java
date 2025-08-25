package com.anaselrayan.springcashiero.features.products.filter;

import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.shared.filter.FilterOperator;
import com.anaselrayan.springcashiero.shared.filter.FilterUtils;
import com.anaselrayan.springcashiero.shared.filter.NotSupportedFilterCriteriaException;
import jakarta.persistence.criteria.Expression;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecs {

    public static Specification<Product> nameSpec(String givenName, FilterOperator oper) throws NotSupportedFilterCriteriaException {
        return (root, query, cb) -> {
            var productName = cb.lower(root.get("productBasic").get("productName"));
            return FilterUtils.getTextPredicate(productName, givenName, oper, cb);
        };
    }

    public static Specification<Product> barcodeSpec(String givenBarcode, FilterOperator oper) throws NotSupportedFilterCriteriaException {
        return (root, query, cb) -> {
            Expression<String> productBarcode = cb.lower(root.get("productBasic").get("barcode"));
            return FilterUtils.getTextPredicate(productBarcode, givenBarcode, oper, cb);
        };
    }

    public static Specification<Product> qtySpec(int from, int to, FilterOperator oper) throws NotSupportedFilterCriteriaException {
        return (root, query, cb) -> {
            Expression<Integer> productQty = root.get("productBasic").get("quantity");
            return FilterUtils.getNumericPredicate(productQty, from, to, oper, cb);
        };
    }

    public static Specification<Product> costSpec(int from, int to, FilterOperator oper) throws NotSupportedFilterCriteriaException {
        return (root, query, cb) -> {
            Expression<Integer> costPrice = root.get("productPrice").get("costPrice");
            return FilterUtils.getNumericPredicate(costPrice, from, to, oper, cb);
        };
    }

    public static Specification<Product> sellingPriceSpec(int from, int to, FilterOperator oper) throws NotSupportedFilterCriteriaException {
        return (root, query, cb) -> {
            Expression<Integer> sellingPrice = root.get("productPrice").get("sellingPrice");
            return FilterUtils.getNumericPredicate(sellingPrice, from, to, oper, cb);
        };
    }

}
