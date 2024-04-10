import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configurations',
  standalone: true,
  host: {class: 'main'},
  imports: [TabsComponent, InputIconComponent, ButtonComponent, CommonModule],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.scss'
})
export class ConfigurationsComponent {

  tabs: Tab[] = [
    {icon: 'calculate', label: 'Central de custo', value: 'central_de_custo', selected: false},
    {icon: 'credit_card', label: 'Cartões', value: 'cartoes', selected: false},
    {icon: 'style', label: 'Meu plano', value: 'meu_plano', selected: false},
  ]

  opcaoSelecionada = '';

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Configurações');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: true});
  }

  chosenTab(tab: string) {
    this.opcaoSelecionada = tab;
  }
}
