import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-aprovacoes',
  standalone: true,
  host: {class:'main'},
  imports: [],
  templateUrl: './aprovacoes.component.html',
  styleUrl: './aprovacoes.component.scss'
})
export class AprovacoesComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Aprovações');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'task_alt', label: 'Aprovações', route: '/admin/aprovacoes', checked: true});
  }
}
