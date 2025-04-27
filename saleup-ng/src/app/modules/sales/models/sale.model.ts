import { Customer } from "@module/customers/models/customer.model";
import { Product } from "@module/products/models/product.model";

export interface Sale {
    saleId: number;
    saleItems: SaleItem[];
    customer: Customer;
    subTotal: number;
    grandTotal: number;
    discount: number;
    barcode: string;
    partiallyReturned: boolean;
    totallyReturned: boolean;
    createdAt: Date;
    createdBy: string;
}

export interface SaleItem {
    saleItemId: number;
    product: Product;
    quantity: number;
    returnedQuantity: number;
    unitPrice: number;
    unitCost: number;
    subTotal: number;
}