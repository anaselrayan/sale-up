import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SaleReturn } from '@module/sales/models/sale-return.model';
import { SaleReturnService } from '@module/sales/services/sale-return.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
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
  selector: 'app-sale-return-details',
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
  templateUrl: './sale-return-details.component.html',
  styleUrl: './sale-return-details.component.scss'
})
export class SaleReturnDetailsComponent {

  saleReturn!: SaleReturn;
  loading = false;

  constructor(
    private saleReturnService: SaleReturnService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchSaleDetails();
  }

  fetchSaleDetails() {
    this.loading = true;
    const idParam = this.route.snapshot.paramMap.get('saleReturnId');
    if (idParam) {
      const saleReturnId = Number.parseInt(idParam);
      if (saleReturnId && Number.isInteger(saleReturnId)) {
        this.saleReturnService.getSaleReturnById(saleReturnId)
          .subscribe(res => {
            if (res.success) {
              this.saleReturn = res.data;
            } else {
              this.router.navigate(['/notfound'])
            }
            console.log(res)
            this.loading = false;
          })
      }
    }
  }

  getProductImageSrc(product: Product) {
      return ProductUtils.getFirstImageSrc(product)
  }
  

}
