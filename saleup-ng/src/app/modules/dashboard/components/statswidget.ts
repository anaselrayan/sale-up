import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '../services/dashboard.service';
import { DashboardSnapshotResponse } from '../models/dashboard-snapshot-response';
import { Skeleton } from 'primeng/skeleton';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, TranslateModule, Skeleton, SCurrencyPipe],
    template: `
        <p-skeleton *ngIf="loading" class="col-span-12 lg:col-span-6 xl:col-span-3" height="10rem" />
        <div *ngIf="!loading" class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">{{'TODAY_SALES' | translate }}</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ model?.todaySalesQuantity | sCurrency }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span> -->
            </div>
        </div>
        <p-skeleton *ngIf="loading" class="col-span-12 lg:col-span-6 xl:col-span-3" height="10rem" />
        <div *ngIf="!loading" class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">{{'TODAY_SALE_RETURNS' | translate }}</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ model?.todaySaleReturns | sCurrency }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-arrow-right-arrow-left text-purple-500 !text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-primary font-medium">85 </span>
                <span class="text-muted-color">responded</span> -->
            </div>
        </div>
        <p-skeleton *ngIf="loading" class="col-span-12 lg:col-span-6 xl:col-span-3" height="10rem" />
        <div *ngIf="!loading" class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">{{'TODAY_REVENUE' | translate }}</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ model?.todaySalesRevenue | sCurrency }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 !text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-primary font-medium">%52+ </span>
                <span class="text-muted-color">since last week</span> -->
            </div>
        </div>
        <p-skeleton *ngIf="loading" class="col-span-12 lg:col-span-6 xl:col-span-3" height="10rem" />
        <div *ngIf="!loading" class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">{{'CUSTOMERS' | translate }}</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ model?.totalCustomers }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 !text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-primary font-medium">520 </span>
                <span class="text-muted-color">newly registered</span> -->
            </div>
        </div>
    `
})
export class StatsWidget {
    model?: DashboardSnapshotResponse;
    loading = false;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.dashboardService.getDashboardSnapshot()
            .subscribe(res => {
                if (res.success) {
                    this.model = res.data
                }
                this.loading = false;
            })
    }
}
