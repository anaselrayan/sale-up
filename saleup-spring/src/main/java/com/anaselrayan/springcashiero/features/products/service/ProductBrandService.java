package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.converter.ProductBrandConverter;
import com.anaselrayan.springcashiero.features.products.dto.ProductBrandDTO;
import com.anaselrayan.springcashiero.features.products.model.ProductBrand;
import com.anaselrayan.springcashiero.features.products.repository.ProductBrandRepository;
import com.anaselrayan.springcashiero.features.products.request.ProductBrandRequest;
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

import static com.anaselrayan.springcashiero.core.constatnts.Upload.UPLOAD_BRANDS_IMAGE_DIR;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductBrandService {

    public final ProductBrandRepository productBrandRepository;
    private final UploadService uploadService;

    public ApiResponse createProductBrand(ProductBrandRequest request) {
        try {
            ProductBrand toSave = ProductBrand.builder()
                    .name(request.getName())
                    .description(request.getDescription())
                    .build();
            ProductBrand saved = productBrandRepository.save(toSave);
            String imageUrl = uploadBrandImage(request.getImage(), saved);
            saved.setImageUrl(imageUrl);
            productBrandRepository.save(saved);
            return new ApiResponse(saved, StatusCode.CREATED);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse updateProductBrand(ProductBrandRequest req) {
        try {
            Long catId = req.getProductBrandId();
            if (catId == null || !productBrandRepository.existsById(catId)) {
                return new ApiResponse(false, StatusCode.BAD_REQUEST, "Invalid product brand id");
            }
            ProductBrand brandToUpdate = productBrandRepository.findById(catId).orElseThrow();
            brandToUpdate.setName(req.getName());
            brandToUpdate.setDescription(req.getDescription());
            if (req.getImage() != null && !req.getImage().isEmpty()) {
                if (brandToUpdate.getImageUrl() != null) {
                    String oldPath = UPLOAD_BRANDS_IMAGE_DIR + "/" + catId + "/" + brandToUpdate.getImageUrl();
                    Files.deleteIfExists(Paths.get(oldPath));
                }
                String imagePath = uploadBrandImage(req.getImage(), brandToUpdate);
                brandToUpdate.setImageUrl(imagePath);
            }
            ProductBrand saved = productBrandRepository.save(brandToUpdate);
            return new ApiResponse(ProductBrandConverter.convert(saved), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getBrandsPage(PageRequest pr) {
        try {
            Page<ProductBrand> productPage = productBrandRepository.findAll(pr);
            PageImpl<ProductBrandDTO> dtoPage = new PageImpl<>(
                    productPage.getContent().stream().map(ProductBrandConverter::convert).toList(),
                    productPage.getPageable(),
                    productPage.getTotalElements()
            );
            return new ApiResponse(dtoPage, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getAllBrands() {
        try {
            List<ProductBrandDTO> brandList = productBrandRepository.findAll()
                    .stream().map(ProductBrandConverter::convert).toList();
            return new ApiResponse(brandList, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse getBrandById(Long id) {
        try {
            ProductBrand brand = productBrandRepository.findById(id).orElseThrow();
            return new ApiResponse(ProductBrandConverter.convert(brand), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public String uploadBrandImage(MultipartFile file, ProductBrand brand) {
        if (file != null && !file.isEmpty()) {
            String path = UPLOAD_BRANDS_IMAGE_DIR + "/" + brand.getId();
            UploadFileResponse res = uploadService.uploadFile(
                    new UploadFileRequest(file, file.getOriginalFilename(), path)
            );
            return res.fileName;
        }
        return null;
    }

    public ApiResponse deleteBrand(Long brandId) {
        try {
            ProductBrand brand = productBrandRepository.findById(brandId).orElseThrow();
            brand.setDeleted(true);
            productBrandRepository.save(brand);
            return new ApiResponse(true, StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }
}
