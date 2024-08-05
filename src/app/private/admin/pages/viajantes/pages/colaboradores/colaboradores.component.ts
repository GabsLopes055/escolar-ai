import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  Role,
  SolicitacaoUserRequest,
} from '../../../../../../models/user.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import {
  Status,
  StatusCircleComponent,
} from '../../../../../../shared/status-circle/status-circle.component';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { ViajantesService } from '../../viajantes.service';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@Component({
  selector: 'tgt-colaboradores',
  standalone: true,
  imports: [
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    StatusCircleComponent,
    ButtonComponent,
    PaginatorComponent,
  ],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss',
})
export class ColaboradoresComponent implements OnInit, OnDestroy {
  data: any[] = [];
  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual

  empresaId: number = 0;
  filtro: SolicitacaoUserRequest = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    nome: null,
    email: null,
    role: null,
    statusUser: null,
    empresaId: null,
  };

  subscription = new Subscription();

  constructor(
    private readonly viajantesService: ViajantesService,
    private readonly usuarioService: UserService,
    private readonly sidebarService: SidebarService,
    private readonly modal: ModalService,
    private readonly toast: ToastService
  ) {}

  ngOnDestroy(): void {
    this.viajantesService.statusBehavior.next(null);
    this.viajantesService.perfilBehavior.next(null);
    this.viajantesService.inputBehavior.next(null);
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;

    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.filtro.empresaId = this.empresaId;
      this.listenViajantes();
    }

    this.subscription.add(
      this.viajantesService.statusBehavior.asObservable().subscribe((value) => {
        if (value && value != null) {
          this.filtro.statusUser = value;
          this.listenViajantes();
        }
      })
    );

    this.subscription.add(
      this.viajantesService.perfilBehavior.asObservable().subscribe((value) => {
        if (value && value != null) {
          this.filtro.role = value;
          this.listenViajantes();
        }
      })
    );

    this.subscription.add(
      this.viajantesService.inputBehavior.asObservable().subscribe((value) => {
        if (value && value != null) {
          this.filtro.nome = value;
          this.listenViajantes();
        }
      })
    );

  }
  listenViajantes() {
    this.viajantesService.listarPor(this.filtro).subscribe({
      next: (integrantes) => {
        this.totalItems = integrantes.totalCount;
        this.data = integrantes.itens;
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

  delete(id: number) {
    const modalRef = this.modal.open(ConfirmComponent);
    modalRef.afterClosed.subscribe((value) => {
      if (value) {
        this.viajantesService.delete(id).subscribe({
          next: () => {
            this.toast.notify({
              message: 'Usuário deletado com sucesso.',
              type: 'SUCCESS',
            });
            this.listenViajantes();
          },
          error: (erro) => {
            this.toast.notify({
              message: `${erro.error.menssagem}`,
              type: 'ERROR',
            });
          },
        });
      }
    });
  }

  changePage(pagina: number) {
    this.filtro.pagina = pagina;
    this.listenViajantes();
  }

  retornarNomePermissao(role: string): string {
    let permissao: string = '';

    if (role == 'ADMIN') {
      permissao = 'Administrador';
    }

    if (role == 'USER') {
      permissao = 'Passageiro';
    }

    if (role == 'SUPPORT') {
      permissao = 'Suporte';
    }

    if (role == 'MANAGER') {
      permissao = 'Gestor';
    }

    return permissao;
  }

  protected readonly Status = Status;
  protected readonly Role = Role;
}
