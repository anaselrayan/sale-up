import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/modules/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { WelcomePageComponent } from '@shared/components/welcome-page/welcome-page.component';
import { AuthGuard } from '@module/auth/services/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: WelcomePageComponent},
            { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard], data: {perms: ['perm.access.dashboard']} },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            {
                path: 'products',
                loadChildren: () => import('@module/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'stock',
                loadChildren: () => import('@module/stock/stock.module').then(m => m.StockModule)
            },
            {
                path: 'sales',
                loadChildren: () => import('@module/sales/sales.module').then(m => m.SalesModule)
            },
            {
                path: 'customers',
                loadChildren: () => import('@module/customers/customers.module').then(m => m.CustomersModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('@module/settings/settings.module').then(m => m.SettingsModule)
            },
            {
                path: 'users',
                loadChildren: () => import('@module/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'roles',
                loadChildren: () => import('@module/roles/roles.module').then(m => m.RolesModule)
            },
            {
                path: 'reports',
                loadChildren: () => import('@module/reports/reports.module').then(m => m.ReportsModule)
            },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('@module/auth/auth.module').then(m => m.AuthModule) },
    { path: '**', redirectTo: '/notfound' }
];
