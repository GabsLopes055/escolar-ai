import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', loadComponent: () => import('./public/register/register.component').then((c)=>c.RegisterComponent)},
    {path:'register-empresa/:id', loadComponent: () => import('./public/register-full/register-full.component').then((c) => c.RegisterFullComponent)},
    {path: 'admin', loadChildren: () => import('./private/admin/admin.module').then(module => module.AdminModule)}
];
