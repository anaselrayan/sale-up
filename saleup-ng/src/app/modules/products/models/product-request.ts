import { DiscountType } from "./product.model";

export class ProductRequest {
  productId?: number;
  productCategoryId?: number;
  unitOfMeasureId?: number;
  productStatusId?: number;
  productBrandId?: number;
  imageFiles?: File[];
  productName?: string;
  barcode?: string;
  description?: string;
  lowStockPoint?: number;
  quantity?: number;
  costPrice?: number;
  sellingPrice?: number
}

export class ProductBrandRequest {
  productBrandId?: number;
  name?: string;
  description?: string;
}

export class ProductCategoryRequest {
  productCategoryId?: number;
  name?: string;
  description?: string;
}

export class ProductUnitRequest {
  unitOfMeasureId?: number;
  code?: string;
  name?: string;
}

export class ProductDiscountRequest {
  productId!: number;
  discountActive!: boolean;
  discountType!: DiscountType;
  discountAmount!: number;
  discountStartDate!: Date;
  discountEndDate!: Date;
}