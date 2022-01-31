import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './helper/auth.guard';

import { FullComponent } from './layouts/full/full.component';
import { RouteTitleNavigationVi } from './shared/consts';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: RouteTitleNavigationVi.TitleManage,
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'login', component: FullComponent,
    children: [
      { path: '', component: LoginComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  },
];
