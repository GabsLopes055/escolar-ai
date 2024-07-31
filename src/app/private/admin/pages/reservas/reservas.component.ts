import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { DividerComponent } from '../../../../shared/divider/divider.component';
import { ViagensComponent } from './components/viagens/viagens.component';
import { PacotesComponent } from './components/pacotes/pacotes.component';
import { HoteisComponent } from './components/hoteis/hoteis.component';
import { ChipsComponent } from '../../../../shared/chips/chips.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  host: { class: 'main' },
  imports: [
    TabsComponent,
    ButtonComponent,
    DividerComponent,
    ViagensComponent,
    PacotesComponent,
    HoteisComponent,
    ChipsComponent,
  ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss',
})
export class ReservasComponent implements OnInit {
  tabSelecionada: string = '';

  tabs: Tab[] = [
    { icon: 'flight', label: 'Voos', value: 'voos', selected: false },
    { icon: 'domain', label: 'Hotéis', value: 'hoteis', selected: false },
    { icon: 'deck', label: 'Pacotes', value: 'pacotes', selected: false },
  ];

  selectTodos: boolean = false;
  selectPendentes: boolean = false;
  selectAprovadas: boolean = false;
  selectCanceladas: boolean = false;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Reservas');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({
      icon: 'date_range',
      label: 'Minhas Reservas',
      route: '/admin/reservas',
      checked: true,
    });
  }
  ngOnInit(): void {
    this.selectTodos = true;
  }

  chosenTab(tab: string) {
    this.tabSelecionada = tab;
  }

  setFilterStatus(label: string) {

    this.selectTodos = false;
    this.selectPendentes = false;
    this.selectAprovadas = false;
    this.selectCanceladas = false;

    if (label === 'Todos') {
      this.selectTodos = true;
    } else if (label === 'Pendentes') {
      this.selectPendentes = true;
    } else if (label === 'Aprovadas') {
      this.selectAprovadas = true;
    } else {
      this.selectCanceladas = true;
    }
  }

  statusReserva = {
    TODOS: 'Todos',
    PENDENTES: 'Pendentes',
    APROVADAS: 'Aprovadas',
    CANCELADAS: 'Canceladas',
  };

  refresh() {}
}
