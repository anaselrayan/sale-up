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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Sale } from '@module/sales/models/sale.model';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { Skeleton } from 'primeng/skeleton';
import { Tooltip } from 'primeng/tooltip';
import { SubstringPipe } from "@shared/pipes/substring.pipe";
import { DateFtPipe } from "@shared/pipes/date-ft.pipe";
import { ProductUtils } from 'src/app/utils/product.utils';
import { Product } from '@module/products/models/product.model';

@Component({
  selector: 'app-sale-details',
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
    DateFtPipe,
    RouterModule
],
  templateUrl: './sale-details.component.html',
  styleUrl: './sale-details.component.scss'
})
export class SaleDetailsComponent {

  sale!: Sale;
  loading = false;

  constructor(
    private saleService: SaleService,
    private route: ActivatedRoute,
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
            } else {
              this.router.navigate(['/notfound'])
            }
            this.loading = false;
          })
      }
    }
  }

  printReceipt() {
    this.saleService.previewSaleReceipt(this.sale);
  }

  editReceipt() {
    this.router.navigate(['/sales/edit', this.sale.saleId])
  }

  getProductImageSrc(product: Product) {
      return ProductUtils.getFirstImageSrc(product)
  }

}
