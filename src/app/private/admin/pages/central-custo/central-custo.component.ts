import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { CetralCustoComponent } from "../configurations/central-custo/central-custo.component";

@Component({
    selector: 'app-central-custo',
    standalone: true,
    host: { class: 'main' },
    templateUrl: './central-custo.component.html',
    styleUrl: './central-custo.component.scss',
    imports: [CetralCustoComponent]
})
export class CentralCustoComponent {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Central de custo');
    // navbarService.showBtnViajar.next(false);
    menuService.setSelected({icon: 'calculate', label: 'Central de Custo', route: '/admin/central-custo', checked: true});
  }
}
