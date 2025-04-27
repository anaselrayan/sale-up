import { Component } from '@angular/core';
import { LayoutService } from '@layout/service/layout.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { Select } from 'primeng/select';
import { debounceTime, Subscription } from 'rxjs';
import { MonthSaleReturnsResponse } from '../models/month-returns-response';
import { DashboardService } from '../services/dashboard.service';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [ChartModule, TranslateModule, Select],
    template: `<div class="card">
        <div class="mb-4 flex justify-between">
            <span class="font-semibold text-xl"> {{ 'SALE_RETURNS' | translate }} </span>
            <p-select [disabled]="loading" [options]="filterOptions" (onChange)="onChangeCriteria($event)" class="mb-4" />
        </div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-80" />
    </div>`
})
export class NotificationsWidget {
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    loading = false;
    year!: number;
    filterOptions: number[] = [];

    constructor(
        private dashboardService: DashboardService,
        public layoutService: LayoutService,
        private translate: TranslateService,
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
        this.dashboardService.getMonthlySaleReturns(this.year)
            .subscribe(res => {
                this.chartData = this.fillMissedData(res.data);
                this.initChart(this.chartData);
                this.loading = false;
            })
    }

    initChart(model: MonthSaleReturnsResponse[]) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: model.map(m => DateUtils.getMonthName(m.month)),
            datasets: [
                {
                    type: 'bar',
                    label: this.translate.instant('TOTAL_RETURNS'),
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                    data: model.map(m => m.total),
                    borderRadius: {
                        topLeft: 8,
                        topRight: 8,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false,
                    barThickness: 32
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }

    fillMissedData(result: MonthSaleReturnsResponse[]) {
        const completeResult: MonthSaleReturnsResponse[] = [];
        for (let m = 1; m <= 12; m++) {
            const existed = result.find(res => res.month === m);
            completeResult.push(existed ? existed : {month: m, total: 0})
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
