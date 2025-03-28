package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.core.constatnts.ActionType;
import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.converter.ProductConverter;
import com.anaselrayan.springcashiero.features.products.dto.ProductDTO;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.model.ProductBasic;
import com.anaselrayan.springcashiero.features.products.model.ProductPrice;
import com.anaselrayan.springcashiero.features.products.repository.*;
import com.anaselrayan.springcashiero.features.products.request.ProductDiscountRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductImagesRequest;
import com.anaselrayan.springcashiero.features.products.request.ProductRequest;
import com.anaselrayan.springcashiero.features.products.utils.ProductUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductBasicRepository productBasicRepository;
    private final ProductPriceRepository productPriceRepository;
    private final ProductStatusRepository productStatusRepository;
    private final ProductBrandRepository productBrandRepository;
    private final ProductCategoryRepository productCategoryRepository;
    private final ProductUnitOfMeasureRepository productUnitOfMeasureRepository;
    private final ProductImageService productImageService;

    public ApiResponse createProduct(ProductRequest request) {
        ApiResponse validationRes = validateProductRequest(request, ActionType.INSERT);
        if (!validationRes.getSuccess())
            return validationRes;

        ProductBasic productBasicReq = ProductBasic.builder()
                .productName(request.getProductName())
                .description(request.getDescription())
                .barcode(request.getBarcode())
                .lowStockPoint(request.getLowStockPoint())
                .quantity(request.getQuantity())
                .build();
        if (request.getProductCategoryId() != null)
            productBasicReq.setProductCategory(productCategoryRepository.getReferenceById(request.getProductCategoryId()));
        if (request.getUnitOfMeasureId() != null)
            productBasicReq.setUnitOfMeasure(productUnitOfMeasureRepository.getReferenceById(request.getUnitOfMeasureId()));
        if (request.getProductStatusId() != null)
            productBasicReq.setProductStatus(productStatusRepository.getReferenceById(request.getProductStatusId()));
        if (request.getProductBrandId() != null)
            productBasicReq.setProductBrand(productBrandRepository.getReferenceById(request.getProductBrandId()));

        ProductPrice productPriceReq = ProductPrice.builder()
                .costPrice(request.getCostPrice())
                .sellingPrice(request.getSellingPrice())
                .build();

        ProductBasic savedProductBasic = productBasicRepository.save(productBasicReq);
        ProductPrice savedProductPrice = productPriceRepository.save(productPriceReq);
        Product productReq = Product.builder()
                .productBasic(savedProductBasic)
                .productPrice(savedProductPrice).build();

        Product savedProduct = productRepository.save(productReq);
        productImageService.addProductImages(new ProductImagesRequest(savedProduct.getId(), request.getImageFiles()));
        return new ApiResponse(ProductConverter.convert(savedProduct), StatusCode.CREATED);
    }

    public ApiResponse updateProduct(ProductRequest request) {
        try {
            ApiResponse validationRes = validateProductRequest(request, ActionType.UPDATE);
            if (!validationRes.getSuccess())
                return validationRes;

            Product productToUpdate = productRepository.findById(request.getProductId()).orElseThrow();
            productToUpdate.getProductBasic().setProductName(request.getProductName());
            productToUpdate.getProductBasic().setDescription(request.getDescription());
            productToUpdate.getProductBasic().setBarcode(request.getBarcode());
            productToUpdate.getProductBasic().setLowStockPoint(request.getLowStockPoint());
            productToUpdate.getProductBasic().setQuantity(request.getQuantity());

            if (request.getProductCategoryId() != null)
                productToUpdate.getProductBasic().setProductCategory(productCategoryRepository.getReferenceById(request.getProductCategoryId()));
            else productToUpdate.getProductBasic().setProductCategory(null);

            if (request.getUnitOfMeasureId() != null)
                productToUpdate.getProductBasic().setUnitOfMeasure(productUnitOfMeasureRepository.getReferenceById(request.getUnitOfMeasureId()));
            else productToUpdate.getProductBasic().setUnitOfMeasure(null);

            if (request.getProductStatusId() != null)
                productToUpdate.getProductBasic().setProductStatus(productStatusRepository.getReferenceById(request.getProductStatusId()));
            else productToUpdate.getProductBasic().setProductStatus(null);

            if (request.getProductBrandId() != null)
                productToUpdate.getProductBasic().setProductBrand(productBrandRepository.getReferenceById(request.getProductBrandId()));
            else productToUpdate.getProductBasic().setProductBrand(null);

            productToUpdate.getProductPrice().setCostPrice(request.getCostPrice());
            productToUpdate.getProductPrice().setSellingPrice(request.getSellingPrice());
            productBasicRepository.save(productToUpdate.getProductBasic());
            productPriceRepository.save(productToUpdate.getProductPrice());
            productRepository.save(productToUpdate);
            return new ApiResponse(ProductConverter.convert(productToUpdate), StatusCode.OK);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, e.getMessage());
        }
    }

    public ApiResponse getProductsPage(PageRequest pr) {
        try {
            Page<Product> productPage = productRepository.findAll(pr);
            PageImpl<ProductDTO> dtoPage = new PageImpl<>(
                    productPage.getContent().stream().map(ProductConverter::convert).toList(),
                    productPage.getPageable(),
                    productPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse searchByKeyword(String keyword, PageRequest pr) {
        try {
            Page<Product> productPage = productRepository.findByKeyword(keyword, pr);
            PageImpl<ProductDTO> dtoPage = new PageImpl<>(
                    productPage.getContent().stream().map(ProductConverter::convert).toList(),
                    productPage.getPageable(),
                    productPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }
    public ApiResponse getProductByBarcode(String barcode) {
        try {
            Product product = productRepository.findByProductBasicBarcode(barcode).orElseThrow();
            return new ApiResponse(ProductConverter.convert(product), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getProductById(Long productId) {
        try {
            Product product = productRepository.findById(productId).orElseThrow();
            return new ApiResponse(ProductConverter.convert(product), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    private ApiResponse validateProductRequest(ProductRequest request, ActionType actionType) {
        if (actionType == ActionType.UPDATE) {
            if (request.getProductId() == null || !productRepository.existsById(request.getProductId()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "product id not found");

            Product existedProduct = productRepository.getReferenceById(request.getProductId());
            if (!request.getBarcode().equals(existedProduct.getProductBasic().getBarcode()) &&
                    productRepository.existsByProductBasicBarcode(request.getBarcode())) {
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "barcode already assigned to another product");
            }
        }
        if (actionType == ActionType.INSERT) {
            if (productRepository.existsByProductBasicBarcode(request.getBarcode()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "barcode already assigned to another product");
        }

        if (request.getProductBrandId() != null
                && !productBrandRepository.existsById(request.getProductBrandId()))
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "product brand not found");

        if (request.getUnitOfMeasureId() != null
                && !productUnitOfMeasureRepository.existsById(request.getUnitOfMeasureId()))
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "product unit not found");

        if (request.getProductStatusId() != null
                && !productStatusRepository.existsById(request.getProductStatusId()))
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "product status not found");

        return new ApiResponse(true, StatusCode.OK, "Valid");
    }

    public ApiResponse createProductDiscount(ProductDiscountRequest req) {
        Long productId = req.getProductId();
        if (productId == null || !productRepository.existsById(productId))
            return new ApiResponse(false, StatusCode.BAD_REQUEST, "product doesn't exist");
        try {
            Product product = productRepository.findById(productId).orElseThrow();
            if (!ProductUtils.validDiscountAmount(req.getDiscountAmount(), req.getDiscountType(), product.getProductPrice()))
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid discount amount!");

            product.getProductPrice().setDiscountActive(req.getDiscountActive());
            product.getProductPrice().setDiscountType(req.getDiscountType());
            product.getProductPrice().setDiscountAmount(req.getDiscountAmount());
            product.getProductPrice().setDiscountStartDate(req.getDiscountStartDate());
            product.getProductPrice().setDiscountEndDate(req.getDiscountEndDate());
            Product saved = productRepository.save(product);
            return new ApiResponse(ProductConverter.convert(saved), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
