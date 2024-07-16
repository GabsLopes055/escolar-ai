import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { TableComponent } from "../../../../../../../shared/table/table.component";
import { HeaderTableComponent } from "../../../../../../../shared/table/components/header-table/header-table.component";
import { HeaderTableDataComponent } from "../../../../../../../shared/table/components/header-table-data/header-table-data.component";
import { TableDataComponent } from "../../../../../../../shared/table/components/table-data/table-data.component";
import { ItemTableComponent } from "../../../../../../../shared/table/components/item-table/item-table.component";
import { Status, StatusCircleComponent } from "../../../../../../../shared/status-circle/status-circle.component";
import { CurrencyPipe } from '@angular/common';
import { PaginatorComponent } from "../../../../../../../shared/paginator/paginator.component";
import { InputIconComponent } from "../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../shared/button/button.component";
import { CentralCustoService } from '../../central-custo.service';
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { SidebarHistoricoComponent } from './components/sidebar-historico/sidebar-historico.component';
import {
  Tab,
  TabsComponent
} from "../../../../../../../shared/tabs/tabs.component";

@Component({
    selector: 'central-custo-details',
    standalone: true,
    templateUrl: './central-custo-details.component.html',
    styleUrl: './central-custo-details.component.scss',
  imports: [
    TableComponent,
    HeaderTableComponent,
    HeaderTableDataComponent,
    TableDataComponent,
    ItemTableComponent,
    StatusCircleComponent,
    CurrencyPipe,
    PaginatorComponent,
    InputIconComponent,
    ButtonComponent,
    TabsComponent]
})
export class CentralCustoDetailsComponent implements OnDestroy{


  data = [
    {id: 1, nome: 'Jonathan Souza', createdAt: '15/03/2024', updatedAt: '15/03/2024', orcamento: 50000, status: Status.ATIVA, actions: ''},
    {id: 2, nome: 'Guilherme Nunes', createdAt: '03/03/2024', updatedAt: '15/03/2024', orcamento: 25000, status: Status.INATIVA, actions: ''},
    {id: 3, nome: 'Jonathan Souza', createdAt: '02/03/2024',updatedAt: '15/03/2024', orcamento: 30000, status: Status.ATIVA, actions: ''},
    {id: 4, nome: 'Jonathan Souza', createdAt: '20/03/2024',updatedAt: '15/03/2024', orcamento: 15000, status: Status.ATIVA, actions: ''},
  ];

  tabs: Tab[] = [
    {icon: 'receipt_long', label: 'Histórico', value: 'historico', selected: false},
    {icon: 'person', label: 'Equipe', value: 'equipe', selected: false},
  ]

  subscription = new Subscription();

  tabSelecionada: string = this.tabs[0].value;

  constructor(
    private readonly service: CentralCustoService,
    private readonly sidebarService: SidebarService
  ) {
    this.subscription.add(
      this.service.idCentralSelected.subscribe(valor => {
        console.log(valor);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  chosenTab(tab: string) {
    this.tabSelecionada = tab;
  }
  back() {
    this.service.showDetails.next(false);
    this.service.showlist.next(true);
    this.service.idCentralSelected.next(null);
  }

  openHistorico(id: number) {
    this.sidebarService.openSideWithData(SidebarHistoricoComponent, id)
  }
}
