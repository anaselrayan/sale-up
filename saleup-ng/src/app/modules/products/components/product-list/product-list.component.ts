import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Product } from '../../models/product.model';
import { PageRequest } from '@shared/models/page-request.model';
import { ProductService } from '../../services/product.service';
import { PaginatorModule } from 'primeng/paginator';
import { Page } from '@shared/models/page-response.mdel';
import { CardModule } from 'primeng/card';
import { ProductUtils } from 'src/app/utils/product.utils';
import { Router } from '@angular/router';
import { ProductDiscountCreateComponent } from "../product-discount-create/product-discount-create.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { SubstringPipe } from '@shared/pipes/substring.pipe';
import { ConfirmService } from '@shared/services/confirm.service';
import { ToastService } from '@shared/services/toast.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    TranslateModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    PaginatorModule,
    CardModule,
    Tooltip,
    SCurrencyPipe,
    ProductDiscountCreateComponent,
    SubstringPipe
  ],
  providers: [],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  loading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;

  products: Product[] = [];

  selectedProducts!: Product[] | null;

  product!: Product;
  discountDialog = false;

  statuses!: any[];

  cols!: any[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private productService: ProductService,
    private confirmService: ConfirmService,
    private translate: TranslateService,
    private toast: ToastService,
    private router: Router
  ) {}


  @ViewChild('filter') filter!: ElementRef;


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productService
      .getProductsPage(this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.products = res.data.content
          this.pageDetails = res.data.page
        }
        this.loading = false
      })
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  deleteSelectedProducts() {

  }

  deleteProduct(product: Product) {
    const msg = this.translate.instant("DELETE_ALERT", { name: product.basicDetails.productName })
    this.confirmService.dialogAlert(msg, ()=> {
      this.productService.deleteProduct(product.productId)
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant("SAVE_SUCCESS"))
          this.getProducts();
        }
      })
    })
  }

  onEditProduct(product: Product) {
    this.router.navigate(['products/edit', product.productId])
  }

  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.getProducts();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
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

  editProductDiscount(product: Product) {
    this.product = product;
    this.discountDialog = true;
  }

  getDiscountLabel(product: Product) {
    return ProductUtils.getDiscountLabel(product);
  }

  discountDialogToggle(e: boolean) {
    this.discountDialog = e;
  }

  discountSuccess(success: boolean) {
    if (success) {
      this.discountDialog = false;
      this.getProducts();
    }
  }

  newProduct() {
    this.router.navigate(['products/new'])
  }

  productDetails(product: Product) {
    this.router.navigate(['products/detail', product.productId])
  }

}
