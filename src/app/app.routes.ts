import { CanActivateFn, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { inject } from '@angular/core';
import { TokenService } from './shared/services/token/token.service';
import { AppComponent } from './app.component';

const tokenGuard: CanActivateFn = () => {
    const guardService = inject(TokenService);
    return guardService.isLogin()
}

export const routes: Routes = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'', component: AppComponent},
    // {path:'register', loadComponent: () => import('./public/register/register.component').then((c)=>c.RegisterComponent)},
    // {path:'recuperar-senha', loadComponent: () => import('./public/recuperar-senha/recuperar-senha.component').then((c)=>c.RecuperarSenhaComponent)},
    // {path: 'admin', loadChildren: () => import('./private/admin/admin.module').then(module => module.AdminModule)}
];
