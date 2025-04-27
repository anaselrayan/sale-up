import { SaleReturnCart, SaleReturnCartItem } from "./sale-return-cart";

export class SaleReturnRequest {
    saleId!: number;
    returnItems!: SaleReturnItemRequest[];
    feesAmount!: number;

    constructor(cart: SaleReturnCart) {
        this.saleId = cart.sale.saleId;
        this.feesAmount = cart.feesAmount;
        this.returnItems = cart.returnItems.filter(ci => ci.quantity > 0).map(ci => new SaleReturnItemRequest(ci))
    }
}

export class SaleReturnItemRequest {
    saleItemId!: number;
    quantity: number;

    constructor(item: SaleReturnCartItem) {
        this.saleItemId = item.saleItem.saleItemId;
        this.quantity = item.quantity;
    }
}