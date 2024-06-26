import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../../../shared/navbar/navbar.service';
import {MenuService} from '../../../../shared/menu/menu.service';
import {ButtonComponent} from "../../../../shared/button/button.component";
import {CurrencyPipe} from "@angular/common";
import {
  HeaderColComponent
} from "../../../../shared/list/components/header-col/header-col.component";
import {
  HeaderListComponent
} from "../../../../shared/list/components/header-list/header-list.component";
import {
  InputIconComponent
} from "../../../../shared/input-icon/input-icon.component";
import {
  ItemDataComponent
} from "../../../../shared/list/components/item-data/item-data.component";
import {
  ItemListComponent
} from "../../../../shared/list/components/item-list/item-list.component";
import {ListComponent} from "../../../../shared/list/list.component";
import {
  PaginatorComponent
} from "../../../../shared/paginator/paginator.component";
import {
  OptionSelect,
  SelectComponent
} from "../../../../shared/select/select.component";
import {
  Status,
  StatusCircleComponent
} from "../../../../shared/status-circle/status-circle.component";
import {User} from "../../../../models/user.interface";
import {ViajantesService} from "./viajantes.service";
import {UserService} from "../../../../shared/services/user/user.service";
import {SidebarService} from "../../../../shared/sidebar/sidebar.service";
import {CadastrarComponent} from "./components/cadastrar/cadastrar.component";
import {ModalService} from "../../../../shared/modal/modal.service";
import {ConfirmComponent} from "./components/confirm/confirm.component";
import {ToastService} from "../../../../shared/toast/toast.service";
import {
  UpdateUserComponent
} from "./components/update-user/update-user.component";

@Component({
  selector: 'app-viajantes',
  standalone: true,
  host: {class: 'main'},
    imports: [
        ButtonComponent,
        CurrencyPipe,
        HeaderColComponent,
        HeaderListComponent,
        InputIconComponent,
        ItemDataComponent,
        ItemListComponent,
        ListComponent,
        PaginatorComponent,
        SelectComponent,
        StatusCircleComponent
    ],
  templateUrl: './viajantes.component.html',
  styleUrl: './viajantes.component.scss'
})
export class ViajantesComponent implements OnInit{

  options: OptionSelect[] = [
    {label: 'Todos', value: ''},
    {label: 'Ativos', value: 'ATIVO'},
    {label: 'Inativos', value: 'INATIVO'},
  ];

  data: User[] = [];

  empresaId: number = 0;
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly viajantesService: ViajantesService,
    private readonly usuarioService: UserService,
    private readonly sidebarService: SidebarService,
    private readonly modal: ModalService,
    private readonly toast: ToastService
  ) {
    this.navbarService.setTitle('Integrantes');
    navbarService.showBtnViajar.next(true);
    this.menuService.setSelected({icon: 'person_4', label: 'Viajantes', route: '/admin/viajantes', checked: true});
  }

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.listenViajantes();
    }
  }

  protected readonly Status = Status;


  novoUsuario() {
    this.sidebarService.openSide(CadastrarComponent);
  }

  details(id: number) {
    const sideRef = this.sidebarService.openSideWithData(UpdateUserComponent, id);
    sideRef.afterClosed.subscribe(value => {
      if(value) {
        this.listenViajantes();
      }
    })
  }

  delete(id: number) {
    const modalRef = this.modal.open(ConfirmComponent);
    modalRef.afterClosed.subscribe(value => {
      if(value) {
        this.viajantesService.delete(id).subscribe({
          next: () => {
            this.toast.notify({message: 'Usuário deletado com sucesso.', type: "SUCCESS"});
            this.listenViajantes();

          },
          error: erro => {
            this.toast.notify({message: `${erro.error.menssagem}`, type: "ERROR"});
          },
        })
      }
    })
  }

  // LISTEN

  listenViajantes() {
    this.viajantesService.listarPorEmpresa(this.empresaId).subscribe({
      next: integrantes => {
        this.data = integrantes;
      }
    })
  }
}
