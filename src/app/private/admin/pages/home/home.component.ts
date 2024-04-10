import { MenuService } from './../../../../shared/menu/menu.service';
import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  host: {class:'main'},
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Hey, Jonathan');
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
  }
}
