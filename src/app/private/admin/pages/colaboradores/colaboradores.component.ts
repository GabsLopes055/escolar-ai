import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { ChipsComponent } from "../../../../shared/chips/chips.component";

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ButtonComponent, ChipsComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss',
})
export class ColaboradoresComponent {
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Colaboradores');
    menuService.setSelected({
      icon: 'badge',
      label: 'Colaboradores',
      route: '/admin/colaboradores',
      checked: true,
    });
  }
}
