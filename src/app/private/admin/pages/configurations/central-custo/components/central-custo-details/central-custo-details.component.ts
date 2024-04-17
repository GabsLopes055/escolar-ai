import { Component } from '@angular/core';
import { TableComponent } from "../../../../../../../shared/table/table.component";
import { HeaderTableComponent } from "../../../../../../../shared/table/components/header-table/header-table.component";
import { HeaderTableDataComponent } from "../../../../../../../shared/table/components/header-table-data/header-table-data.component";
import { TableDataComponent } from "../../../../../../../shared/table/components/table-data/table-data.component";
import { ItemTableComponent } from "../../../../../../../shared/table/components/item-table/item-table.component";
import { Status, StatusCircleComponent } from "../../../../../../../shared/status-circle/status-circle.component";
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'central-custo-details',
    standalone: true,
    templateUrl: './central-custo-details.component.html',
    styleUrl: './central-custo-details.component.scss',
    imports: [TableComponent, HeaderTableComponent, HeaderTableDataComponent, TableDataComponent, ItemTableComponent, StatusCircleComponent, CurrencyPipe]
})
export class CentralCustoDetailsComponent {


  data = [
    {nome: 'Jonathan Souza', createdAt: '15/03/2024', updatedAt: '15/03/2024', orcamento: 50000, status: Status.ATIVA, actions: ''},
    {nome: 'Guilherme Nunes', createdAt: '03/03/2024', updatedAt: '15/03/2024', orcamento: 25000, status: Status.INATIVA, actions: ''},
    {nome: 'Jonathan Souza', createdAt: '02/03/2024',updatedAt: '15/03/2024', orcamento: 30000, status: Status.ATIVA, actions: ''},
    {nome: 'Jonathan Souza', createdAt: '20/03/2024',updatedAt: '15/03/2024', orcamento: 15000, status: Status.ATIVA, actions: ''},
  ]
}
