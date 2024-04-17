import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../shared/list/list.component';
import { PaginatorComponent } from '../../../../../shared/paginator/paginator.component';
import { SidebarComponent } from '../../../../../shared/sidebar/sidebar.component';
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { Status, StatusCircleComponent } from '../../../../../shared/status-circle/status-circle.component';
import { TabsComponent } from '../../../../../shared/tabs/tabs.component';
import { SidebarNovaCentralCustoComponent } from './components/sidebar-nova-central-custo/sidebar-nova-central-custo.component';
import { TableComponent } from "../../../../../shared/table/table.component";
import { HeaderTableComponent } from "../../../../../shared/table/components/header-table/header-table.component";
import { HeaderTableDataComponent } from "../../../../../shared/table/components/header-table-data/header-table-data.component";
import { ItemTableComponent } from "../../../../../shared/table/components/item-table/item-table.component";
import { TableDataComponent } from "../../../../../shared/table/components/table-data/table-data.component";
import { CentralCustoDetailsComponent } from "./components/central-custo-details/central-custo-details.component";
import { CentralCustoService } from './central-custo.service';

@Component({
    selector: 'central-custo',
    standalone: true,
    templateUrl: './central-custo.component.html',
    styleUrl: './central-custo.component.scss',
    imports: [
        TabsComponent,
        InputIconComponent,
        ButtonComponent,
        CommonModule,
        SidebarComponent,
        PaginatorComponent,
        ListComponent,
        ItemListComponent,
        HeaderColComponent,
        ItemDataComponent,
        HeaderListComponent,
        StatusCircleComponent,
        TableComponent,
        HeaderTableComponent,
        HeaderTableDataComponent,
        ItemTableComponent,
        TableDataComponent,
        CentralCustoDetailsComponent
    ]
})
export class CetralCustoComponent {

  isList = this.service.showlist;

  data = [
    {id: 1, nome: 'Diretoria', createdAt: '15/03/2024', updatedAt: '15/03/2024', orcamento: 50000, status: Status.ATIVA, actions: ''},
    {id: 2, nome: 'Marketing', createdAt: '03/03/2024', updatedAt: '15/03/2024', orcamento: 25000, status: Status.INATIVA, actions: ''},
    {id: 3, nome: 'Gestores', createdAt: '02/03/2024',updatedAt: '15/03/2024', orcamento: 30000, status: Status.ATIVA, actions: ''},
    {id: 4, nome: 'Supervireos', createdAt: '20/03/2024',updatedAt: '15/03/2024', orcamento: 15000, status: Status.ATIVA, actions: ''},
  ]

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly service: CentralCustoService
  ){}

  adicionarCentralCusto() {
    this.sidebarService.openSide(SidebarNovaCentralCustoComponent)
  }



  showDetails(id: number) {
   this.service.showDetails.next(true);
   this.service.showlist.next(false); 
   this.service.idCentralSelected.next(id);
  }
}
