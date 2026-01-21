export class SaleRequest {
    saleId?: number;
    customerId?: number;
    saleItems?: SaleItemRequest[];
    subTotal?: number;
    discount?: number;
    deliveryAmount?: number;
    grandTotal?: number;
    notes?: string;
}
export class SaleItemRequest {
    saleItemId?: number;
    saleId?: number;
    productId?: number;
    quantity?: number;
}