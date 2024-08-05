import { ViajantesService } from './viajantes.service';
import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Role } from '../../../../models/user.interface';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../shared/list/list.component';
import { MenuService } from '../../../../shared/menu/menu.service';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { OptionSelect, SelectComponent } from '../../../../shared/select/select.component';
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { Status, StatusCircleComponent } from '../../../../shared/status-circle/status-circle.component';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ConvitesComponent } from './pages/convites/convites.component';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-viajantes',
  standalone: true,
  host: { class: 'main' },
  imports: [
    ButtonComponent,
    CurrencyPipe,
    HeaderColComponent,
    HeaderListComponent,
    InputIconComponent,
    ItemDataComponent,
    ItemListComponent,
    ListComponent,
    PaginatorComponent,
    SelectComponent,
    StatusCircleComponent,
    TabsComponent,
    ColaboradoresComponent,
    ConvitesComponent
],
  templateUrl: './viajantes.component.html',
  styleUrl: './viajantes.component.scss',
})
export class ViajantesComponent implements OnInit {
  tabs: Tab[] = [
    {
      icon: 'receipt_long',
      label: 'Colaboradores',
      value: 'colaboradores',
      selected: false,
    },
    {
      icon: 'check_circle_outline',
      label: 'Convites',
      value: 'convites',
      selected: false,
    },
  ];

  opcaoTabSelecionada = '';

  selectStatus = new FormControl();
  selectPerfil = new FormControl();
  pesquisa = new FormControl();

  optionStatus: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: Status.ATIVO },
    { label: 'Inativos', value: Status.INATIVO },
  ];

  optionPerfil: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Administrador', value: Role.ADMIN },
    { label: 'Gestor', value: Role.MANAGER },
    { label: 'Passageiro', value: Role.USER },
  ];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly sidebarService: SidebarService,
    private readonly viajanteService: ViajantesService
  ) {
    this.navbarService.setTitle('Integrantes');
    navbarService.showBtnViajar.next(true);
    this.menuService.setSelected({
      icon: 'person_4',
      label: 'Colaboradores',
      route: '/admin/viajantes',
      checked: true,
    });
  }

  ngOnInit(): void {
    this.campoPesquisa();
    this.campoSelectStatus();
    this.campoSelectPerfil();
  }

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  novoUsuario() {
    this.sidebarService.openSide(CadastrarComponent);
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      this.viajanteService.inputBehavior.next(value);
    });
  }

  campoSelectStatus() {
    this.selectStatus.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      this.viajanteService.statusBehavior.next(value);
    });
  }

  campoSelectPerfil() {
    this.selectPerfil.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      this.viajanteService.perfilBehavior.next(value);
    });
  }
}
