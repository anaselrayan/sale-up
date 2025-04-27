import { environment } from "@env/environment";
import { DiscountType, Product, ProductBrand, ProductCategory, ProductImage } from "@module/products/models/product.model";

export class ProductUtils {

    public static getFirstImageSrc(product: Product) {
        if (product.basicDetails.productImages && product.basicDetails.productImages.length) {
            const primary = product.basicDetails.productImages.find(i => i.isPrimary)
            const fileName = primary ? primary.fileName : product.basicDetails.productImages[0].fileName
            return environment.apiBaseUrl + '/product-image/file/' + product.productId + '/' + fileName
        }
        return 'assets/images/products/placeholder.jpg';
    }

    public static getImageSrc(productId: number, image: ProductImage) {
        return environment.apiBaseUrl + '/product-image/file/' + productId + '/' + image.fileName;
    }

    public static getCategoryImageSrc(category: ProductCategory) {
        if (category.imageUrl)
            return environment.apiBaseUrl + '/product-image/file/category/' + category.productCategoryId + '/' + category.imageUrl;
        return 'assets/images/products/placeholder.jpg';
    }

    public static getBrandImageSrc(brand: ProductBrand) {
        if (brand.imageUrl)
            return environment.apiBaseUrl + '/product-image/file/brand/' + brand.productBrandId + '/' + brand.imageUrl;
        return 'assets/images/products/placeholder.jpg';
    }

    public static getQuantitySeverity(p: Product) {
        if (p.basicDetails.quantity > p.basicDetails.lowStockPoint) {
            return 'success'
        }
        else if (p.basicDetails.quantity <= p.basicDetails.lowStockPoint) {
            return 'warn';
        }
        else if (p.basicDetails.quantity == 0) {
            return 'danger';
        }
        else
            return 'info';
    }

    public static getDiscountLabel(product: Product) {
        if (product.priceDetails.discountDisabled)
          return null;
    
        if (product.priceDetails.discountType === DiscountType.FIXED) {
          return product.priceDetails.discountAmount + '$';
        }
        
        if (product.priceDetails.discountType === DiscountType.PERCENT) {
          return product.priceDetails.discountAmount + '%';
        }
        return null;
    }

}