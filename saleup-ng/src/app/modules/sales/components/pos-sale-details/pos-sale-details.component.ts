import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Avatar } from 'primeng/avatar';
import { InputNumber } from 'primeng/inputnumber';
import { Product } from '@module/products/models/product.model';
import { ProductUtils } from 'src/app/utils/product.utils';
import { CartItem, SaleCart } from '@module/sales/models/sale-cart';
import { CartService } from '@module/sales/services/cart.service';
import { Customer } from '@module/customers/models/customer.model';
import { CustomerService } from '@module/customers/service/customer.service';
import { SaleService } from '@module/sales/services/sale.service';
import { ToastService } from '@shared/services/toast.service';
import { Toast } from 'primeng/toast';
import { CustomerCreateDialogComponent } from "@module/customers/components/customer-create-dialog/customer-create-dialog.component";
import { Tooltip } from 'primeng/tooltip';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { SubstringPipe } from "@shared/pipes/substring.pipe";

@Component({
  selector: 'app-pos-sale-details',
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    CardModule,
    AutoCompleteModule,
    Avatar,
    InputNumber,
    Toast,
    CustomerCreateDialogComponent,
    Tooltip,
    SCurrencyPipe,
    TranslateModule,
    ConfirmDialog
],
  templateUrl: './pos-sale-details.component.html',
  styleUrl: './pos-sale-details.component.scss'
})
export class PosSaleDetailsComponent implements OnInit {

  cart!: SaleCart;
  customers: Customer[] = [];
  orderLoading = false;
  customerDialog = false;
  @Output("success") success = new EventEmitter<boolean>();

  constructor(
    public cartService: CartService,
    private customerService: CustomerService,
    private saleService: SaleService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.cart = new SaleCart();
    this.cartService.addProductSubject
    .subscribe(next => {
      this.cartService.addItem(next, this.cart)
    })
  }

  searchCustomers(event: any) {
    this.customerService.filterCustomersByPhone(event.query)
        .subscribe(res => this.customers = res.data)
  }

  getProductImageSrc(product: Product) {
    return ProductUtils.getFirstImageSrc(product)
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item.product!, this.cart)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item.product!, this.cart)
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.product!, this.cart)
  }

  submitOrder() {
    this.orderLoading = true;
    this.saleService.createSale(this.cartService.cartToSaleRequest(this.cart))
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('ORDER_SAVED'))
          this.orderLoading = false;
          this.cart.empty();
          this.success.emit(true);
          this.saleService.previewSaleReceipt(res.data);
        }
      }, err => {
        this.toast.showError(err.error.message)
        this.orderLoading = false;
      })
  }

  toggleDialog(e: any) {
    this.customerDialog = e;
  }

}
