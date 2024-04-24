import { MenuService } from './../../../../shared/menu/menu.service';
import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { UserService } from '../../../../shared/services/user/user.service';

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
    private readonly menuService: MenuService,
    private readonly userService: UserService
  ) {
    const usuario = this.userService.user;
    const firstName = usuario?.nome.split(" ")[0]
    navbarService.setTitle(`Hey, ${firstName}`);
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
  }
}
