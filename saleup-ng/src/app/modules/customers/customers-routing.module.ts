import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.customer'] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
