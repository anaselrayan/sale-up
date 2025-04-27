import { Component, OnInit } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { LowStockProducts } from './components/lowstockproducts';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, LowStockProducts, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <div class="mb-8">
                    <app-revenue-stream-widget />
                </div>
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="mb-8">
                    <app-notifications-widget />
                </div>
                <app-low-stock-products />
            </div>
        </div>
    `
})
export class Dashboard {}
