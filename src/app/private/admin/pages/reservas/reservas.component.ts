import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  host: {class: 'main'},
  imports: [TabsComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {

  tabs: Tab[] = [
    {icon: 'flight', label: 'Voos', value: 'voos', selected: false},
    {icon: 'domain', label: 'Hotéis', value: 'hoteis', selected: false},
  ]

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Reservas');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'date_range', label: 'Minhas Reservas', route: '/admin/reservas', checked: true});
  }

  chosenTab(tab: string) {
    console.log(tab)
  }
}
