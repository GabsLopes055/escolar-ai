import { Component, Input } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  host: {class: 'main'},
  imports: [TabsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  @Input() title: string = '';

  tabs: Tab[] = [
    {icon: 'language', label: 'Geral', value: 'geral', selected: false},
    {icon: 'flight', label: 'Voos', value: 'voos', selected: false},
    {icon: 'domain', label: 'Hotéis', value: 'hoteis', selected: false},
  ]
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Dashboard');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', checked: true});
  }

  chosenTab(tab: string) {
    console.log(tab)
  }
}
