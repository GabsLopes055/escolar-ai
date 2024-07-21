import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { StatusCircleComponent } from '../../../../../shared/status-circle/status-circle.component';
import { Tab, TabsComponent } from '../../../../../shared/tabs/tabs.component';
import { SidebarNovaCentralCustoComponent } from './components/sidebar-nova-central-custo/sidebar-nova-central-custo.component';
import { TableComponent } from '../../../../../shared/table/table.component';
import { HeaderTableComponent } from '../../../../../shared/table/components/header-table/header-table.component';
import { HeaderTableDataComponent } from '../../../../../shared/table/components/header-table-data/header-table-data.component';
import { ItemTableComponent } from '../../../../../shared/table/components/item-table/item-table.component';
import { TableDataComponent } from '../../../../../shared/table/components/table-data/table-data.component';
import { CentralCustoDetailsComponent } from './components/central-custo-details/central-custo-details.component';
import { CentralCustoService } from './central-custo.service';
import {
  CentralDeCusto,
  CentralDeCustoSolicitacao,
  statusCentralCusto,
} from '../../../../../models/central-de-custo.interface';
import { UserService } from '../../../../../shared/services/user/user.service';
import { TooltipDirective } from '../../../../../shared/directives/tooltip.directive';
import { ModalService } from '../../../../../shared/modal/modal.service';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../shared/select/select.component';
import { ToastService } from '../../../../../shared/toast/toast.service';
import { EntityPaginated } from '../../../../../models/filtro-busca.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
    CentralCustoDetailsComponent,
    TooltipDirective,
    SelectComponent,
  ],
})
export class CetralCustoComponent implements OnInit, OnDestroy {
  isList = this.service.showlist;
  empresaId: number = 0;
  paginaAtual: number = 1;
  tamanhoPagina: number = 6;
  totalRegistro!: number;
  data: any[] = [];
  pesquisa = new FormControl();
  select = new FormControl();

  filtro: CentralDeCustoSolicitacao = {
    pagina: this.paginaAtual,
    tamanhoPagina: this.tamanhoPagina,
    statusCentralCusto: null,
    nome: null,
    empresaId: null,
  };

  options: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: statusCentralCusto.ATIVA },
    { label: 'Inativos', value: statusCentralCusto.INATIVA },
  ];

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly service: CentralCustoService,
    private readonly usuarioService: UserService,
    private readonly modal: ModalService,
    private readonly toast: ToastService
  ) {
    this.campoPesquisa();
    this.campoSelect();
  }

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.listenCentralCusto();
    }
  }

  ngOnDestroy(): void {
    // this.service.showlist.next(false);
  }
  adicionarCentralCusto() {
    const closeRef = this.sidebarService.openSide(
      SidebarNovaCentralCustoComponent
    );
    closeRef.sub.subscribe((data) => {
      if (data) {
        this.listenCentralCusto();
      }
    });
  }

  delete(id: number) {
    const ref = this.modal.open(ConfirmDeleteComponent);
    ref.afterClosed.subscribe({
      next: (value) => {
        if (value) {
          this.service.deletar(id).subscribe({
            next: () => {
              this.toast.notify({
                message: 'Central de custo deletada com sucesso.',
                type: 'SUCCESS',
              });
              this.listenCentralCusto();
            },
            error: () => {
              this.toast.notify({
                message: 'Ocorreu um erro ao deletar Central de custo.',
                type: 'ERROR',
              });
            },
          });
        }
      },
    });
  }

  showDetails(id: number) {
    this.service.showDetails.next(true);
    this.service.showlist.next(false);
    this.service.idCentralSelected.next(id);
  }

  listenCentralCusto() {
    this.service.listarPor(this.filtro).subscribe({
      next: (centrais) => {
        this.data = centrais.itens;
        this.totalRegistro = centrais.totalCount;
      },
    });
  }

  formatAndMaskString(input: string) {
    if (input.length !== 16) {
      throw new Error('A string deve ter exatamente 16 caracteres.');
    }

    // Substitui os primeiros 12 caracteres por '*'
    let maskedString = '**** **** ****' + input.slice(12);

    // Verifica se a maskedString não é nula ou indefinida
    let parts = maskedString.match(/.{1,4}/g);
    if (parts === null) {
      throw new Error('Erro ao formatar a string.');
    }

    return parts.join(' ');
  }

  changePages(pagina: number) {
    this.filtro.pagina = pagina;
    this.listenCentralCusto();
  }

  campoSelect() {
    this.select.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      console.log('retornar com o filtro: ' + value);
      // this.filtro.statusUser = value
      // this.listenViajantes()
    });
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      if (value == '') {
        this.filtro.nome = null;
      } else {
        this.filtro.nome = value;
      }
      this.listenCentralCusto();
    });
  }

  protected readonly status!: statusCentralCusto;
}
