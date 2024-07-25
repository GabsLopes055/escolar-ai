import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { TableComponent } from '../../../../../../../shared/table/table.component';
import { HeaderTableComponent } from '../../../../../../../shared/table/components/header-table/header-table.component';
import { HeaderTableDataComponent } from '../../../../../../../shared/table/components/header-table-data/header-table-data.component';
import { ItemTableComponent } from '../../../../../../../shared/table/components/item-table/item-table.component';
import { TableDataComponent } from '../../../../../../../shared/table/components/table-data/table-data.component';
import { Status, StatusCircleComponent } from '../../../../../../../shared/status-circle/status-circle.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { PaginatorComponent } from '../../../../../../../shared/paginator/paginator.component';
import { OptionSelect, SelectComponent } from '../../../../../../../shared/select/select.component';
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { SidebarHistoricoComponent } from './components/sidebar-historico/sidebar-historico.component';

@Component({
  selector: 'historico-central-custo',
  standalone: true,
  imports: [
    TableComponent,
    HeaderTableComponent,
    HeaderTableDataComponent,
    ItemTableComponent,
    TableDataComponent,
    StatusCircleComponent,
    ButtonComponent,
    PaginatorComponent,
    SelectComponent
  ],
  templateUrl: './historico-central-custo.component.html',
  styleUrl: './historico-central-custo.component.scss'
})
export class HistoricoCentralCustoComponent implements OnInit {

  data = [
    {id: 1,nome: 'Jonathan Souza',createdAt: '15/03/2024',updatedAt: '15/03/2024',orcamento: 50000,status: Status.ATIVO,actions: '',},
    {id: 2,nome: 'Guilherme Nunes',createdAt: '03/03/2024',updatedAt: '15/03/2024',orcamento: 25000,status: Status.INATIVO, actions: '',},
    {id: 3,nome: 'Jonathan Souza',createdAt: '02/03/2024',updatedAt: '15/03/2024',orcamento: 30000,status: Status.ATIVO,actions: '',},
    {id: 4,nome: 'Jonathan Souza',createdAt: '20/03/2024',updatedAt: '15/03/2024',orcamento: 15000,status: Status.ATIVO,actions: '',},
  ];

  options: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Aprovada', value: null },
    { label: 'Cancelada', value: null },
    { label: 'Pendente', value: null },
    { label: 'Reprovada', value: null },
  ];


  select = new FormControl();

  constructor(
    private readonly sidebarService: SidebarService
  ) {
    this.campoSelect()
  }

  ngOnInit(): void {

  }

  protected readonly Status = Status;

  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual

  openHistorico(id: number) {
    this.sidebarService.openSideWithData(SidebarHistoricoComponent, id);
  }

  campoSelect() {
    this.select.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      console.log('retornar com o filtro: ' + value);
      // this.filtro.statusUser = value
      // this.listenViajantes()
    });
  }

  // changePages(pagina: number) {
  //   this.filtro.pagina = pagina;
  //   this.listenViajantes();
  // }

}
