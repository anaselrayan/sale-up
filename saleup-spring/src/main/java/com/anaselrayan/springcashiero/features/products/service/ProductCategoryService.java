package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import com.anaselrayan.springcashiero.infrastructure.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.converter.ProductCategoryConverter;
import com.anaselrayan.springcashiero.features.products.dto.ProductCategoryDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductCategory;
import com.anaselrayan.springcashiero.features.products.repository.ProductCategoryRepository;
import com.anaselrayan.springcashiero.features.products.request.ProductCategoryRequest;
import com.anaselrayan.springcashiero.shared.UploadFileRequest;
import com.anaselrayan.springcashiero.shared.UploadFileResponse;
import com.anaselrayan.springcashiero.shared.UploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Upload.UPLOAD_CATEGORY_IMAGE_DIR;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    private final UploadService uploadService;

    public ApiResponse createProductCategory(ProductCategoryRequest request) {
        try {
            ProductCategory toSave = ProductCategory.builder()
                    .name(request.getName())
                    .description(request.getDescription())
                    .build();
            if (request.getProductCategoryId() != null)
                toSave.setParentCategory(productCategoryRepository.getReferenceById(request.getParentCategoryId()));
            ProductCategory saved = productCategoryRepository.save(toSave);
            String imageUrl = uploadCategoryImage(request.getImage(), saved);
            saved.setImageUrl(imageUrl);
            productCategoryRepository.save(saved);
            return new ApiResponse(ProductCategoryConverter.convert(saved), StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse updateProductCategory(ProductCategoryRequest req) {
        try {
            Long catId = req.getProductCategoryId();
            if (catId == null || !productCategoryRepository.existsById(catId)) {
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid product category id");
            }
            ProductCategory categoryToUpdate = productCategoryRepository.findById(catId).orElseThrow();
            categoryToUpdate.setName(req.getName());
            categoryToUpdate.setDescription(req.getDescription());
            if (req.getImage() != null && !req.getImage().isEmpty()) {
                if (categoryToUpdate.getImageUrl() != null) {
                    String oldPath = UPLOAD_CATEGORY_IMAGE_DIR + "/" + catId + "/" + categoryToUpdate.getImageUrl();
                    Files.deleteIfExists(Paths.get(oldPath));
                }
                String imagePath = uploadCategoryImage(req.getImage(), categoryToUpdate);
                categoryToUpdate.setImageUrl(imagePath);
            }
            ProductCategory saved = productCategoryRepository.save(categoryToUpdate);
            return new ApiResponse(ProductCategoryConverter.convert(saved), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getCategoriesPage(PageRequest pr) {
        try {
            Page<ProductCategory> productPage = productCategoryRepository.findAll(pr);
            PageImpl<ProductCategoryDTO> dtoPage = new PageImpl<>(
                    productPage.getContent().stream().map(ProductCategoryConverter::convert).toList(),
                    productPage.getPageable(),
                    productPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getAllCategories() {
        try {
            List<ProductCategoryDTO> categoryList = productCategoryRepository.findAll()
                    .stream().map(ProductCategoryConverter::convert).toList();
            return new ApiResponse(categoryList, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getCategoryById(Long id) {
        try {
            ProductCategory category = productCategoryRepository.findById(id).orElseThrow();
            return new ApiResponse(ProductCategoryConverter.convert(category), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public String uploadCategoryImage(MultipartFile file, ProductCategory category) {
        if (file != null && !file.isEmpty()) {
            String path = UPLOAD_CATEGORY_IMAGE_DIR + "/" + category.getId();
            UploadFileResponse res = uploadService.uploadFile(
                    new UploadFileRequest(file, file.getOriginalFilename(), path)
            );
            return res.fileName;
        }
        return null;
    }

    public ApiResponse deleteCategory(Long catId) {
        try {
            ProductCategory category = productCategoryRepository.findById(catId).orElseThrow();
            category.setDeleted(true);
            productCategoryRepository.save(category);
            return new ApiResponse(true, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

}
