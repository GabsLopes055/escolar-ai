import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../../../shared/sidebar/sidebar.component";
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { SidebarNovaCentralCustoComponent } from './components/sidebar-nova-central-custo/sidebar-nova-central-custo.component';
import { TableComponent } from "../../../../shared/table/table.component";
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { ListComponent } from "../../../../shared/list/list.component";
import { ItemListComponent } from '../../../../shared/list/components/item-list/item-list.component';
import { HeaderColComponent } from "../../../../shared/list/components/header-col/header-col.component";
import { ItemDataComponent } from "../../../../shared/list/components/item-data/item-data.component";
import { HeaderListComponent } from "../../../../shared/list/components/header-list/header-list.component";

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
        HeaderListComponent
    ]
})
export class ConfigurationsComponent {

  headers: string[] = ['Nome', 'Data de Criaçào', 'Data de finalização','Orçamento', 'Status', 'Ações'];
  data = [
    {nome: 'Diretoria', createdAt: '15/03/2024', updatedAt: '15/03/2024', orcamento: 50000, status: 'ATIVO', actions: ''},
    {nome: 'Marketing', createdAt: '03/03/2024', updatedAt: '15/03/2024', orcamento: 25000, status: 'ATIVO', actions: ''},
    {nome: 'Gestores', createdAt: '02/03/2024',updatedAt: '15/03/2024', orcamento: 30000, status: 'ATIVO', actions: ''},
    {nome: 'Supervireos', createdAt: '20/03/2024',updatedAt: '15/03/2024', orcamento: 15000, status: 'ATIVO', actions: ''},
  ]

  tabs: Tab[] = [
    {icon: 'calculate', label: 'Central de custo', value: 'central_de_custo', selected: false},
    {icon: 'credit_card', label: 'Cartões', value: 'cartoes', selected: false},
    {icon: 'style', label: 'Meu plano', value: 'meu_plano', selected: false},
  ]

  opcaoSelecionada = '';

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

  adicionarCentralCusto() {
    this.sidebarService.openSide(SidebarNovaCentralCustoComponent)
  }
}
