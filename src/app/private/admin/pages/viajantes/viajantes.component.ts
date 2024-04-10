import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-viajantes',
  standalone: true,
  host: {class: 'main'},
  imports: [],
  templateUrl: './viajantes.component.html',
  styleUrl: './viajantes.component.scss'
})
export class ViajantesComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Viajantes');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'person_4', label: 'Viajantes', route: '/admin/viajantes', checked: true});
  }
}
