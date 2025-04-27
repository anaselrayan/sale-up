import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];
    
    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'DASHBOARD', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {
                        label: 'PRODUCTS',
                        icon: 'pi pi-box', 
                        items: [
                            { label: 'ADD_PRODUCTS', icon: 'pi pi-plus', routerLink: ['/products/new'] },
                            { label: 'PRODUCT_LIST', icon: 'pi pi pi-list', routerLink: ['/products/list'] },
                            { label: 'PRODUCT_CATEGORIES', icon: 'pi pi-clone', routerLink: ['/products/categories'] },
                            { label: 'BRANDS', icon: 'pi pi-tags', routerLink: ['/products/brands'] },
                            { label: 'PRODUCT_UNITS', icon: 'pi pi-gauge', routerLink: ['/products/units'] },
                            { label: 'QUICK_STOCK_UPDATE', icon: 'pi pi-sync', routerLink: ['/products/stock-update'] },
                        ]
                    },
                    {
                        label: 'SALES',
                        icon: 'pi pi-cart-plus', 
                        items: [
                            { label: 'POS', icon: 'pi pi-shop', routerLink: ['/sales/pos'] },
                            { label: 'SALE_HISTORY', icon: 'pi pi-cart-arrow-down', routerLink: ['/sales/list'] },
                            { label: 'SALE_RETURN_LIST', icon: 'pi pi-arrow-right-arrow-left', routerLink: ['sales/sale-return/list'] },
                        ]
                    },
                    {
                        label: 'PEOPLE',
                        icon: 'pi pi-users', 
                        items: [
                            { label: 'CUSTOMERS', icon: 'pi pi-user-minus', routerLink: ['/customers/list'] },
                            { label: 'SUPPLIERS', icon: 'pi pi-user-plus', routerLink: ['/suppliers'] },
                            { label: 'USERS', icon: 'pi pi-user-edit', routerLink: ['/users/list'] },
                            { label: 'ROLES', icon: 'pi pi-key', routerLink: ['/roles'] },
                        ]
                    },
                    {
                        label: 'REPORTS',
                        icon: 'pi pi-chart-line',
                        items: [
                            { label: 'SALE_REPORT', icon: 'pi pi-chart-bar', routerLink: ['/report/sale'] },
                            { label: 'STOCK_REPORT', icon: 'pi pi-table', routerLink: ['/report/stock'] },
                        ]
                    },
                    {
                        label: 'SETTINGS',
                        icon: 'pi pi-cog',
                        items: [
                            { label: 'SYSTEM_SETTINGS', icon: 'pi pi-sliders-v', routerLink: ['/settings/system'] },
                        ]
                    },
                ],
                
            },
        ];
    }
}
