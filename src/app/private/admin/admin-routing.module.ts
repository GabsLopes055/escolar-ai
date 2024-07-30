import { NgModule, inject } from "@angular/core";
import { CanActivateFn, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TokenService } from "../../shared/services/token/token.service";
import { VooConfirmadoComponent } from "./pages/viajar/components/voos/components/voo-confirmado/voo-confirmado.component";

const tokenGuard: CanActivateFn = () => {
  const guardService = inject(TokenService);
  return guardService.isLogin()
}

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Togo Trip' }, canActivate: [tokenGuard] },
  { path: 'settings', loadComponent: () => import('./pages/configurations/configurations.component').then((c) => c.ConfigurationsComponent), data: { title: 'Configurações' }, canActivate: [tokenGuard] },
  { path: 'viajantes', loadComponent: () => import('./pages/viajantes/viajantes.component').then((c) => c.ViajantesComponent), data: { title: 'Colaboradores' }, canActivate: [tokenGuard] },
  { path: 'reservas', loadComponent: () => import('./pages/reservas/reservas.component').then((c) => c.ReservasComponent), data: { title: 'Minhas Reservas' }, canActivate: [tokenGuard] },
  { path: 'aprovacoes', loadComponent: () => import('./pages/aprovacoes/aprovacoes.component').then((c) => c.AprovacoesComponent), data: { title: 'Aprovações' }, canActivate: [tokenGuard] },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent), data: { title: 'Dashboard' }, canActivate: [tokenGuard] },
  { path: 'viajar', loadComponent: () => import('./pages/viajar/viajar.component').then((c) => c.ViajarComponent), data: { title: 'Solicitar Viagens' }, canActivate: [tokenGuard] },
  { path: 'central-custo', loadComponent: () => import('./pages/central-custo/central-custo.component').then((c) => c.CentralCustoComponent), data: { title: 'Central de Custo' }, canActivate: [tokenGuard] },
  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then((c) => c.PerfilComponent), data: { title: 'Perfil' }, canActivate: [tokenGuard] },
  { path: 'suporte-atendimento', loadComponent: () => import('./pages/home/pages/suport-atendimento/suport-atendimento.component').then((c) => c.SuportAtendimentoComponent), data: { title: 'Suporte e Atendimento' }, canActivate: [tokenGuard] },
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
