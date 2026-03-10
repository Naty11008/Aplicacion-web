import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
   {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
  },
    {
    path: 'sign',
    loadComponent: () => import('./sign/sign.component').then((m) => m.SignComponent),
  },
    {
    path: 'report',
    loadComponent: () => import('./report/report.component').then((m) => m.ReportComponent),
  },
  {
    path: 'signout',
    loadComponent: () => import('./signout/signout.component').then((m) => m.SignoutComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
