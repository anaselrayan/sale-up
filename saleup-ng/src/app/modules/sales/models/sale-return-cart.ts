import { Sale, SaleItem } from "./sale.model";

export class SaleReturnCart {
    sale!: Sale;
    returnItems!: SaleReturnCartItem[];
    subTotal!: number;
    feesAmount!: number;
    totalAmount!: number;

    constructor(sale: Sale) {
        this.sale = sale;
        this.feesAmount = 0;
        this.subTotal = 0;
        this.totalAmount = 0;
        this.returnItems = sale.saleItems.map(item => new SaleReturnCartItem(item, 0))
    }

    fillCart(sale: Sale) {
        this.returnItems = sale.saleItems.map(item => new SaleReturnCartItem(item, (item.quantity - item.returnedQuantity)))
        this.updateAmount();
    }

    increaseItemQty(item: SaleReturnCartItem) {
        const target = this.returnItems.find(ri => ri.saleItem.saleItemId == item.saleItem.saleItemId)
        if (target && target.quantity < (target.saleItem.quantity - target.saleItem.returnedQuantity)) {
            target.quantity++;
            this.updateAmount();
        }
    }

    decreaseItemQty(item: SaleReturnCartItem) {
        const target = this.returnItems.find(ri => ri.saleItem.saleItemId == item.saleItem.saleItemId)
        if (target && target.quantity > 0) {
            target.quantity--;
            this.updateAmount();
        }
    }

    updateAmount() {
        let total = 0;
        this.returnItems.forEach(ri => {
            total += (ri.quantity * ri.saleItem.unitPrice);
        })
        this.subTotal = total;
        this.totalAmount = this.subTotal - this.feesAmount;
    }
}

export class SaleReturnCartItem {
    saleItem!: SaleItem;
    quantity!: number;

    constructor(si: SaleItem, initQty: number) {
        this.saleItem = si;
        this.quantity = initQty;
    }
}