import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './components/system-settings/system-settings.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'system',
    component: SystemSettingsComponent,
    canActivate: [AuthGuard],
    data: { perms: ['perm.access.setting'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
