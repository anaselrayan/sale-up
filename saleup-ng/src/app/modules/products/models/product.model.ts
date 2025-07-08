export interface Product {
    productId: 1,
    basicDetails: ProductBasic,
    priceDetails: ProductPrice
}

export interface ProductBasic {
    productBasicId: 1,
    unitOfMeasure?: ProductUnitOfMeasure,
    productCategory?: ProductCategory,
    productStatus?: ProductStatus,
    productBrand?: ProductBrand,
    productImages?: ProductImage[],
    productName: string,
    barcode: string,
    description: string,
    lowStockPoint: 5,
    quantity: number
}

export interface ProductPrice {
    productPriceId: number,
    costPrice: number,
    sellingPrice: number,
    discountAmount: number,
    discountType: DiscountType,
    discountDisabled: boolean,
    discountRangeActive: boolean,
    discountStartDate: Date,
    discountEndDate: Date,
    priceWithDiscount: number
}

export interface ProductCategory {
    productCategoryId: number,
    name: string,
    description: string,
    imageUrl: string;
    parentCategory: ProductCategory
}

export interface ProductUnitOfMeasure {
    unitOfMeasureId: number,
    code: string,
    name: string
}

export interface ProductImage {
    productImageId: number,
    fileName: string,
    filePath: string,
    imageOrder: number,
    isPrimary: boolean
}

export interface ProductStatus {
    productStatusId: number,
    name: string,
    description: string,
}

export interface ProductBrand {
    productBrandId: number,
    name: string,
    description: string,
    imageUrl: string
}

export enum DiscountType {
    FIXED = 'FIXED', 
    PERCENT = 'PERCENT'
}

export interface ProductStatisticsSummary {
    totalCost: number,
    totalRevenue: number,
    totalSoldAmount: number,
    totalSoldUnits: number
}

export interface ProductImportColumnSpec {
    columnName: string,
    dataType: string,
    required: boolean
}