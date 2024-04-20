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
    this.navbarService.setTitle('Viajar');
    this.navbarService.showBtnViajar.next(false);
    this.menuService.setSelected({icon: 'luggage', label: 'Viajar', route: '/admin/viajar', checked: true});
  }
}
