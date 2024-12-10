import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Alunos');
    menuService.setSelected({
      icon: 'school',
      label: 'Alunos',
      route: '/admin/alunos',
      checked: true,
    });
  }

}
