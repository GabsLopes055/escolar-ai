import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-viajar',
  standalone: true,
  host: {class: 'main'},
  imports: [],
  templateUrl: './viajar.component.html',
  styleUrl: './viajar.component.scss'
})
export class ViajarComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Viajar');
    navbarService.showBtnViajar.next(false);
    menuService.setSelected({icon: 'luggage', label: 'Viajar', route: '/admin/viajar', checked: false});
  }
}
