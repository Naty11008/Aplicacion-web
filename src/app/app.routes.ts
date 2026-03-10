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
    path: 'menu',
    loadComponent: () => import('./menu/menu.component').then((m) => m.MenuComponent),
  },
    {
    path: 'account',
    loadComponent: () => import('./account/account.component').then((m) => m.AccountComponent),
  },
  {
    path: 'signout',
    loadComponent: () => import('./signout/signout.component').then((m) => m.SignoutComponent),
  },
    {
    path: 'video',
    loadComponent: () => import('./video/video.component').then((m) => m.VideoComponent),
  },
    {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
