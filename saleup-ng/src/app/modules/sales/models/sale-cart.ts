import { Customer } from "@module/customers/models/customer.model";
import { Product } from "@module/products/models/product.model";

export class SaleCart {
    customer?: Customer;
    items?: CartItem[];
    subTotal?: number;
    discount?: number;
    grandTotal?: number;

    constructor() {
        this.items = [];
        this.subTotal = 0.0;
        this.discount = 0.0;
        this.grandTotal = 0.0;
    }

    public empty() {
        this.items = [];
        this.subTotal = 0.0;
        this.discount = 0.0;
        this.grandTotal = 0.0;
    }
}

export class CartItem {
    product?: Product;
    quantity?: number;
}