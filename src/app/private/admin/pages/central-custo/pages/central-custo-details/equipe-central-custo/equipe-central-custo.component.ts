import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../shared/list/components/item-data/item-data.component';
import {
  Status,
  StatusCircleComponent,
} from '../../../../../../../shared/status-circle/status-circle.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';
import { ToastService } from '../../../../../../../shared/toast/toast.service';
import { CentralCustoEquipeFiltro } from '../../../../../../../models/central-de-custo.interface';
import { CentralCustoService } from '../../../central-custo.service';
import { EquipeCentralCustoService } from './equipe-central-custo.service';
import { CentralCustoDetailsService } from '../central-custo-details.service';
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { VincularUsuarioComponent } from './components/vincular-usuario/vincular-usuario.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../../shared/select/select.component';
import { FormControl } from '@angular/forms';
import { PaginatorComponent } from '../../../../../../../shared/paginator/paginator.component';
import { UpdateUserComponent } from '../../../../viajantes/components/update-user/update-user.component';
import { debounceTime } from 'rxjs';
import { DesvincularUsuarioComponent } from './components/desvincular-usuario/desvincular-usuario.component';

@Component({
  selector: 'equipe-central-custo',
  standalone: true,
  imports: [
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    StatusCircleComponent,
    ButtonComponent,
    SelectComponent,
    PaginatorComponent,
  ],
  templateUrl: './equipe-central-custo.component.html',
  styleUrl: './equipe-central-custo.component.scss',
})
export class EquipeCentralCustoComponent implements OnInit {
  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  usuarios: any[] = [];
  centralCustoSelecionada = 0;
  select = new FormControl();

  options: OptionSelect[] = [
    { label: 'Todos', value: null },
    { label: 'Ativos', value: Status.ATIVO },
    { label: 'Inativos', value: Status.INATIVO },
  ];

  filtroEquipeCentral: CentralCustoEquipeFiltro = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    email: null,
    statusUser: null,
    centralCustoId: null,
  };

  protected readonly Status = Status;

  constructor(
    private readonly modal: ModalService,
    private readonly toast: ToastService,
    private readonly serviceEqupe: EquipeCentralCustoService,
    private readonly serviceCentralCusto: CentralCustoService,
    private readonly serviceEquipe: CentralCustoDetailsService,
    private readonly sidebarService: SidebarService
  ) {
    this.serviceCentralCusto.idCentralSelected.subscribe((id) => {
      this.centralCustoSelecionada = id as number;
    });
  }
  ngOnInit(): void {
    this.listenEquipeCentral();
    this.campoSelect();
  }

  listenEquipeCentral() {
    this.filtroEquipeCentral.centralCustoId = this.centralCustoSelecionada;
    this.serviceEqupe
      .listarEquipesCentralCusto(this.filtroEquipeCentral)
      .subscribe({
        next: (equipe) => {
          this.totalItems = equipe.totalCount;
          this.usuarios = equipe.itens;
        },
      });
  }

  vincularUsuario() {
    const sideRef = this.sidebarService.openSideWithData(
      VincularUsuarioComponent
    );
    sideRef.afterClosed.subscribe((value) => {
      if (value) {
        this.listenEquipeCentral();
      }
    });
  }

  details(id: number) {
    const sideRef = this.sidebarService.openSideWithData(
      UpdateUserComponent,
      id
    );
    sideRef.afterClosed.subscribe((value) => {
      if (value) {
        this.listenEquipeCentral();
      }
    });
  }

  desvincularUsuario(id: number) {
    const modalRef = this.modal.open(DesvincularUsuarioComponent);
    modalRef.afterClosed.subscribe((value) => {
      if (value) {
        this.toast.notify({
          message: 'Verificar Endpoint para vincular usuario',
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

  campoSelect() {
    this.select.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      this.filtroEquipeCentral.statusUser = value
      this.listenEquipeCentral()
    });
  }

  changePages(pagina: number) {
    this.filtroEquipeCentral.pagina = pagina;
    this.listenEquipeCentral();
  }
}
