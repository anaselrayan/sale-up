import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReportComponent } from './components/product-report/product-report.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'products', component: ProductReportComponent, pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { perms: ['perm.product-report'] }
  },
  {
    path: 'sales', component: SalesReportComponent, pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { perms: ['perm.sales-report'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
