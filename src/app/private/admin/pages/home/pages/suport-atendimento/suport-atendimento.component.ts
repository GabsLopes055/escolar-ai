import { Status } from './../../../../../../shared/status-circle/status-circle.component';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chamado, FiltroDeBuscaChamado, StatusChamado } from '../../../../../../models/chamado.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { MenuService } from '../../../../../../shared/menu/menu.service';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { NavbarService } from '../../../../../../shared/navbar/navbar.service';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { DetalheAtendimentoComponent } from './components/detalhe-atendimento/detalhe-atendimento.component';
import { SuportAtendimentoService } from './suport-atendimento.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { StatusCircleComponent } from '../../../../../../shared/status-circle/status-circle.component';

@Component({
  selector: 'app-suport-atendimento',
  standalone: true,
  imports: [
    PaginatorComponent,
    ButtonComponent,
    ItemDataComponent,
    ItemListComponent,
    HeaderColComponent,
    HeaderListComponent,
    ListComponent,
    DatePipe,
    StatusCircleComponent,
    InputIconComponent,
  ],
  host: { class: 'main' },
  templateUrl: './suport-atendimento.component.html',
  styleUrl: './suport-atendimento.component.scss'
})
export class SuportAtendimentoComponent implements OnInit {

  idUser: number | undefined = 0;
  pagina: number = 1;
  tamanhoPagina: number = 6;
  filtro: FiltroDeBuscaChamado = {
    status: null,
    email: null,
    userId: null,
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
  };

  data: any = [];
  totalCount: number = 0;

  pesquisa = new FormControl();

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly userService: UserService,
    private readonly modalService: ModalService,
    private readonly toast: ToastService,
    private readonly modal: ModalService,
    private readonly service: SuportAtendimentoService,
    private readonly router: Router,
    private readonly sidebar: SidebarService
  ) {
    const usuario = this.userService.user;
    this.idUser = usuario?.id;
    navbarService.setTitle(`Suporte`);
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'headset_mic', label: 'Suporte', route: '/admin/suporte-atentimento', checked: true})
    // menuService.updateMenu();
  }

  ngOnInit(): void {
    this.campoPesquisa();
    this.listenChamados();
  }

  listenChamados() {

    this.filtro.userId = this.idUser;

    this.service.findall(this.filtro).subscribe({
      next: (value) => {
        this.data = value.itens;
        this.totalCount = value.totalCount;

        this.updatePagination();
      },
    });
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      if (value === '') {
        this.filtro.email = null;
      } else {
        this.filtro.email = value;
      }
      this.filtro.pagina = 1;  // redefine a pagina para nova pesquisa
      this.listenChamados();
    });
  }

  setFilterStatus(status: StatusChamado | null) {
    this.filtro.status = status;
    this.listenChamados();
  }

  refresh() {
    this.filtro.email = null;
    this.filtro.status = null;
    this.listenChamados();
  }

  voltar() {
    this.router.navigate(['/admin']);
  }

  openDetalhe(data: any) {
    this.sidebar.openSideWithData(DetalheAtendimentoComponent, data);
  }

  changePage(pagina: number) {
    this.filtro.pagina = pagina;
    this.listenChamados();
  }

  private updatePagination() {
    if (this.pagina > Math.ceil(this.totalCount / this.tamanhoPagina)) {
      this.pagina = 1;
    }
  }

  protected readonly status = Status;
  protected readonly StatusChamado = StatusChamado;
}
