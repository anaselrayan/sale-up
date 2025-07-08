package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.converter.ProductUnitOfMeasureConverter;
import com.anaselrayan.springcashiero.features.products.dto.ProductUnitOfMeasureDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductUnitOfMeasure;
import com.anaselrayan.springcashiero.features.products.repository.ProductUnitOfMeasureRepository;
import com.anaselrayan.springcashiero.features.products.request.ProductUnitOfMeasureRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductUnitOfMeasureService {

    private final ProductUnitOfMeasureRepository productUnitOfMeasureRepository;

    public ApiResponse createProductUnit(ProductUnitOfMeasureRequest request) {
        try {
            ProductUnitOfMeasure toSave = ProductUnitOfMeasure.builder()
                    .code(request.getCode())
                    .name(request.getName())
                    .build();
            ProductUnitOfMeasure saved = productUnitOfMeasureRepository.save(toSave);
            return new ApiResponse(ProductUnitOfMeasureConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse updateProductUnit(ProductUnitOfMeasureRequest req) {
        try {
            Long catId = req.getUnitOfMeasureId();
            if (catId == null || !productUnitOfMeasureRepository.existsById(catId)) {
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid product unit id");
            }
            ProductUnitOfMeasure unitToUpdate = productUnitOfMeasureRepository.findById(catId).orElseThrow();
            unitToUpdate.setCode(req.getCode());
            unitToUpdate.setName(req.getName());
            ProductUnitOfMeasure saved = productUnitOfMeasureRepository.save(unitToUpdate);
            return new ApiResponse(ProductUnitOfMeasureConverter.convert(saved), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getAllProductUnits() {
        try {
            List<ProductUnitOfMeasureDTO> units = productUnitOfMeasureRepository.findAll()
                    .stream().map(ProductUnitOfMeasureConverter::convert).toList();
            return new ApiResponse(units, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
