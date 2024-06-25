import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../../../../../shared/navbar/navbar.service";
import {MenuService} from "../../../../../../shared/menu/menu.service";
import {UserService} from "../../../../../../shared/services/user/user.service";
import {ModalService} from "../../../../../../shared/modal/modal.service";
import {ToastService} from "../../../../../../shared/toast/toast.service";
import {
  PaginatorComponent
} from "../../../../../../shared/paginator/paginator.component";
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {
  ItemDataComponent
} from "../../../../../../shared/list/components/item-data/item-data.component";
import {
  ItemListComponent
} from "../../../../../../shared/list/components/item-list/item-list.component";
import {
  HeaderColComponent
} from "../../../../../../shared/list/components/header-col/header-col.component";
import {
  HeaderListComponent
} from "../../../../../../shared/list/components/header-list/header-list.component";
import {ListComponent} from "../../../../../../shared/list/list.component";
import {
  Chamado,
  StatusChamado
} from "../../../../../../models/chamado.interface";
import {DatePipe} from "@angular/common";
import {SuportAtendimentoService} from "./suport-atendimento.service";
import {Router} from "@angular/router";
import {
  DetalheAtendimentoComponent
} from "./components/detalhe-atendimento/detalhe-atendimento.component";
import {SidebarService} from "../../../../../../shared/sidebar/sidebar.service";

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
    DatePipe
  ],
  host: { class: 'main' },
  templateUrl: './suport-atendimento.component.html',
  styleUrl: './suport-atendimento.component.scss'
})
export class SuportAtendimentoComponent implements OnInit{

  data: Chamado[] = [];
  idUser: number | undefined = 0;


  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly userService: UserService,
    private readonly modalService:ModalService,
    private readonly toast: ToastService,
    private readonly modal: ModalService,
    private readonly service: SuportAtendimentoService,
    private readonly router: Router,
    private readonly sidebar: SidebarService
  ) {
    const usuario = this.userService.user;
    this.idUser = usuario?.id;
    const firstName = usuario?.nome.split(" ")[0]
    navbarService.setTitle(`Ajuda`);
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
  }

  ngOnInit(): void {
    this.listenChamados();
  }

  listenChamados() {
    this.service.findall(this.idUser as number).subscribe({
      next: value => {
        this.data = value;
      }
    });
  }

  voltar() {
    this.router.navigate(['/admin']);
  }

  openDetalhe(id: number) {
    this.sidebar.openSideWithData(DetalheAtendimentoComponent, id);
  }

  protected readonly StatusChamado = StatusChamado;
}
