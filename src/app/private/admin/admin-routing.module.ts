import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'settings', loadComponent: () => import('./pages/configurations/configurations.component').then((c) => c.ConfigurationsComponent)},
    {path: 'viajantes', loadComponent: () => import('./pages/viajantes/viajantes.component').then((c) => c.ViajantesComponent)},
    {path: 'reservas', loadComponent: () => import('./pages/reservas/reservas.component').then((c) => c.ReservasComponent)},
    {path: 'aprovacoes', loadComponent: () => import('./pages/aprovacoes/aprovacoes.component').then((c) => c.AprovacoesComponent)},
    {path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent)},
    {path: 'viajar', loadComponent: () => import('./pages/viajar/viajar.component').then((c) => c.ViajarComponent)},
    {path: 'central-custo', loadComponent: () => import('./pages/central-custo/central-custo.component').then((c) => c.CentralCustoComponent)},
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }