import { Component } from '@angular/core';
import { TableComponent } from "../../../../../../../shared/table/table.component";
import { HeaderTableComponent } from "../../../../../../../shared/table/components/header-table/header-table.component";
import { HeaderTableDataComponent } from "../../../../../../../shared/table/components/header-table-data/header-table-data.component";
import { TableDataComponent } from "../../../../../../../shared/table/components/table-data/table-data.component";
import { StatusCircleComponent } from "../../../../../../../shared/status-circle/status-circle.component";
import { ButtonComponent } from "../../../../../../../shared/button/button.component";
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { SolicitacaoAprovacaoComponent } from '../../../../../../../shared/solicitacao-aprovacao/solicitacao-aprovacao.component';
import { ItemTableComponent } from "../../../../../../../shared/table/components/item-table/item-table.component";
import { Status } from '../../../../../../../models/user.interface';
import { OptionSelect, SelectComponent } from "../../../../../../../shared/select/select.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'solicitacoes-central-custo',
  standalone: true,
  imports: [TableComponent, HeaderTableComponent, HeaderTableDataComponent, TableDataComponent, StatusCircleComponent, ButtonComponent, ItemTableComponent, SelectComponent],
  templateUrl: './solicitacoes-central-custo.component.html',
  styleUrl: './solicitacoes-central-custo.component.scss'
})
export class SolicitacoesCentralCustoComponent {

  data = [
    {id: 1,nome: 'Jonathan Souza',createdAt: '15/03/2024',updatedAt: '15/03/2024',orcamento: 50000,status: Status.ATIVO,actions: '',},
    {id: 2,nome: 'Guilherme Nunes',createdAt: '03/03/2024',updatedAt: '15/03/2024',orcamento: 25000,status: Status.INATIVO, actions: '',},
    {id: 3,nome: 'Jonathan Souza',createdAt: '02/03/2024',updatedAt: '15/03/2024',orcamento: 30000,status: Status.ATIVO,actions: '',},
    {id: 4,nome: 'Jonathan Souza',createdAt: '20/03/2024',updatedAt: '15/03/2024',orcamento: 15000,status: Status.ATIVO,actions: '',},
  ];

  optionStatus: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: Status.ATIVO },
    { label: 'Inativos', value: Status.INATIVO },
  ];

  optionCentral: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: Status.ATIVO },
    { label: 'Inativos', value: Status.INATIVO },
  ];

  selectStatus = new FormControl();
  selecCentral = new FormControl();

  constructor(
    private readonly sidebarService: SidebarService
  ) {

  }

  openHistoricoSolicitacoes() {
    this.sidebarService.openSide(SolicitacaoAprovacaoComponent);
  }
}
