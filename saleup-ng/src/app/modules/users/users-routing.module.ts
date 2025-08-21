import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.user'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
