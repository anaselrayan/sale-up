import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product, ProductImage, ProductStatisticsSummary } from '@module/products/models/product.model';
import { ProductService } from '@module/products/services/product.service';
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
import { GalleriaModule } from 'primeng/galleria';
import { ProductUtils } from 'src/app/utils/product.utils';
import { Tag } from 'primeng/tag';
import { Tooltip } from 'primeng/tooltip';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-product-details',
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
    GalleriaModule,
    Tag,
    Select,
    RouterModule,
    Tooltip
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  product!: Product;
  productStat?: ProductStatisticsSummary;
  loading = false;
  statLoading = false;
  stRange = 'day'

  responsiveOptions: any[] = [
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
  ] ;

  stOptions = [
    {label: 'Today', value: 'day'},
    {label: 'Last Week', value: 'week'},
    {label: 'Last Month', value: 'month'},
    {label: 'Last Year', value: 'year'},
  ]

  ngOnInit() {
    this.fetchProductDetails();
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  fetchProductDetails() {
    this.loading = true;
    const idParam = this.route.snapshot.paramMap.get('productId');
    if (idParam) {
      const productId = Number.parseInt(idParam);
      if (productId && Number.isInteger(productId)) {
        this.productService.getProductById(productId)
          .subscribe(res => {
            if (res.success) {
              this.product = res.data;
              this.getProductStatistics();
            } else {
              this.router.navigate(['/notfound'])
            }
            this.loading = false;
          })
      }
    }
  }

  getProductStatistics() {
    this.statLoading = true;
    this.productService.getProductStatistics(this.product.productId, this.stRange)
      .subscribe(res => {
        if (res.success) {
          this.productStat = res.data;
        }
        this.statLoading = false;
      })
  }

  getProductImageSrc(productId: number, image: ProductImage) {
    return ProductUtils.getImageSrc(productId, image);
  }

  getQuantitySeverity(p: Product) {
    return ProductUtils.getQuantitySeverity(p)
  }

  getDiscountLabel(product: Product) {
    return ProductUtils.getDiscountLabel(product);
  }

  getPrimaryImageSrc(product: Product) {
    return ProductUtils.getFirstImageSrc(product);
  }

  onChangeCriteria(option: any) {
    this.stRange = option.value;
    this.getProductStatistics();
  }

}
