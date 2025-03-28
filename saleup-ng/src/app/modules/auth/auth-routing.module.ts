import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from '@module/auth/components/login';
import { Access } from './components/access';

const routes: Routes = [
  {
    path: 'login', component: Login 
  },
  {
    path: 'access', component: Access 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
