import { RegisterFullComponent } from './public/register-full/register-full.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './public/home/home.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'register-empresa/:id', component: RegisterFullComponent},
];
