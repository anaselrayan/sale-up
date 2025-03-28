import { Component, ViewChild } from '@angular/core';
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
import { debounceTime, switchMap } from 'rxjs';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { PaginatorModule } from 'primeng/paginator';
import { Page } from '@shared/models/page-response.mdel';
import { Tooltip } from 'primeng/tooltip';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { LayoutService } from '@layout/service/layout.service';


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
    BarcodeScannerLivestreamModule,
    PaginatorModule,
    Tooltip,
    SCurrencyPipe
],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss'
})
export class PosComponent {
  globalSearchControl = new FormControl('');
  pageReq = new PageRequest(0, 8);
  pageDetails?: Page;
  products: Product[] = [];

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;
  barcodeValue!: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private lasyoutService: LayoutService
  ) {}

  ngOnInit() {
    this.subscribeForGlobalSearch();
    this.getProducts();
    this.hideSideBar();
  }

  hideSideBar() {
    if (!this.lasyoutService.isSidebarActive()) {
      this.lasyoutService.onMenuToggle();
    }
  }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any) {
    console.log(started);
  }

  subscribeForGlobalSearch() {
    this.pageReq = new PageRequest(0, 8);
    this.globalSearchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((searchTerm) => this.productService.searchByKeyword(searchTerm || '', this.pageReq))
    ).subscribe(res => {
      if (res.success) {
        this.products = res.data.content;
        this.pageDetails = res.data.page;
      }
    });
  }
  
  getProducts() {
    this.productService.getProductsPage(this.pageReq)
    .subscribe(res => {
      if (res.success) {
        this.products = res.data.content;
        this.pageDetails = res.data.page;
      }
    })
  }

  getQuantitySeverity(p: Product) {
    if (p.basicDetails.quantity > p.basicDetails.lowStockPoint) {
      return 'success'
    }
    else if (p.basicDetails.quantity <= p.basicDetails.lowStockPoint) {
      return 'warn';
    }
    else if (p.basicDetails.quantity == 0) {
      return 'danger';
    }
    else
      return 'info';
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
  
}
