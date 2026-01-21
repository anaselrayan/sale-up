import { Product } from "@module/products/models/product.model";
import { CartItem, SaleCart } from "../models/sale-cart";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SoundUtils } from "src/app/utils/sound.utils";
import { SaleItemRequest, SaleRequest } from "../models/sale-request";
import { SaleItem } from "../models/sale.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    addProductSubject = new Subject<Product>();

    /* =========================
        CART OPERATIONS
    ========================== */

    public addItem(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item) {
            this.increaseQty(product, cart);
        } else {
            this.addNewItem(product, cart);
        }
        SoundUtils.playSaleEffect();
    }

    public addNewItem(product: Product, cart: SaleCart) {
        if (product.basicDetails.quantity <= 0) return;

        const item = new CartItem();
        item.product = product;
        item.quantity = 1;

        cart.items.push(item);
        this.updateTotals(cart);
    }

    public increaseQty(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item && item.quantity! < product.basicDetails.quantity) {
            item.quantity!++;
            this.updateTotals(cart);
        }
    }

    public increaseQtyForSaleItem(
        product: Product,
        cart: SaleCart,
        saleItem: SaleItem
    ) {
        const item = this.getItem(product, cart);
        if (
            item &&
            item.quantity &&
            (item.quantity - saleItem.quantity) < product.basicDetails.quantity
        ) {
            item.quantity++;
            this.updateTotals(cart);
        }
    }

    public decreaseQty(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item && item.quantity && item.quantity > 1) {
            item.quantity--;
            this.updateTotals(cart);
        }
    }

    public removeItem(product: Product, cart: SaleCart): void {
        cart.items = cart.items.filter(
            i => i.product?.productId !== product.productId
        );
        this.updateTotals(cart);
    }

    /* =========================
        TOTALS & CALCULATIONS
    ========================== */

    /**
     * SINGLE SOURCE OF TRUTH
     */
    public updateTotals(cart: SaleCart): void {
        cart.subTotal = 0;

        for (const item of cart.items) {
            cart.subTotal += this.getItemTotal(item) || 0;
        }

        cart.grandTotal =
            cart.subTotal
            - (cart.discount || 0)
            + (cart.deliveryAmount || 0);

        // Prevent negative totals
        if (cart.grandTotal < 0) {
            cart.grandTotal = 0;
        }
    }

    /**
     * Backward compatibility
     */
    public updateDiscount(cart: SaleCart): void {
        this.updateTotals(cart);
    }

    public getItemTotal(item: CartItem): number | null {
        if (item?.product && item.quantity) {
            return item.product.priceDetails.priceWithDiscount * item.quantity;
        }
        return null;
    }

    /* =========================
        HELPERS
    ========================== */

    public getItem(product: Product, cart: SaleCart): CartItem | null {
        return cart.items.find(
            i => i.product?.productId === product.productId
        ) || null;
    }

    public itemExists(product: Product, cart: SaleCart): boolean {
        return !!this.getItem(product, cart);
    }

    /* =========================
        API MAPPING
    ========================== */

    public cartToSaleRequest(cart: SaleCart): SaleRequest {
        const saleRequest = new SaleRequest();

        saleRequest.customerId = cart.customer?.customerId;
        saleRequest.subTotal = cart.subTotal;
        saleRequest.discount = cart.discount;
        saleRequest.deliveryAmount = cart.deliveryAmount;
        saleRequest.grandTotal = cart.grandTotal;
        saleRequest.notes = cart.notes;

        saleRequest.saleItems = this.cartItemsToSaleItems(cart.items);

        return saleRequest;
    }

    private cartItemsToSaleItems(items: CartItem[]): SaleItemRequest[] {
        return items.map(item => {
            const req = new SaleItemRequest();
            req.saleItemId = item.saleItemId;
            req.productId = item.product?.productId;
            req.quantity = item.quantity;
            return req;
        });
    }
}
