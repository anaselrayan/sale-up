import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { MonthSalesResponse } from '../models/month-sales-response';
import { DateUtils } from 'src/app/utils/date.utils';
import { Select } from 'primeng/select';
import { Skeleton } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LayoutService } from '@layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-revenue-stream-widget',
    imports: [CommonModule, ChartModule, Select, Skeleton, TranslateModule],
    template: `<div class="card !mb-8">
        <div class="mb-4 flex justify-between">
            <span class="font-semibold text-xl"> {{ 'SALES_AND_REVENUE' | translate }} </span>
            <p-select [disabled]="loading" [options]="filterOptions" (onChange)="onChangeCriteria($event)" class="mb-4" />
        </div>
        <p-skeleton *ngIf="loading" size="20rem" />
        <p-chart *ngIf="!loading" type="line" [data]="chartData" [options]="chartOptions" class="h-[30rem]" />
        </div>`
})
export class RevenueStreamWidget {
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    year!: number;
    loading = false;

    filterOptions: number[] = [];

    constructor(
        private dashboardService: DashboardService,
        private translate: TranslateService,
        public layoutService: LayoutService
    ) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.getChartData();
        });
    }

    ngOnInit() {
        this.getFilterOptions();
        this.getChartData();
    }

    getFilterOptions() {
        const currYear = new Date().getFullYear();
        this.year = currYear;
        this.filterOptions = [currYear, currYear - 1, currYear - 2]
    }

    getChartData() {
        this.loading = true;
        this.dashboardService.getMonthlySales(this.year)
            .subscribe(res => {
                this.chartData = this.fillMissedData(res.data);
                this.initChart(this.chartData);
                this.loading = false;
            })
    }

    initChart(model: MonthSalesResponse[]) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        this.chartData = {
            labels: model.map(m => DateUtils.getMonthName(m.month)),
            datasets: [
                {
                    label: this.translate.instant('SALES'),
                    data: model.map(m => m.total),
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                    tension: 0.4
                },
                {
                    label: this.translate.instant('REVENUES'),
                    data: model.map(m => m.revenue),
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-green-500'),
                    tension: 0.4
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
        // this.cd.markForCheck()
    }

    fillMissedData(result: MonthSalesResponse[]) {
        const completeResult: MonthSalesResponse[] = [];
        for (let m = 1; m <= 12; m++) {
            const existed = result.find(res => res.month === m);
            completeResult.push(existed ? existed : {month: m, total: 0, revenue: 0})
        }
        return completeResult;
    }

    onChangeCriteria(e: any) {
        this.year = e.value;
        this.getChartData();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
