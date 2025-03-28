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
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {
                        label: 'Products',
                        icon: 'pi pi-box', 
                        items: [
                            { label: 'Add Products', icon: 'pi pi-file-plus', routerLink: ['/products/new'] },
                            { label: 'Product List', icon: 'pi pi pi-list', routerLink: ['/products/list'] },
                            { label: 'Category List', icon: 'pi pi-clone', routerLink: ['/products/categories'] },
                            { label: 'Product Brands', icon: 'pi pi-tags', routerLink: ['/products/brands'] },
                            { label: 'Product Units', icon: 'pi pi-gauge', routerLink: ['/products/units'] },
                        ]
                    },
                    {
                        label: 'Sales',
                        icon: 'pi pi-cart-plus', 
                        items: [
                            { label: 'POS', icon: 'pi pi-shop', routerLink: ['/sales/pos'] },
                            { label: 'Sale History', icon: 'pi pi-cart-arrow-down', routerLink: ['/sales/list'] },
                        ]
                    },
                    {
                        label: 'People',
                        icon: 'pi pi-users', 
                        items: [
                            { label: 'Customers', icon: 'pi pi-user-minus', routerLink: ['/customers/list'] },
                            { label: 'Suppliers', icon: 'pi pi-user-plus', routerLink: ['/suppliers'] },
                            { label: 'Users', icon: 'pi pi-user-edit', routerLink: ['/users/list'] },
                            { label: 'Roles', icon: 'pi pi-key', routerLink: ['/roles'] },
                        ]
                    },
                    {
                        label: 'Reports',
                        icon: 'pi pi-chart-line',
                        items: [
                            { label: 'Sales Report', icon: 'pi pi-chart-bar', routerLink: ['/settings/system'] },
                            { label: 'Stock Report', icon: 'pi pi-table', routerLink: ['/settings/system'] },
                        ]
                    },
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        items: [
                            { label: 'System Settings', icon: 'pi pi-sliders-v', routerLink: ['/settings/system'] },
                        ]
                    },
                ],
                
            },
        ];
    }
}
