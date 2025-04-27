import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { SaleService } from '@module/sales/services/sale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '@module/sales/models/sale.model';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { Skeleton } from 'primeng/skeleton';
import { Tooltip } from 'primeng/tooltip';
import { SubstringPipe } from "@shared/pipes/substring.pipe";
import { InputNumber } from 'primeng/inputnumber';
import { SaleReturnCart } from '@module/sales/models/sale-return-cart';
import { SaleReturnRequest } from '@module/sales/models/sale-return-request';
import { Toast } from 'primeng/toast';
import { SaleReturnService } from '@module/sales/services/sale-return.service';
import { ToastService } from '@shared/services/toast.service';
import { DateFtPipe } from "../../../../shared/pipes/date-ft.pipe";
import { ConfirmService } from '@shared/services/confirm.service';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ProductUtils } from 'src/app/utils/product.utils';
import { Product } from '@module/products/models/product.model';

@Component({
  selector: 'app-sale-return-create',
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    CardModule,
    SCurrencyPipe,
    NgxBarcode6Module,
    TranslateModule,
    TableModule,
    Skeleton,
    Tooltip,
    SubstringPipe,
    InputNumber,
    Toast,
    DateFtPipe,
    ConfirmDialog
],
  templateUrl: './sale-return-create.component.html',
  styleUrl: './sale-return-create.component.scss'
})
export class SaleReturnCreateComponent {

  sale!: Sale;
  loading = false;
  returnCart!: SaleReturnCart;
  submitLoading = false;

  constructor(
    private saleService: SaleService,
    private saleReturnService: SaleReturnService,
    private route: ActivatedRoute,
    private toast: ToastService,
    private translate: TranslateService,
    private confirmService: ConfirmService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchSaleDetails();
  }

  fetchSaleDetails() {
    this.loading = true;
    const idParam = this.route.snapshot.paramMap.get('saleId');
    if (idParam) {
      const saleId = Number.parseInt(idParam);
      if (saleId && Number.isInteger(saleId)) {
        this.saleService.getSaleById(saleId)
          .subscribe(res => {
            if (res.success) {
              this.sale = res.data;
              this.returnCart = new SaleReturnCart(this.sale);
              console.log(this.sale)
            } else {
              this.router.navigate(['/notfound'])
            }
            this.loading = false;
          })
      }
    }
  }

  submitSaleReturn() {
    const req = new SaleReturnRequest(this.returnCart);
    if (!req.returnItems || !req.returnItems.length) {
      this.toast.showWarn(this.translate.instant('EMPTY_SALE_RETURN_WARN_MSG'))
      return;
    }
    
    this.submitLoading = true;
    this.saleReturnService.createSaleReturn(req)
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
          this.fetchSaleDetails();
        } else {
          this.toast.showWarn(res.message)
        }
        this.submitLoading = false;
      })
  }

  returnAll() {
    const msg = this.translate.instant('RETURN_ALL_ALERT_MSG')
    this.confirmService.dialogAlert(msg, ()=> {
      this.returnCart.fillCart(this.sale);
      this.submitSaleReturn();
    })
  }

  getProductImageSrc(product: Product) {
      return ProductUtils.getFirstImageSrc(product)
  }
  

}
