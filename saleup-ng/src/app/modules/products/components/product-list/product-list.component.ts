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
import { DialogModule } from 'primeng/dialog'; // Import DialogModule for the new import modal
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Product, ProductImportColumnSpec } from '../../models/product.model';
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
import { ProductImportService } from '@module/products/services/product-import.service';
import { FileUpload } from 'primeng/fileupload';
import { ProductExportService } from '@module/products/services/product-export.service';
import { MultiSelect } from 'primeng/multiselect';

interface ExportColumn {
  field: string;
  header: string;
}

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
    MultiSelect,
    FileUpload,
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
  
  importDialog = false;
  importLoading =  false;
  importColumnsSpec: ProductImportColumnSpec[] = [];
  selectedImportFile!: File;

  exportDialog = false;
  exportLoading = false;
  exportColumns: ExportColumn[] = [];
  selectedExportColumns!: ExportColumn[] | null;
  exportType: 'excel' | 'pdf' = 'excel';

  statuses!: any[];

  cols!: any[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private productService: ProductService,
    private productImportService: ProductImportService,
    private productExportService: ProductExportService,
    private confirmService: ConfirmService,
    private translate: TranslateService,
    private toast: ToastService,
    private router: Router
  ) {}


  @ViewChild('filter') filter!: ElementRef;


  ngOnInit() {
    this.getProducts();
    this.getImportSpec();
    this.initializeExportColumns();
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

  getImportSpec() {
    this.productImportService
        .getImportSpec()
        .subscribe(res => {this.importColumnsSpec = res})
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  deleteSelectedProducts() {
    if (this.selectedProducts && this.selectedProducts.length > 0) {
      const productNames = this.selectedProducts.map(p => p.basicDetails.productName).join(', ');
      const msg = this.translate.instant("DELETE_SELECTED_ALERT", { names: productNames });
      this.confirmService.dialogAlert(msg, () => {
        console.log('Deleting selected products:', this.selectedProducts);
        this.toast.showSuccess(this.translate.instant("DELETE_SUCCESS"));
        this.selectedProducts = null;
        this.getProducts();
      });
    } else {
      this.toast.showWarn(this.translate.instant("NO_PRODUCTS_SELECTED"));
    }
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

  showImportDialog() {
    this.importDialog = true;
  }

  hideImportDialog() {
    this.importDialog = false;
  }

  onSelectImportFile(event: any) {
    if (event.currentFiles && event.currentFiles.length > 0) {
      this.selectedImportFile = event.currentFiles[0];
    }
  }

  confirmImport() {
    if (this.selectedImportFile) {
      this.importLoading = true;
      const form = new FormData();
      form.append('file', this.selectedImportFile);
      this.productImportService
          .importProducts(form)
          .subscribe(res => {
            if (res.success) {
              this.getProducts();
              this.toast.showSuccess(this.translate.instant("IMPORTED_SUCCESSFULLY"));
            } else {
              this.toast.showError(res.message)
            }
            console.log(res)
            this.importLoading = false;
            this.hideImportDialog();
      })
    }
  }

  showExportDialog() {
    this.exportDialog = true;
    // Pre-select all available columns when the dialog opens
    this.selectedExportColumns = [...this.exportColumns];
  }

  hideExportDialog() {
    this.exportDialog = false;
    this.selectedExportColumns = null;
    this.exportType = 'excel'; // Reset to default
  }

  initializeExportColumns() {
    // Define the columns available for export.
    // These should ideally map to your product data structure.
    this.exportColumns = [
      { field: 'basicDetails.barcode', header: this.translate.instant('BARCODE') },
      { field: 'basicDetails.productName', header: this.translate.instant('NAME') },
      { field: 'basicDetails.productCategory.name', header: this.translate.instant('CATEGORY') },
      { field: 'basicDetails.productBrand.name', header: this.translate.instant('BRAND') },
      { field: 'priceDetails.costPrice', header: this.translate.instant('COST') },
      { field: 'priceDetails.sellingPrice', header: this.translate.instant('PRICE') },
      { field: 'priceDetails.priceWithDiscount', header: this.translate.instant('PRICE_AFTER_DISCOUNT') },
      { field: 'basicDetails.quantity', header: this.translate.instant('QUANTITY') }
    ];
  }

  confirmExport() {
    if (!this.selectedExportColumns || this.selectedExportColumns.length === 0) {
      this.toast.showWarn(this.translate.instant("SELECT_AT_LEAST_ONE_COLUMN"));
      return;
    }

    this.exportLoading = true;
    const columnsToExport = this.selectedExportColumns.map(col => col.field);

    const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15); // YYYYMMDDTHHMMSS
    const fileName = `product_list_${timestamp}`;

    this.productExportService.exportProducts(this.products, columnsToExport, this.exportType, fileName)
      .subscribe({
        next: () => {
          this.toast.showSuccess(this.translate.instant("EXPORT_SUCCESS"));
          this.hideExportDialog();
        },
        error: (err) => {
          this.toast.showError(this.translate.instant("EXPORT_ERROR", { message: err.message || 'Unknown error' }));
          console.error('Export error:', err);
        },
        complete: () => {
          this.exportLoading = false;
        }
      });
  }

}