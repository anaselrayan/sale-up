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
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '@module/sales/models/sale.model';
import { Message } from 'primeng/message';

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
    Message,
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
  saleToEdit!: Sale;
  customers: Customer[] = [];
  orderLoading = false;
  customerDialog = false;
  @Output("success") success = new EventEmitter<boolean>();

  constructor(
    public cartService: CartService,
    private customerService: CustomerService,
    private saleService: SaleService,
    private toast: ToastService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cart = new SaleCart();
    this.fetchSaleDetails();
    this.subscribeForProducts();
  }

  subscribeForProducts() {
    this.cartService.addProductSubject
        .subscribe(next => {
          this.cartService.addItem(next, this.cart)
        })
  }

  fetchSaleDetails() {
    // this.loading = true;
    const idParam = this.route.snapshot.paramMap.get('saleId');
    if (idParam) {
      const saleId = Number.parseInt(idParam);
      if (saleId && Number.isInteger(saleId)) {
        this.saleService.getSaleById(saleId)
          .subscribe(res => {
            if (res.success) {
              this.saleToEdit = res.data;
              this.cart.customer = this.saleToEdit.customer;
              this.cart.discount = this.saleToEdit.discount;
              this.cart.subTotal = this.saleToEdit.subTotal;
              this.cart.grandTotal = this.saleToEdit.grandTotal;
              this.cart.items = this.saleToEdit.saleItems.map(item => new CartItem(item.product, item.quantity))
            } else {
              this.router.navigate(['/notfound'])
            }
            // this.loading = false;
          })
      }
    }
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
          this.cart.empty();
          this.success.emit(true);
          this.saleService.previewSaleReceipt(res.data);
        }
        else this.toast.showError(res.message);
        this.orderLoading = false;
      }, err => {
        this.toast.showError(err.error.message)
        this.orderLoading = false;
      })
  }

  editSale() {
    this.orderLoading = true;
    const req = this.cartService.cartToSaleRequest(this.cart);
    req.saleId = this.saleToEdit.saleId;
    this.saleService.updateSale(req)
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('ORDER_SAVED'))
          this.cart.empty();
          this.success.emit(true);
          this.router.navigate(['/sales/list'])
          this.saleService.previewSaleReceipt(res.data);
        } 
        else this.toast.showError(res.message);
        this.orderLoading = false;
      }, err => {
        this.toast.showError(err.error.message)
        this.orderLoading = false;
      })
  }

  updateDiscount() {
    this.cartService.updateDiscount(this.cart);
  }

  toggleDialog(e: any) {
    this.customerDialog = e;
  }

}
