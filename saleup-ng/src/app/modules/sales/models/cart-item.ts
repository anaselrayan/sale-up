import { Product } from "@module/products/models/product.model";

export class CartItem {
    product?: Product;
    quantity?: number;
}