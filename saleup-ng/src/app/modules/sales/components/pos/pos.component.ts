import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '@module/products/services/product.service';
import { PageRequest } from '@shared/models/page-request.model';
import { Product } from '@module/products/models/product.model';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PosSaleDetailsComponent } from "../pos-sale-details/pos-sale-details.component";
import { ProductUtils } from 'src/app/utils/product.utils';
import { CartService } from '@module/sales/services/cart.service';
import { debounceTime, finalize, Subscription, switchMap } from 'rxjs';
import { PaginatorModule } from 'primeng/paginator';
import { Page } from '@shared/models/page-response.mdel';
import { Tooltip } from 'primeng/tooltip';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { LayoutService } from '@layout/service/layout.service';
import { Skeleton } from 'primeng/skeleton';
import { ToastService } from '@shared/services/toast.service';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BarcodeScannerService } from '@shared/services/barcode-scanner.service';
import { Message } from 'primeng/message';


@Component({
  selector: 'app-pos',
  imports: [
    DataView,
    Tag,
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    CardModule,
    PosSaleDetailsComponent,
    PaginatorModule,
    Message,
    Tooltip,
    SCurrencyPipe,
    Skeleton,
    RouterModule,
    TranslateModule
],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss'
})
export class PosComponent implements OnInit, OnDestroy {

  globalSearchControl = new FormControl('');
  pageReq = new PageRequest(0, 8);
  pageDetails?: Page;
  products: Product[] = [];
  loading = false;
  searching = false;

  private sacnnerSub$!: Subscription;
  
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private lasyoutService: LayoutService,
    private translate: TranslateService,
    private barcodeScanner: BarcodeScannerService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.subscribeForGlobalSearch();
    this.getProducts();
    this.hideSideBar();
    this.listenForBarcodesScanner();
  }

  hideSideBar() {
    if (!this.lasyoutService.isSidebarActive()) {
      this.lasyoutService.onMenuToggle();
    }
  }

  listenForBarcodesScanner() {
    this.sacnnerSub$ = this.barcodeScanner.scan$.subscribe(barcode => {
      this.productService.getProductByBarcode(barcode)
        .subscribe(res => {
          if (res.success) {
            this.cartService.addProductSubject.next(res.data);
          } else {
            this.toast.showWarn(this.translate.instant('PRODUCT_NOT_FOUND'));
            this.searching = false;
          }
        })
    })
  }

  subscribeForGlobalSearch() {
    this.pageReq = new PageRequest(0, 8);
    this.loading = true;
    this.globalSearchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((searchTerm) => this.productService.searchByKeyword(searchTerm || '', this.pageReq)
      .pipe(finalize(() => this.loading = false))
    )
    ).subscribe(res => {
      if (res.success) {
        this.products = res.data.content;
        this.pageDetails = res.data.page;
      }
      this.loading = false;
    });
  }
  
  getProducts() {
    this.loading = true;
    this.productService.getProductsPage(this.pageReq)
    .subscribe(res => {
      if (res.success) {
        this.products = res.data.content;
        this.pageDetails = res.data.page;
      }
      this.loading = false;
    })
  }

  getQuantitySeverity(p: Product) {
    return ProductUtils.getQuantitySeverity(p)
  }
  
  getProductImageSrc(product: Product) {
    return ProductUtils.getFirstImageSrc(product)
  }

  addProductToCart(product: Product) {
    this.cartService.addProductSubject.next(product)
  }

  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.getProducts();
  }

  orderSuccess(e: any) {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.sacnnerSub$.unsubscribe();
  }
  
}
