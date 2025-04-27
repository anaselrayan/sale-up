import { Sale, SaleItem } from "./sale.model";

export interface SaleReturn {
    saleReturnId: number,
    sale: Sale,
    barcode: string;
    returnItems: SaleReturnItem[],
    subTotal: number,
    feesAmount: number,
    totalAmount: number,
    returnDate: Date,
    returnedBy: string
}

export interface SaleReturnItem {
    returnItemId: number,
    saleItem: SaleItem,
    quantity: number,
    subTotal: number
}