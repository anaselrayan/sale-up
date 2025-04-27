import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductUtils } from 'src/app/utils/product.utils';
import { Product } from '@module/products/models/product.model';
import { DashboardService } from '../services/dashboard.service';
import { Skeleton } from 'primeng/skeleton';
import { Tag } from 'primeng/tag';
import { RouterModule } from '@angular/router';
import { SubstringPipe } from "@shared/pipes/substring.pipe";

@Component({
    standalone: true,
    selector: 'app-low-stock-products',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, Tag, TranslateModule, Skeleton, RouterModule, SubstringPipe],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">{{ 'LOW_STOCK_PRODUCTS' | translate }}</div>
        <div *ngIf="loading" class="loading">
            <div class="flex gap-4 items-center mb-4">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
            </div>
            <div class="flex gap-4 items-center mb-4">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
            </div>
            <div class="flex gap-4 items-center mb-4">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
                <p-skeleton width="6rem" height="2rem" styleClass="mr-2" />
            </div>
        </div>
        <p-table *ngIf="!loading" [value]="products" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>{{ 'IMAGE' | translate }}</th>
                    <th pSortableColumn="name">{{ 'NAME' | translate }}<p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="price">{{ 'QUANTITY' | translate }}<p-sortIcon field="price"></p-sortIcon></th>
                    <th>{{ 'VIEW' | translate }}</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img class="rounded w-full"
                            [src]="getProductImageSrc(product)"
                            [alt]="product.basicDetails?.productName"
                            style="width: 80px; object-fit: cover;" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.basicDetails.productName | substring: 'short' }}</td>
                    <td style="width: 35%; min-width: 8rem;">
                        <p-tag [value]="product.basicDetails.quantity + ''" [severity]="getQuantitySeverity(product)" />
                    </td>
                    <td style="width: 15%;">
                        <button [routerLink]="['products/detail', product.productId]" pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
})
export class LowStockProducts {
    products!: Product[];
    loading = false;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.dashboardService.getLowStockProducts()
            .subscribe((res) => {
                if (res.success) {
                    this.products = res.data;
                }
                this.loading = false;
            });
    }

    getProductImageSrc(product: Product) {
        return ProductUtils.getFirstImageSrc(product);
    }

    getQuantitySeverity(product: Product) {
        return ProductUtils.getQuantitySeverity(product);
    }
    
}
