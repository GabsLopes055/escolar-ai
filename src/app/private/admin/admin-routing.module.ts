import { NgModule, inject } from "@angular/core";
import { CanActivateFn, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TokenService } from "../../shared/services/token/token.service";


const tokenGuard: CanActivateFn = () => {
  const guardService = inject(TokenService);
  return guardService.isLogin()
}

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'turmas', loadComponent: () => import('./pages/turmas/turmas.component').then((c) => c.TurmasComponent)},
  { path: 'colaboradores', loadComponent: () => import('./pages/colaboradores/colaboradores.component').then((c) => c.ColaboradoresComponent)},
  { path: 'alunos', loadComponent: () => import('./pages/alunos/alunos.component').then((c) => c.AlunosComponent)},
  { path: 'central', loadComponent: () => import('./pages/central/central.component').then((c) => c.CentralComponent)},
  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then((c) => c.PerfilUsuarioComponent)},
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
