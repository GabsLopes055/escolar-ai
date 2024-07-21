import { debounceTime, Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { TableComponent } from '../../../../../../../shared/table/table.component';
import { HeaderTableComponent } from '../../../../../../../shared/table/components/header-table/header-table.component';
import { HeaderTableDataComponent } from '../../../../../../../shared/table/components/header-table-data/header-table-data.component';
import { TableDataComponent } from '../../../../../../../shared/table/components/table-data/table-data.component';
import { ItemTableComponent } from '../../../../../../../shared/table/components/item-table/item-table.component';
import {
  Status,
  StatusCircleComponent,
} from '../../../../../../../shared/status-circle/status-circle.component';
import { CurrencyPipe } from '@angular/common';
import { PaginatorComponent } from '../../../../../../../shared/paginator/paginator.component';
import { InputIconComponent } from '../../../../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { CentralCustoService } from '../../central-custo.service';
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { SidebarHistoricoComponent } from './components/sidebar-historico/sidebar-historico.component';
import {
  Tab,
  TabsComponent,
} from '../../../../../../../shared/tabs/tabs.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../../shared/select/select.component';
import { FormControl } from '@angular/forms';
import { SolicitacaoUserRequest } from '../../../../../../../models/user.interface';
import { ViajantesService } from '../../../../viajantes/viajantes.service';
import { ListComponent } from '../../../../../../../shared/list/list.component';
import { ItemListComponent } from '../../../../../../../shared/list/components/item-list/item-list.component';
import { HeaderColComponent } from '../../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../../shared/list/components/item-data/item-data.component';
import { UserService } from '../../../../../../../shared/services/user/user.service';
import { UpdateUserComponent } from '../../../../viajantes/components/update-user/update-user.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';
import { ToastService } from '../../../../../../../shared/toast/toast.service';
import { DesvincularUsuarioComponent } from './components/desvincular-usuario/desvincular-usuario.component';
import { VincularUsuarioComponent } from './components/vincular-usuario/vincular-usuario.component';

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
  ],
})
export class CentralCustoDetailsComponent implements OnDestroy {
  data = [
    {
      id: 1,
      nome: 'Jonathan Souza',
      createdAt: '15/03/2024',
      updatedAt: '15/03/2024',
      orcamento: 50000,
      status: Status.ATIVA,
      actions: '',
    },
    {
      id: 2,
      nome: 'Guilherme Nunes',
      createdAt: '03/03/2024',
      updatedAt: '15/03/2024',
      orcamento: 25000,
      status: Status.INATIVA,
      actions: '',
    },
    {
      id: 3,
      nome: 'Jonathan Souza',
      createdAt: '02/03/2024',
      updatedAt: '15/03/2024',
      orcamento: 30000,
      status: Status.ATIVA,
      actions: '',
    },
    {
      id: 4,
      nome: 'Jonathan Souza',
      createdAt: '20/03/2024',
      updatedAt: '15/03/2024',
      orcamento: 15000,
      status: Status.ATIVA,
      actions: '',
    },
  ];

  tabs: Tab[] = [
    {
      icon: 'receipt_long',
      label: 'Histórico',
      value: 'historico',
      selected: false,
    },
    {
      icon: 'check_circle',
      label: 'Solicitações',
      value: 'solicitacoes',
      selected: false,
    },
    { icon: 'person', label: 'Equipe', value: 'equipe', selected: false },
  ];

  options: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Aprovada', value: null },
    { label: 'Cancelada', value: null },
    { label: 'Pendente', value: null },
    { label: 'Reprovada', value: null },
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
  select = new FormControl();
  tabSelecionada: string = this.tabs[0].value;

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
    private readonly modal: ModalService,
    private readonly toast: ToastService
  ) {
    this.subscription.add(
      this.service.idCentralSelected.subscribe((valor) => {
        console.log(valor);
      })
    );
  }

  ngOnInit(): void {
    this.campoPesquisa();
    this.campoSelect();
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

  details(id: number) {
    const sideRef = this.sidebarService.openSideWithData(
      UpdateUserComponent,
      id
    );
    sideRef.afterClosed.subscribe((value) => {
      if (value) {
        this.listenViajantes();
      }
    });
  }

  vincularUsuario() {
    const sideRef = this.sidebarService.openSideWithData(VincularUsuarioComponent);
  }

  desvincularUsuario(id: number) {
    const modalRef = this.modal.open(DesvincularUsuarioComponent);
    modalRef.afterClosed.subscribe((value) => {
      if (value) {
        this.toast.notify({
          message: 'Verificar Endpoint para desvincular',
          type: 'INFO',
        });
        // this.viajantesService.delete(id).subscribe({
        //   next: () => {
        //     this.toast.notify({
        //       message: 'Usuário deletado com sucesso.',
        //       type: 'SUCCESS',
        //     });
        //     this.listenViajantes();
        //   },
        //   error: (erro) => {
        //     this.toast.notify({
        //       message: `${erro.error.menssagem}`,
        //       type: 'ERROR',
        //     });
        //   },
        // });
      }
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

  campoSelect() {
    this.select.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      console.log('retornar com o filtro: ' + value);
      // this.filtro.statusUser = value
      // this.listenViajantes()
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

  openHistorico(id: number) {
    this.sidebarService.openSideWithData(SidebarHistoricoComponent, id);
  }

  changePages(pagina: number) {
    this.filtro.pagina = pagina;
    this.listenViajantes();
  }

  protected readonly Status = Status;
}
