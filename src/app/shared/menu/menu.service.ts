import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Menu } from './menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  _menu = new BehaviorSubject<Menu[]>([]);
  constructor() {
    this.updateMenu();
  }

   setMenu(menu: Menu[]) {
    this._menu.next(menu);
   }

   setSelected(menu?: Menu) {
    let lista:Menu[] = []
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
    const usuario = window.sessionStorage.getItem('usuario');
    if(usuario) {
      this._menu.next([
        {icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', checked: false},
        {icon: 'luggage', label: 'Viajar', route: '/admin/viajar', checked: false},
        {icon: 'date_range', label: 'Reservas', route: '/admin/reservas', checked: false},
        {icon: 'task_alt', label: 'Aprovações', route: '/admin/aprovacoes', checked: false},
        {icon: 'calculate', label: 'Central de Custo', route: '/admin/central-custo', checked: false},
        {icon: 'person_4', label: 'Viajantes', route: '/admin/viajantes', checked: false},
        {icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: false},
      ])
    }
   }
}
