import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../../../shared/sidebar/sidebar.component";
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { TableComponent } from "../../../../shared/table/table.component";
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { ListComponent } from "../../../../shared/list/list.component";
import { ItemListComponent } from '../../../../shared/list/components/item-list/item-list.component';
import { HeaderColComponent } from "../../../../shared/list/components/header-col/header-col.component";
import { ItemDataComponent } from "../../../../shared/list/components/item-data/item-data.component";
import { HeaderListComponent } from "../../../../shared/list/components/header-list/header-list.component";
import { Status, StatusCircleComponent } from "../../../../shared/status-circle/status-circle.component";
import { ItemTableComponent } from "../../../../shared/table/components/item-table/item-table.component";
import { TableDataComponent } from "../../../../shared/table/components/table-data/table-data.component";
import { HeaderTableComponent } from "../../../../shared/table/components/header-table/header-table.component";
import { HeaderTableDataComponent } from "../../../../shared/table/components/header-table-data/header-table-data.component";
import { PerfilAcessoComponent } from "./perfil-acesso/perfil-acesso.component";
import { CartoesComponent } from "./cartoes/cartoes.component";
import { PlanosComponent } from "./planos/planos.component";

@Component({
    selector: 'app-configurations',
    standalone: true,
    host: { class: 'main' },
    templateUrl: './configurations.component.html',
    styleUrl: './configurations.component.scss',
    imports: [
        TabsComponent,
        InputIconComponent,
        ButtonComponent,
        CommonModule,
        SidebarComponent,
        TableComponent,
        PaginatorComponent,
        ListComponent,
        ItemListComponent,
        HeaderColComponent,
        ItemDataComponent,
        HeaderListComponent,
        StatusCircleComponent,
        ItemTableComponent,
        TableDataComponent,
        HeaderTableComponent,
        HeaderTableDataComponent,
        PerfilAcessoComponent,
        CartoesComponent,
        PlanosComponent
    ]
})
export class ConfigurationsComponent {
  tabs: Tab[] = [
    // {icon: 'calculate', label: 'Central de custo', value: 'central_de_custo', selected: false},
    {icon: 'person', label: 'Perfil de acesso', value: 'perfil_acesso', selected: false},
    {icon: 'credit_card', label: 'Cartões', value: 'cartoes', selected: false},
    {icon: 'style', label: 'Meu plano', value: 'meu_plano', selected: false},
  ]

  opcaoSelecionada = '';
  Status: any;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly sidebarService: SidebarService
  ) {
    this.navbarService.setTitle('Configurações');
    navbarService.showBtnViajar.next(true);
    this.menuService.setSelected({icon: 'settings', label: 'Configurações', route: '/admin/settings', checked: true});
  }

  chosenTab(tab: string) {
    this.opcaoSelecionada = tab;
  }
}
