import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AuthGuard } from '@module/auth/services/auth.guard';
import { ProductBrandsComponent } from './components/product-brands/product-brands.component';
import { ProductUnitsComponent } from './components/product-units/product-units.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QuickStockUpdateComponent } from './components/quick-stock-update/quick-stock-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.product'] }
  },
  {
    path: 'new',
    component: ProductCreateComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.create.product'] }
  },
  {
    path: 'edit/:productId',
    component: ProductCreateComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.create.product'] }
  },
  {
    path: 'detail/:productId',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.product'] }
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.category'] }
  },
  {
    path: 'brands',
    component: ProductBrandsComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.product'] }
  },
  {
    path: 'units',
    component: ProductUnitsComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.product'] }
  },
  {
    path: 'stock-update',
    component: QuickStockUpdateComponent,
    canActivate: [AuthGuard],
    data: {perms: ['perm.access.product']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
