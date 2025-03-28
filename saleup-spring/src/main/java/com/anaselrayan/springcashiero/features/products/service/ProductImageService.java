package com.anaselrayan.springcashiero.features.products.service;

import com.anaselrayan.springcashiero.core.constatnts.Upload;
import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.core.response.StatusCode;
import com.anaselrayan.springcashiero.features.products.converter.ProductImageConverter;
import com.anaselrayan.springcashiero.features.products.model.Product;
import com.anaselrayan.springcashiero.features.products.model.ProductBasic;
import com.anaselrayan.springcashiero.features.products.model.ProductImage;
import com.anaselrayan.springcashiero.features.products.repository.ProductBasicRepository;
import com.anaselrayan.springcashiero.features.products.repository.ProductImageRepository;
import com.anaselrayan.springcashiero.features.products.repository.ProductRepository;
import com.anaselrayan.springcashiero.features.products.request.ProductImagesRequest;
import com.anaselrayan.springcashiero.shared.UploadFileRequest;
import com.anaselrayan.springcashiero.shared.UploadFileResponse;
import com.anaselrayan.springcashiero.shared.UploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static com.anaselrayan.springcashiero.core.constatnts.Upload.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductImageService {

    private final ProductImageRepository productImageRepository;
    private final ProductBasicRepository productBasicRepository;
    private final ProductRepository productRepository;
    private final UploadService uploadService;

    public ResponseEntity<Resource> getProductImageResource(Long productId, String fileName) {
        return uploadService.downloadResource(UPLOAD_PRODUCT_IMAGE_DIR + "/" + productId, fileName);
    }

    public ResponseEntity<Resource> getCategoryImageResource(Long categoryId, String fileName) {
        return uploadService.downloadResource(UPLOAD_CATEGORY_IMAGE_DIR + "/" + categoryId, fileName);
    }

    public ResponseEntity<Resource> getBrandImageResource(Long brandId, String fileName) {
        return uploadService.downloadResource(UPLOAD_BRANDS_IMAGE_DIR + "/" + brandId, fileName);
    }

    public ApiResponse setPrimaryImage(Long imageId) {
        try {
            ProductImage image = productImageRepository.findById(imageId).orElseThrow();
            ProductBasic basic = productBasicRepository.findById(image.getProductBasic().getId()).orElseThrow();
            if (basic.getProductImages() != null) {
                basic.getProductImages().forEach(
                        i -> {
                            i.setIsPrimary(false);
                            productImageRepository.save(i);
                        }
                );
            }
            image.setIsPrimary(true);
            ProductImage saved = productImageRepository.save(image);
            return new ApiResponse(ProductImageConverter.convert(saved), StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse deleteProductImage(Long imageId) {
        try {
            ProductImage image = productImageRepository.findById(imageId).orElseThrow();
            Path path = Paths.get(image.getFilePath());
            Files.deleteIfExists(path);
            productImageRepository.delete(image);
            return new ApiResponse("success", StatusCode.OK);
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    public ApiResponse addProductImages(ProductImagesRequest req) {
        try {
            Product product = productRepository.getReferenceById(req.getProductId());
            int existedImagesCount = product.getProductBasic().getProductImages() != null ? product.getProductBasic().getProductImages().size() : 0;
            int allowed = Upload.MAX_PRODUCT_IMAGES - existedImagesCount;
            if (!req.getFiles().isEmpty() && req.getFiles().size() < allowed) {
                for (MultipartFile image : req.getFiles()) {
                    if (image.getSize() > Upload.MAX_IMAGE_SIZE) {
                        return new ApiResponse(false, StatusCode.BAD_REQUEST, "Image too large, " + image.getSize() + " bytes");
                    }
                }
                this.createProductImages(req.getFiles(), product);
                return new ApiResponse("success", StatusCode.OK);
            }
            else return new ApiResponse(false, StatusCode.BAD_REQUEST, "You can only add at most " + allowed + " images for this product");
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return new ApiResponse(false, StatusCode.INTERNAL_ERROR, ex.getMessage());
        }
    }

    private void createProductImages(List<MultipartFile> files, Product product) {
        if (files == null || files.isEmpty())
            return;

        String path = Upload.UPLOAD_PRODUCT_IMAGE_DIR + "/" + product.getId();
        int order = 0;
        for (MultipartFile file : files) {
            String filename = file.getOriginalFilename();
            UploadFileResponse res = uploadService.uploadFile(
                    new UploadFileRequest(file, filename, path)
            );
            if (res.success) {
                ProductImage productImage = ProductImage.builder()
                        .filePath(res.filePath)
                        .fileName(filename)
                        .imageOrder(order++)
                        .productBasic(product.getProductBasic())
                        .build();
                productImageRepository.save(productImage);
            }
        }
    }

}
