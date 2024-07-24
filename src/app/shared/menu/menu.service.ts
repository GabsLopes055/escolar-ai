import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Menu } from './menu.component';
import { UserService } from '../services/user/user.service';
import { Role, User } from '../../models/user.interface';
import { PerfilAcessoService } from '../../private/admin/pages/configurations/perfil-acesso/perfil-acesso.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _menu = new BehaviorSubject<Menu[]>([]);

  constructor(
    private readonly userService: UserService,
    private readonly perfilAcessoService: PerfilAcessoService
  ) {
    this.updateMenu();
  }

   setMenu(menu: Menu[]) {
    this._menu.next(menu);
   }

   setSelected(menu?: Menu) {


    let lista:Menu[] = [];

    this._menu.subscribe(menu => lista = menu);

    lista = lista.map(item => {
      if(item.checked) {
        item.checked = false;
      }
      if(menu && item.label == menu.label) {
        item.checked = true;
      }
      return item;
    });
    this._menu.next(lista);
   }

   updateMenu() {

      const usuario = this.userService.user;

      if(usuario != null && usuario.role == Role.ADMIN) {
        this._menu.next([
          {icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', checked: false},
          {icon: 'luggage', label: 'Solicitar Viagens', route: '/admin/viajar', checked: false},
          {icon: 'date_range', label: 'Minhas Reservas', route: '/admin/reservas', checked: false},
          {icon: 'task_alt', label: 'Aprovações', route: '/admin/aprovacoes', checked: false},
          {icon: 'calculate', label: 'Central de Custo', route: '/admin/central-custo', checked: false},
          {icon: 'person_4', label: 'Colaboradores', route: '/admin/viajantes', checked: false},
          {icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: false},
          {icon: 'headset_mic', label: 'Suporte', route: '/admin/suporte-atendimento', checked: false}
        ])
      }



      if(usuario != null && (usuario.role == Role.MANAGER || usuario.role == Role.USER)) {


        this.perfilAcessoService.buscar(this.userService.usuarioInstance?.empresaId).subscribe({

          next: (permissoes) => {

            let menu: Menu[] = [];

            if(usuario != null && usuario.role == Role.MANAGER) {
              menu.push({icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', checked: false});
              menu.push({icon: 'luggage', label: 'Solicitar Viagens', route: '/admin/viajar', checked: false});
              menu.push({icon: 'date_range', label: 'Minhas Reservas', route: '/admin/reservas', checked: false});
              menu.push({icon: 'task_alt', label: 'Aprovações', route: '/admin/aprovacoes', checked: false})

              if(permissoes.gestorCriaCentral) {
                menu.push({icon: 'calculate', label: 'Central de Custo', route: '/admin/central-custo', checked: false});
              }

              if(permissoes.gestorConvida) {
                menu.push({icon: 'person_4', label: 'Colaboradores', route: '/admin/viajantes', checked: false});
              }
              if(permissoes.gestorVerMenu) {
                menu.push({icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: false});
              }

            } else {

              menu.push({icon: 'date_range', label: 'Minhas Reservas', route: '/admin/reservas', checked: false});

              if(permissoes.passageiroReserva) {
                menu.push({icon: 'luggage', label: 'Solicitar Viagens', route: '/admin/viajar', checked: false});
              }
            }

            console.log('passei aqui')

            this._menu.next(menu);

          }
        })

      }


      // if(usuario != null && (usuario.role == Role.ADMIN || usuario.role == Role.MANAGER)) {
      //   this._menu.next([
      //     {icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', checked: false},
      //     {icon: 'luggage', label: 'Viajar', route: '/admin/viajar', checked: false},
      //     {icon: 'date_range', label: 'Reservas', route: '/admin/reservas', checked: false},
      //     {icon: 'calculate', label: 'Central de Custo', route: '/admin/central-custo', checked: false},
      //     {icon: 'person_4', label: 'Integrantes', route: '/admin/viajantes', checked: false},
      //     {icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: false},
      //   ])
      // }

      // if(usuario != null && usuario.role == Role.USER) {
      //   this._menu.next([
      //     {icon: 'luggage', label: 'Viajar', route: '/admin/viajar', checked: false},
      //     {icon: 'date_range', label: 'Reservas', route: '/admin/reservas', checked: false},
      //     {icon: 'person_4', label: 'Viajantes', route: '/admin/viajantes', checked: false},
      //   ])
      // }

   }
}
