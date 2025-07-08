import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@module/auth/services/auth.guard';
import { QuickStockUpdateComponent } from './components/quick-stock-update/quick-stock-update.component';
import { ManageBarcodeComponent } from './components/manage-barcode/manage-barcode.component';

const routes: Routes = [
  {
    path: 'stock-update',
    component: QuickStockUpdateComponent,
    canActivate: [AuthGuard],
    data: {perms: []}
  },
  {
    path: 'manage-barcode',
    component: ManageBarcodeComponent,
    canActivate: [AuthGuard],
    data: {perms: []}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
