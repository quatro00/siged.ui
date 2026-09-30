import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  { path: 'auth', loadChildren: () => import('./domains/auth/routes') },
  { path: 'admin', loadChildren: () => import('./domains/admin/routes') },
  { path: '**', redirectTo: 'auth/sign-in' },
];
