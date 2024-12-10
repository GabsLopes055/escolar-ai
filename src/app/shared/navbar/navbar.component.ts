import { MenuService } from './../menu/menu.service';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavbarService } from './navbar.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { PerfilComponent } from '../perfil/perfil.component';
import { TooltipDirective } from '../directives/tooltip.directive';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    ButtonComponent,
    CommonModule,
    RouterLink,
    PerfilComponent,
    TooltipDirective,
  ],
})
export class NavbarComponent {
  isDetail = false;
  title: any = '';
  isViajar = this.service.showBtnViajar;
  nameUser: string | undefined = 'Joana';

  constructor(
    private readonly service: NavbarService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly menuService: MenuService
  ) {
    this.title = service.title;
    // const usuario = this.userService.user;
    // const firstName = usuario?.nome.split(' ')[0];
    // this.nameUser = firstName;
  }

  showHideDetail() {
    this.isDetail = !this.isDetail;
  }

  visualizarPerfil() {
    this.router.navigate(['/admin/perfil'])
    this.showHideDetail();
  }

  logout() {
    window.sessionStorage.removeItem('token');
    this.isDetail = false;
    this.router.navigate(['/login']);
    this.menuService._menu.next([]);
  }
}
