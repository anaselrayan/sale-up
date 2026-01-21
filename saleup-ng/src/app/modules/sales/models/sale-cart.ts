import { Customer } from "@module/customers/models/customer.model";
import { Product } from "@module/products/models/product.model";

export class SaleCart {
    customer?: Customer;
    items: CartItem[] = [];
    subTotal = 0;
    discount = 0;
    deliveryAmount = 0;
    grandTotal = 0;
    notes?: string;

    empty() {
        this.items = [];
        this.subTotal = 0;
        this.discount = 0;
        this.deliveryAmount = 0;
        this.grandTotal = 0;
        this.notes = undefined;
    }
}

export class CartItem {
    saleItemId?: number;
    product?: Product;
    quantity?: number;

    constructor(product: Product, quantity: number);
    constructor();

    constructor(product?: Product, quantity?: number) {
        this.product = product;
        this.quantity = quantity;
    }
}