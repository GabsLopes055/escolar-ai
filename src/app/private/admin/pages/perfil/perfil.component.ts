import { Tab, TabsComponent } from './../../../../shared/tabs/tabs.component';
import { Component, OnInit } from '@angular/core';

import { NavbarService } from './../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { DadosEmpresariaisComponent } from './components/dados-empresariais/dados-empresariais.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../models/user.interface';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    TabsComponent,
    DadosPessoaisComponent,
    DadosEmpresariaisComponent,
    NotificacoesComponent
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {

  abrirTabSelecionada: string = '';
  usuario!: User | null;
  tabs!: Tab[];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly userService: UserService
  ){
    navbarService.setTitle('Perfil');
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
    this.usuario = userService.user;
  }
  ngOnInit(): void {
    this.mostrarTabsPermissoes();
  }

  mostrarTabsPermissoes() {
    switch(this.usuario?.role){
      case ('ADMIN') :
        this.tabs = [
          {icon: 'person', label: 'Dados Pessoais', value: 'dados-pessoais', selected: false},
          {icon: 'source_environment', label: 'Dados Empresariais', value: 'dados-empresariais', selected: false},
          {icon: 'notifications', label: 'Notificações', value: 'notificacoes', selected: false}
        ];
        break;
      case('MANAGER'):
        this.tabs = [
          {icon: 'person', label: 'Dados Pessoais', value: 'dados-pessoais', selected: false},
          {icon: 'notifications', label: 'Notificações', value: 'notificacoes', selected: false}
        ];
        break;
      case('USER') :
        this.tabs = [
        {icon: 'person', label: 'Dados Pessoais', value: 'dados-pessoais', selected: false},
        {icon: 'notifications', label: 'Notificações', value: 'notificacoes', selected: false}
      ];
      break;
    }
  }

  abrirTab(value: any) {
    this.abrirTabSelecionada = value;
  }

}
