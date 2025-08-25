package com.anaselrayan.springcashiero.features.products.filter;

import com.anaselrayan.springcashiero.features.products.converter.ProductConverter;
import com.anaselrayan.springcashiero.features.products.dto.ProductDTO;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.shared.filter.FilterCriteria;
import com.anaselrayan.springcashiero.shared.filter.FilterOperator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductFilterService {

    private final ProductRepository productRepository;

    public ApiResponse findByCriteria(FilterCriteria criteria, Pageable pageable) {
        Specification<Product> spec = Specification.where(null);

        var nameFilter = criteria.getFilterOn("name");
        if (nameFilter.isPresent()) {
            var operator = FilterOperator.fromValue(nameFilter.get().getOperator());
            spec = spec.and(ProductSpecs.nameSpec((String) nameFilter.get().getValue1(), operator));
        }

        var barcodeFilter = criteria.getFilterOn("barcode");
        if (barcodeFilter.isPresent()) {
            var operator = FilterOperator.fromValue(barcodeFilter.get().getOperator());
            spec = spec.and(ProductSpecs.barcodeSpec((String) barcodeFilter.get().getValue1(), operator));
        }

        var qtyFilter = criteria.getFilterOn("quantity");
        if (qtyFilter.isPresent()) {
            var operator = FilterOperator.fromValue(qtyFilter.get().getOperator());
            spec = spec.and(ProductSpecs.qtySpec((int) qtyFilter.get().getValue1(), (int) qtyFilter.get().getValue2(), operator));
        }

        var costFilter = criteria.getFilterOn("cost");
        if (costFilter.isPresent()) {
            var operator = FilterOperator.fromValue(costFilter.get().getOperator());
            spec = spec.and(ProductSpecs.costSpec((int) costFilter.get().getValue1(), (int) costFilter.get().getValue2(), operator));
        }

        var priceFilter = criteria.getFilterOn("price");
        if (priceFilter.isPresent()) {
            var operator = FilterOperator.fromValue(priceFilter.get().getOperator());
            spec = spec.and(ProductSpecs.sellingPriceSpec((int) priceFilter.get().getValue1(), (int) priceFilter.get().getValue2(), operator));
        }

        Page<Product> productPage = productRepository.findAll(spec, pageable);
        PageImpl<ProductDTO> dtoPage = new PageImpl<>(
                productPage.getContent().stream().map(ProductConverter::convert).toList(),
                productPage.getPageable(),
                productPage.getTotalElements()
        );
        return new ApiResponse(dtoPage, StatusCode.OK);
    }

}
