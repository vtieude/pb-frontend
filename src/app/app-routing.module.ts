import { Routes } from '@angular/router';
import { TodoComponent } from './example/todo/todo.component';
import { AuthGuard } from './helper/auth.guard';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
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
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'todo', component: FullComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: TodoComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  },
];
