import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { VoosComponent } from './components/voos/voos.component';
import { HoteisComponent } from './components/hoteis/hoteis.component';
import { PacotesComponent } from './components/pacotes/pacotes.component';

@Component({
  selector: 'app-viajar',
  standalone: true,
  host: {class: 'main'},
  imports: [
    TabsComponent,
    VoosComponent,
    HoteisComponent,
    PacotesComponent
  ],
  templateUrl: './viajar.component.html',
  styleUrl: './viajar.component.scss'
})
export class ViajarComponent implements OnInit {

  opcaoSelecionada = '';

  tabs: Tab[] = [
    {icon: 'airplanemode_active', label: 'Voos', value: 'voos', selected: false},
    {icon: 'corporate_fare', label: 'Hotéis', value: 'hoteis', selected: false},
    {icon: 'deck', label: 'Pacotes', value: 'pacotes', selected: false},
  ]

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.navbarService.setTitle('Solicitar Viagem');
    this.navbarService.showBtnViajar.next(false);
    this.menuService.setSelected({icon: 'luggage', label: 'Solicitar Viagens', route: '/admin/viajar', checked: true});
  }

  chosenTab(tab: string) {
    this.opcaoSelecionada = tab;
  }
}
