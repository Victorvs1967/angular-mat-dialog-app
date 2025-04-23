import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dialog', loadComponent: () => import('./dialog/dialog.component').then(c => c.DialogComponent) },
  { path: 'table', loadComponent: () => import('./mat-table-form/mat-table-form.component').then(c => c.MatTableFormComponent) },
  { path: 'login', loadComponent: () => import('./login-form/login-form.component').then(c => c.LoginFormComponent) },
  { path: '', redirectTo: 'dialog', pathMatch: 'full' }
];
