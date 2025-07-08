import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '@module/products/models/product.model';
import { ProductService } from '@module/products/services/product.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastService } from '@shared/services/toast.service';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { Card } from 'primeng/card';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';
import { SCurrencyPipe } from "../../../../shared/pipes/s-currency.pipe";
import { ProductUtils } from 'src/app/utils/product.utils';
import { Button } from 'primeng/button';
import { PrintService } from '@shared/services/print.service';
import { PrintDevice } from '@module/stock/models/print-device';
import { PrintBarcodeRequest } from '@module/stock/models/print';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { Tooltip } from 'primeng/tooltip';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmService } from '@shared/services/confirm.service';
import { BarcodeService } from '@shared/services/barcode.service';

@Component({
  selector: 'app-manage-barcode',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIcon,
    InputText,
    InputNumber,
    IconField,
    Select,
    Tooltip,
    Button,
    Card,
    Toast,
    ConfirmDialog,
    TranslateModule,
    BarcodeScannerLivestreamModule,
    NgxBarcode6Module,
    SCurrencyPipe
  ],
  templateUrl: './manage-barcode.component.html',
  styleUrl: './manage-barcode.component.scss'
})
export class ManageBarcodeComponent implements OnInit {
  
  loading = false;
  saveLoading = false;
  products: Product[] = [];
  customBarcodes: string[] = [];
  barcode!: string;
  printers: PrintDevice[] = [];
  formats: string[] = [];
  printReq: PrintBarcodeRequest = new PrintBarcodeRequest();
  
  constructor(
    private productService: ProductService,
    private translate: TranslateService,
    private printService: PrintService,
    private barcodeService: BarcodeService,
    private toast: ToastService,
    private confirm: ConfirmService
  ) {}

  ngOnInit(): void {
    this.getPrinters();
    this.getBarcodeFormats();
  }

  getPrinters() {
    this.printService.getAllPrinters()
        .subscribe(res => this.printers = res)
  }

  getBarcodeFormats() {
    this.barcodeService.getBarcodeFormats()
        .subscribe(res => this.formats = res);
  }

  findProductByBarcode(barcode: string) {
    this.loading = true;
    this.productService.getProductByBarcode(barcode)
    .subscribe(res => {
      if (res.success) {
        this.addProduct(res.data)
        this.barcode = '';
      } else {
        const msg = this.translate.instant('PRINT_CUSTOM_BARCODE_ALERT');
        this.confirm.dialogAlert(msg, ()=> {
        this.addCustomBarcode(barcode);
      })
      }
      this.loading = false;
    })
  }

  addProduct(product: Product) {
    const exist = this.products.some(p => p.productId === product.productId);
    if (!exist) this.products.push(product);
    else this.toast.showWarn(this.translate.instant('BARCODE_ALREADEY_ADDED'));
  }

  addCustomBarcode(barcode: string) {
    const exist = this.customBarcodes.some(b =>  b === barcode);
    if (!exist) this.customBarcodes.push(barcode);
    else this.toast.showWarn(this.translate.instant('BARCODE_ALREADEY_ADDED'));
  }

  onSearch(key: string) {
    if (!key || !key.length) return;
    this.findProductByBarcode(key);
  }

  getProductImageSrc (p: Product) {
    return ProductUtils.getFirstImageSrc(p)
  }


  removeItem(product: Product) {
    this.products = this.products.filter(p => p.productId !== product.productId);
  }

  removeCustomBarcode(barcode: string) {
    this.customBarcodes = this.customBarcodes.filter(b => b !== barcode);
  }

  printBarcodes() {
    this.saveLoading = true;
    this.printReq.barcodes = [...this.products.map(p => p.basicDetails.barcode), ...this.customBarcodes];
    console.log(this.printReq)
    this.barcodeService.printBarcode(this.printReq)
        .subscribe(res => {
          if  (res.success) {
            this.toast.showSuccess(this.translate.instant('PRINT_SUCCESS'));
          } else {
            this.toast.showError(res.message);
          }
          this.saveLoading = false;
        }, err => {
          this.toast.showError(err.error?.message);
          this.saveLoading = false;
        })
  };

  removeAll() {
    this.products = [];
    this.customBarcodes = [];
  }

}
