import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './components/pos/pos.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SaleDetailsComponent } from './components/sale-details/sale-details.component';
import { SaleReturnListComponent } from './components/sale-return-list/sale-return-list.component';
import { SaleReturnCreateComponent } from './components/sale-return-create/sale-return-create.component';
import { SaleReturnDetailsComponent } from './components/sale-return-details/sale-return-details.component';

const routes: Routes = [
  {
    path: 'pos',
    component: PosComponent
  },
  {
    path: 'list',
    component: SalesListComponent
  },
  {
    path: 'detail/:saleId',
    component: SaleDetailsComponent
  },
  {
    path: 'edit/:saleId',
    component: PosComponent
  },
  {
    path: 'sale-return',
    children: [
      { path: 'list', component: SaleReturnListComponent},
      { path: ':saleId', component: SaleReturnListComponent},
      { path: 'create/:saleId', component: SaleReturnCreateComponent},
      { path: 'detail/:saleReturnId', component: SaleReturnDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
