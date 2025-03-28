export class SaleRequest {
    saleId?: number;
    customerId?: number;
    saleItems?: SaleItemRequest[];
    subTotal?: number;
    grandTotal?: number;
    discount?: number;
}

export class SaleItemRequest {
    saleItemId?: number;
    saleId?: number;
    productId?: number;
    quantity?: number;
}