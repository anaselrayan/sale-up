import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './components/pos/pos.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SaleDetailsComponent } from './components/sale-details/sale-details.component';
import { SaleReturnListComponent } from './components/sale-return-list/sale-return-list.component';
import { SaleReturnCreateComponent } from './components/sale-return-create/sale-return-create.component';
import { SaleReturnDetailsComponent } from './components/sale-return-details/sale-return-details.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'pos',
    component: PosComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.pos'] }
  },
  {
    path: 'list',
    component: SalesListComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.sale'] }
  },
  {
    path: 'detail/:saleId',
    component: SaleDetailsComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.sale'] }
  },
  {
    path: 'edit/:saleId',
    component: PosComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.update.sale'] }
  },
  {
    path: 'sale-return',
    children: [
      { 
        path: 'list', component: SaleReturnListComponent,
        canActivate: [AuthGuard],
        data: { perms: ['perm.access.sale-return'] }
      },
      { 
        path: ':saleId', component: SaleReturnListComponent,
        canActivate: [AuthGuard],
        data: { perms: ['perm.access.sale-return'] }
      },
      { 
        path: 'create/:saleId', component: SaleReturnCreateComponent,
        canActivate: [AuthGuard],
        data: { perms: ['perm.create.sale-return'] }
      },
      { 
        path: 'detail/:saleReturnId', component: SaleReturnDetailsComponent,
        canActivate: [AuthGuard],
        data: { perms: ['perm.access.sale-return'] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
