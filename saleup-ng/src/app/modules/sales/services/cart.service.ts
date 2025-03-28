import { Product } from "@module/products/models/product.model";
import { CartItem } from "../models/cart-item";
import { SaleCart } from "../models/sale-cart";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { SoundUtils } from "src/app/utils/sound.utils";
import { SaleItemRequest, SaleRequest } from "../models/sale-request";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    addProductSubject = new ReplaySubject<Product>();

    public addItem(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item) {
            this.increaseQty(product, cart);
        }
        else {
            this.addNewItem(product, cart);
        }
        SoundUtils.playSaleEffect();
    }

    public addNewItem(product: Product, cart: SaleCart) {
        const item = new CartItem();
        item.product = product;
        item.quantity = 1;
        if (product.basicDetails.quantity > 0) {
            cart.items?.push(item);
            this.updateAmout(cart);
        }
    }

    public increaseQty(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item && item.quantity && item.quantity < product.basicDetails.quantity) {
            item.quantity++
            this.updateAmout(cart);
        }
    }

    public decreaseQty(product: Product, cart: SaleCart) {
        const item = this.getItem(product, cart);
        if (item && item.quantity && item.quantity > 1) {
            item.quantity--
            this.updateAmout(cart);
        }
    }

    public itemExists(product: Product, cart: SaleCart): boolean {
        if (cart && cart.items) {
            for (const i of cart.items) {
                if (i.product?.productId == product?.productId)
                    return true;
            }
            return false;
        }
        return false;
    }

    public removeItem(product: Product, cart: SaleCart): void {
        if (cart && cart.items) {
            for (let i = 0; i < cart.items.length; i++) {
                if (cart.items[i].product?.productId == product?.productId) {
                    cart.items.splice(i, 1);
                    this.updateAmout(cart);
                }
            }
        }
    }

    public getItem(product: Product, cart: SaleCart): CartItem | null {
        if (cart && cart.items) {
            for (const i of cart.items) {
                if (i.product?.productId == product?.productId)
                    return i;
            }
            return null;
        }
        return null;
    }

    public updateAmout(cart: SaleCart): void {
        if (cart && cart.items) {
            cart.subTotal = 0;
            cart.grandTotal = 0;
            for (const item of cart.items) {
                const itemPrice = this.getItemTotal(item) || 0.0;
                cart.subTotal += itemPrice;
            }
            cart.grandTotal = cart.subTotal - (cart.subTotal * (cart.discount || 0))
        }
    }

    public getItemTotal(item: CartItem): number | null {
        if (item && item.product && item.quantity) {
            const price = item.product.priceDetails.priceWithDiscount;
            return price * item.quantity;
        }
        return null;
    }

    public cartToSaleRequest(cart: SaleCart) {
        if (cart.items) {
            const saleRequest = new SaleRequest();
            saleRequest.customerId = cart.customer?.customerId;
            saleRequest.subTotal = cart.subTotal;
            saleRequest.grandTotal = cart.grandTotal;
            saleRequest.discount = cart.discount;
            saleRequest.saleItems = this.cartItemsToSaleItems(cart.items)
            return saleRequest;
        }
        return {};
    }

    private cartItemsToSaleItems(items: CartItem[]) {
        const saleItems: SaleItemRequest[] = [];
        for (const item of items) {
            const req = new SaleItemRequest();
            req.productId = item.product?.productId;
            req.quantity = item.quantity;
            saleItems.push(req)
        }
        return saleItems;
    }

}