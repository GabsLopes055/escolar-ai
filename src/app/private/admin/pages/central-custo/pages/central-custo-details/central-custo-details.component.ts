import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

import { SolicitacaoUserRequest, Status } from '../../../../../../models/user.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { OptionSelect, SelectComponent } from '../../../../../../shared/select/select.component';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { StatusCircleComponent } from '../../../../../../shared/status-circle/status-circle.component';
import {
  HeaderTableDataComponent,
} from '../../../../../../shared/table/components/header-table-data/header-table-data.component';
import { HeaderTableComponent } from '../../../../../../shared/table/components/header-table/header-table.component';
import { ItemTableComponent } from '../../../../../../shared/table/components/item-table/item-table.component';
import { TableDataComponent } from '../../../../../../shared/table/components/table-data/table-data.component';
import { TableComponent } from '../../../../../../shared/table/table.component';
import { Tab, TabsComponent } from '../../../../../../shared/tabs/tabs.component';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { ViajantesService } from '../../../viajantes/viajantes.service';
import { CentralCustoService } from '../../central-custo.service';
import { CentralCustoDetailsService } from './central-custo-details.service';
import { EquipeCentralCustoComponent } from './equipe-central-custo/equipe-central-custo.component';
import { HistoricoCentralCustoComponent } from './historico-central-custo/historico-central-custo.component';
import { SolicitacoesCentralCustoComponent } from './solicitacoes-central-custo/solicitacoes-central-custo.component';


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
    TabsComponent,
    HeaderColComponent,
    HeaderListComponent,
    ItemDataComponent,
    ItemListComponent,
    ListComponent,
    SelectComponent,
    HistoricoCentralCustoComponent,
    EquipeCentralCustoComponent,
    SolicitacoesCentralCustoComponent
],
})
export class CentralCustoDetailsComponent implements OnDestroy {

  tabs: Tab[] = [
    {icon: 'receipt_long', label: 'Histórico', value: 'historico', selected: false},
    {icon: 'check_circle', label: 'Solicitações', value: 'solicitacoes', selected: false},
    { icon: 'person', label: 'Equipe', value: 'equipe', selected: false},
  ];

  actionsCentral: OptionSelect[] = [
    { label: 'Detalhes', value: null },
    { label: 'Editar', value: null },
    { label: 'Excluir', value: null },
  ];

  pesquisa = new FormControl();
  empresaId!: number;
  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  usuarios: any[] = [];
  subscription = new Subscription();
  tabSelecionada: string = this.tabs[0].value;
  centralCustoSelecionada = 0

  filtro: SolicitacaoUserRequest = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    nome: null,
    email: null,
    role: null,
    statusUser: null,
    empresaId: null,
  };
  constructor(
    private readonly service: CentralCustoService,
    private readonly sidebarService: SidebarService,
    private readonly viajantesService: ViajantesService,
    private readonly usuarioService: UserService,
    private readonly toast: ToastService,
    private readonly serviceEquipe: CentralCustoDetailsService
  ) {
  }
  protected readonly Status = Status;

  ngOnInit(): void {
    this.service.idCentralSelected.subscribe(id => {
      this.centralCustoSelecionada = id as number;
    })
    this.campoPesquisa();
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.listenViajantes();
    }
  }

  listenViajantes() {
    this.viajantesService.listarPor(this.filtro).subscribe({
      next: (integrantes) => {
        this.totalItems = integrantes.totalCount;
        this.usuarios = integrantes.itens;
      },
    });
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      if (value == '') {
        this.filtro.nome = null;
      } else {
        this.filtro.nome = value;
      }
      this.listenViajantes();
    });
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

  changePages(pagina: number) {
    this.filtro.pagina = pagina;
    this.listenViajantes();
  }


}
