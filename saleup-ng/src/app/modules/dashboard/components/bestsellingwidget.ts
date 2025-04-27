import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DashboardService } from '../services/dashboard.service';
import { BestSellingProductResponse } from '../models/best-selling-product-response';
import { Skeleton } from 'primeng/skeleton';
import { Select } from 'primeng/select';
import { Product } from '@module/products/models/product.model';
import { ProductUtils } from 'src/app/utils/product.utils';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { SubstringPipe } from "@shared/pipes/substring.pipe";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'app-best-selling-widget',
    imports: [CommonModule, ButtonModule, MenuModule, Skeleton, Select, SCurrencyPipe, SubstringPipe, TranslateModule],
    template: ` <div class="card">
        <div class="flex justify-between items-center mb-6">
            <div class="font-semibold text-xl">{{ 'BEST_SELLING_PRODUCTS' | translate }}</div>
            <p-select [disabled]="loading" [options]="options" (onChange)="onChangeCriteria($event)" class="mb-4" />
        </div>
        <ul *ngIf="loading" class="list-none p-0 m-0">
            <li class="mb-6">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li class="mb-6">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li class="mb-6">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
        </ul>
        <ul *ngIf="!loading" class="list-none p-0 m-0">
            <li *ngFor="let item of model" class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div class="flex items-center gap-2">
                    <img class="rounded w-full"
                        [src]="getProductImageSrc(item.product)"
                        [alt]="item.product.basicDetails.productName"
                        style="width: 50px; object-fit: cover;" />
                    <div>
                        <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">{{ item.product.basicDetails.productName | substring: 'short' }}</span>
                        <div class="mt-1 text-muted-color">{{ item.product.basicDetails.productCategory?.name }}</div>
                    </div>
                </div>
                <div class="mt-2 md:mt-0 flex gap-2 items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-orange-500 h-full" [ngClass]="[getQuantitySeverity(item.totalSold).severity]" [style]="{width: getQuantitySeverity(item.totalSold).width}"></div>
                    </div>
                    <span class="ml-4 font-medium">{{ item.totalSold | sCurrency }}</span>
                </div>
            </li>
        </ul>
    </div>`
})
export class BestSellingWidget {

    model: BestSellingProductResponse[] = [];
    loading = false;
    maxQuantity = 0;
    range = 'week';

    constructor(private dashboardService: DashboardService) {}

    options = [
        {label: 'Last Week', value: 'week'},
        {label: 'Last Month', value: 'month'},
        {label: 'Last Year', value: 'year'},
    ]

    ngOnInit() {
       this.getData();
    }

    getData() {
        this.loading = true;
        this.dashboardService.getTopSellingProducts(this.range)
            .subscribe(res => {
                if (res.success) {
                    this.model = res.data;
                    this.setMaxQuantity();
                }
                this.loading = false;
            })
    }

    setMaxQuantity() {
        this.model.forEach(m => {
            if (m.totalSold > this.maxQuantity)
                this.maxQuantity = m.totalSold;
        })
    }

    onChangeCriteria(e: any) {
        this.range = e.value;
        this.getData()
    }

    getProductImageSrc(product: Product) {
        return ProductUtils.getFirstImageSrc(product);
    }

    getQuantitySeverity(qty: number) {
        const width = (qty / this.maxQuantity * 100);
        
        if (width < 90) return {width: width + '%', severity: 'bg-primary-300'}
        if (width < 75) return {width: width + '%', severity: 'bg-primary-400'}
        if (width < 60) return {width: width + '%', severity: 'bg-primary-500'}
        if(width < 50) return {width: width + '%', severity: 'bg-primary-600'}
        if (width < 30) return {width: width + '%', severity: 'bg-primary-700'}
        else return {width: width + '%', severity: 'bg-primary-200'};
    }

}
