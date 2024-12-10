import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-central',
  standalone: true,
  imports: [],
  templateUrl: './central.component.html',
  styleUrl: './central.component.scss'
})
export class CentralComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Central');
    menuService.setSelected({
      icon: 'nest_cam_wired_stand',
      label: 'Central',
      route: '/admin/central',
      checked: true,
    });
  }

}
