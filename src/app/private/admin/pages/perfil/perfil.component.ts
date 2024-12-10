import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { PerfilComponent } from "../../../../shared/perfil/perfil.component";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { DividerComponent } from "../../../../shared/divider/divider.component";
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { AlterarSenhaComponent } from './components/alterar-senha/alterar-senha.component';
import { AlterarDadosComponent } from './components/alterar-dados/alterar-dados.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [PerfilComponent, ButtonComponent, DividerComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilUsuarioComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly sidebarService: SidebarService
  ) {
    navbarService.setTitle('Perfil');
    // menuService.setSelected({
    //   icon: 'badge',
    //   label: 'Colaboradores',
    //   route: '/admin/colaboradores',
    //   checked: true,
    // });
  }

  abrirModalAlterarSenha() {
    this.sidebarService.openSide(AlterarSenhaComponent);
  }
  abrirModalAlterarDados() {
    this.sidebarService.openSide(AlterarDadosComponent);
  }
}
