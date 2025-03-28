import { Product } from "@module/products/models/product.model";

export interface BestSellingProductResponse {
    product: Product,
    totalSold: number
}