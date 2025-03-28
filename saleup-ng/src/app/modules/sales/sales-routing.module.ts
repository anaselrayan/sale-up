import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './components/pos/pos.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

const routes: Routes = [
  {
    path: 'pos',
    component: PosComponent
  },
  {
    path: 'list',
    component: SalesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
