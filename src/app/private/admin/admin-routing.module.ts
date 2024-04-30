import { NgModule, inject } from "@angular/core";
import { CanActivateFn, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TokenService } from "../../shared/services/token/token.service";

const tokenGuard: CanActivateFn = () => {
  const guardService = inject(TokenService);
  return guardService.isLogin()
}

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate:[tokenGuard]},
    {path: 'settings', loadComponent: () => import('./pages/configurations/configurations.component').then((c) => c.ConfigurationsComponent), canActivate:[tokenGuard]},
    {path: 'viajantes', loadComponent: () => import('./pages/viajantes/viajantes.component').then((c) => c.ViajantesComponent), canActivate:[tokenGuard]},
    {path: 'reservas', loadComponent: () => import('./pages/reservas/reservas.component').then((c) => c.ReservasComponent), canActivate:[tokenGuard]},
    {path: 'aprovacoes', loadComponent: () => import('./pages/aprovacoes/aprovacoes.component').then((c) => c.AprovacoesComponent), canActivate:[tokenGuard]},
    {path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent), canActivate:[tokenGuard]},
    {path: 'viajar', loadComponent: () => import('./pages/viajar/viajar.component').then((c) => c.ViajarComponent), canActivate:[tokenGuard]},
    {path: 'central-custo', loadComponent: () => import('./pages/central-custo/central-custo.component').then((c) => c.CentralCustoComponent), canActivate:[tokenGuard]},
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }