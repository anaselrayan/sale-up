import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '@module/auth/services/auth.service';

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

    constructor(private authService: AuthService) {}
    
    ngOnInit() {
    this.model = [
    {
        label: '',
        items: [
        {
            label: 'DASHBOARD',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard'],
            visible: this.authService.hasPermissions(['perm.access.dashboard'])
        },
        {
            label: 'PRODUCTS',
            icon: 'pi pi-box',
            visible: this.authService.hasAnyPermission([
                'perm.create.product',
                'perm.access.product',
                'perm.access.category',
                'perm.access.brand'
            ]),
            items: [
            {
                label: 'ADD_PRODUCTS',
                icon: 'pi pi-plus',
                routerLink: ['/products/new'],
                visible: this.authService.hasPermissions(['perm.create.product'])
            },
            {
                label: 'PRODUCT_LIST',
                icon: 'pi pi-list',
                routerLink: ['/products/list'],
                visible: this.authService.hasPermissions(['perm.access.product'])
            },
            {
                label: 'PRODUCT_CATEGORIES',
                icon: 'pi pi-clone',
                routerLink: ['/products/categories'],
                visible: this.authService.hasPermissions(['perm.access.category'])
            },
            {
                label: 'BRANDS',
                icon: 'pi pi-tags',
                routerLink: ['/products/brands'],
                visible: this.authService.hasPermissions(['perm.access.brand'])
            },
            {
                label: 'PRODUCT_UNITS',
                icon: 'pi pi-gauge',
                routerLink: ['/products/units'],
                visible: this.authService.hasPermissions(['perm.access.product'])
            }
            ]
        },
        {
            label: 'STOCK_MANAGEMENT',
            icon: 'pi pi-database',
            visible: this.authService.hasAnyPermission([
                'perm.print-barcodes',
                'perm.access.product',
                'perm.update.product'
            ]),
            items: [
            {
                label: 'QUICK_STOCK_UPDATE',
                icon: 'pi pi-sync',
                routerLink: ['/stock/stock-update'],
                visible: this.authService.hasPermissions([
                    'perm.access.product',
                    'perm.update.product'
                ])
            },
            {
                label: 'BARCODE_PRINTING',
                icon: 'pi pi-barcode',
                routerLink: ['/stock/manage-barcode'],
                visible: this.authService.hasPermissions(['perm.print-barcodes'])
            }
            ]
        },
        {
            label: 'POS',
            icon: 'pi pi-shop',
            routerLink: ['/sales/pos'],
            visible: this.authService.hasPermissions(['perm.access.pos']),
            styleClass: 'text-red-500',
        },
        {
            label: 'RECEIPTS',
            icon: 'pi pi-receipt',
            visible: this.authService.hasAnyPermission([
                'perm.access.sale',
                'perm.access.sale-return'
            ]),
            items: [
            {
                label: 'SALE_HISTORY',
                icon: 'pi pi-cart-arrow-down',
                routerLink: ['/sales/list'],
                visible: this.authService.hasPermissions(['perm.access.sale'])
            },
            {
                label: 'SALE_RETURN_LIST',
                icon: 'pi pi-arrow-right-arrow-left',
                routerLink: ['sales/sale-return/list'],
                visible: this.authService.hasPermissions(['perm.access.sale-return'])
            }
            ]
        },
        {
            label: 'PEOPLE',
            icon: 'pi pi-users',
            visible: this.authService.hasAnyPermission([
                'perm.access.customer',
                'perm.access.suppliers',
                'perm.access.user',
                'perm.access.role'
            ]),
            items: [
            {
                label: 'CUSTOMERS',
                icon: 'pi pi-user-minus',
                routerLink: ['/customers/list'],
                visible: this.authService.hasPermissions(['perm.access.customer'])
            },
            {
                label: 'SUPPLIERS',
                icon: 'pi pi-user-plus',
                routerLink: ['/suppliers'],
                visible: this.authService.hasPermissions(['perm.access.suppliers'])
            },
            {
                label: 'USERS',
                icon: 'pi pi-user-edit',
                routerLink: ['/users/list'],
                visible: this.authService.hasPermissions(['perm.access.user'])
            },
            {
                label: 'ROLES',
                icon: 'pi pi-key',
                routerLink: ['/roles'],
                visible: this.authService.hasPermissions(['perm.access.role'])
            }
            ]
        },
        {
            label: 'REPORTS',
            icon: 'pi pi-chart-line',
            visible: this.authService.hasAnyPermission([
                'perm.product-report',
                'perm.sales-report'
            ]),
            items: [
            {
                label: 'STOCK_REPORT',
                icon: 'pi pi-table',
                routerLink: ['/reports/products'],
                visible: this.authService.hasPermissions(['perm.product-report'])
            },
            {
                label: 'SALE_REPORT',
                icon: 'pi pi-chart-bar',
                routerLink: ['/reports/sales'],
                visible: this.authService.hasPermissions(['perm.sales-report'])
            }
            ]
        },
        {
            label: 'SETTINGS',
            icon: 'pi pi-cog',
            visible: this.authService.hasAnyPermission(['perm.access.setting']),
            items: [
            {
                label: 'SYSTEM_SETTINGS',
                icon: 'pi pi-sliders-v',
                routerLink: ['/settings/system'],
                visible: this.authService.hasPermissions(['perm.access.setting'])
            }
            ]
        }
        ]
    }
    ];
}

}
