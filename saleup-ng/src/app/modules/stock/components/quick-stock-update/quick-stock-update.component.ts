import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { Product } from '@module/products/models/product.model';
import { ProductService } from '@module/products/services/product.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastService } from '@shared/services/toast.service';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { Card } from 'primeng/card';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { Toast } from 'primeng/toast';
import { SCurrencyPipe } from "../../../../shared/pipes/s-currency.pipe";
import { ProductUtils } from 'src/app/utils/product.utils';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-quick-stock-update',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIcon,
    InputText,
    IconField,
    InputNumber,
    Button,
    Card,
    Tag,
    Toast,
    TranslateModule,
    BarcodeScannerLivestreamModule,
    NgxBarcode6Module,
    SCurrencyPipe
],
  templateUrl: './quick-stock-update.component.html',
  styleUrl: './quick-stock-update.component.scss'
})
export class QuickStockUpdateComponent {

  loading = false;
  saveLoading = false;
  product!: Product;
  barcode!: string;
  form!: FormGroup;

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  constructor(
    private productService: ProductService,
    private translate: TranslateService,
    private formBuilder: UntypedFormBuilder,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cost: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
    })
  }

  ngAfterViewInit() {
    // this.barcodeScanner.start();
  }

  onScanBarcodeChanges(value: any) {
    if (this.loading)
      return;
    this.loading = true;
    const barcode = value.codeResult.code.trim();
    this.findProductByBarcode(barcode);
  }

  findProductByBarcode(barcode: string) {
    this.productService.getProductByBarcode(barcode)
    .subscribe(res => {
      if (res.success) {
        this.product = res.data;
        this.form.patchValue({
          cost: this.product.priceDetails.costPrice,
          price: this.product.priceDetails.sellingPrice,
          quantity: this.product.basicDetails.quantity,
        })
      } else {
        this.toast.showError(this.translate.instant('PRODUCT_NOT_FOUND'));
        this.loading = false;
      }
    })
  }

  onSearch(key: string) {
    if (!key || !key.length) return;
    this.findProductByBarcode(key);
  }
  
  getQuantitySeverity() {
    return ProductUtils.getQuantitySeverity(this.product)
  }

  getPrimaryImageSrc(product: Product) {
    return ProductUtils.getFirstImageSrc(product);
  }

  save() {
    this.saveLoading = true;
    if (!this.form.valid || !this.product) {
      this.toast.showWarn(this.translate.instant('REQUIRED_FIELDS_MSG'));
      return;
    }
    this.productService.updateProductStock({
      productId: this.product.productId,
      quantity: this.form.value['quantity'],
      cost: this.form.value['cost'],
      price: this.form.value['price'],
    }).subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        this.findProductByBarcode(this.product.basicDetails.barcode)
      } else {
        this.toast.showError(res.message);
      }
      this.saveLoading = false;
    })
  }
  
}
