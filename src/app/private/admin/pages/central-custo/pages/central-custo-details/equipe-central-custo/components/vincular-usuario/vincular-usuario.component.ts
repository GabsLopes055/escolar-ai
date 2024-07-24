import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CentralCustoDetailsService } from '../../../central-custo-details.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { SidebarComponent } from '../../../../../../../../../shared/sidebar/sidebar.component';
import { DividerComponent } from '../../../../../../../../../shared/divider/divider.component';
import { InputComponent } from '../../../../../../../../../shared/input/input.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { TableDataComponent } from '../../../../../../../../../shared/table/components/table-data/table-data.component';
import { HeaderTableComponent } from '../../../../../../../../../shared/table/components/header-table/header-table.component';
import { HeaderTableDataComponent } from '../../../../../../../../../shared/table/components/header-table-data/header-table-data.component';
import { ItemTableComponent } from '../../../../../../../../../shared/table/components/item-table/item-table.component';
import { TableComponent } from '../../../../../../../../../shared/table/table.component';
import { CheckboxComponent } from '../../../../../../../../../shared/checkbox/checkbox.component';
import { ToggleComponent } from '../../../../../../../../../shared/toggle/toggle.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import {
  SolicitacaoUserRequest,
  UserEntity,
} from '../../../../../../../../../models/user.interface';
import { ViajantesService } from '../../../../../../viajantes/viajantes.service';
import { SidebarService } from '../../../../../../../../../shared/sidebar/sidebar.service';
import { UserService } from '../../../../../../../../../shared/services/user/user.service';
import { CentralCustoService } from '../../../../../central-custo.service';
import { EquipeCentralCustoService } from '../../equipe-central-custo.service';
import { CentralCustoEquipeRequest } from '../../../../../../../../../models/central-de-custo.interface';
import { ToastService } from '../../../../../../../../../shared/toast/toast.service';

@Component({
  selector: 'app-vincular-usuario',
  standalone: true,
  imports: [
    ButtonComponent,
    SidebarComponent,
    DividerComponent,
    InputComponent,
    InputIconComponent,
    ListComponent,
    TableDataComponent,
    TableDataComponent,
    HeaderTableComponent,
    HeaderTableDataComponent,
    ItemTableComponent,
    TableComponent,
    CheckboxComponent,
    ToggleComponent,
    ItemDataComponent,
  ],
  templateUrl: './vincular-usuario.component.html',
  styleUrl: './vincular-usuario.component.scss',
})
export class VincularUsuarioComponent implements OnInit {
  @Input() data!: any;

  pesquisa = new FormControl();
  tamanhoPagina: number = 5; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  usuarios: any[] = [];
  controlToggle = new FormControl();
  habilitarToggle: boolean = false;
  centralCustoId!: number;
  valorToggle: any;

  filtro: SolicitacaoUserRequest = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    nome: null,
    email: null,
    role: null,
    statusUser: null,
    empresaId: null,
  };

  vincularUsuarioRequest: CentralCustoEquipeRequest[] = [];

  constructor(
    private readonly viajantesService: ViajantesService,
    private readonly sibebarService: SidebarService,
    private readonly usuarioService: UserService,
    private readonly centralCustoDetailService: EquipeCentralCustoService,
    private readonly service: CentralCustoService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.filtro.empresaId = parseInt(String(empresaId));
      this.listenViajantes();
    }

    this.service.idCentralSelected.subscribe((id) => {
      this.centralCustoId = id as number;
    });

    this.campoPesquisa();
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

  vincularUsuario() {
    if (!(this.vincularUsuarioRequest.length === 0)) {
      this.vincularUsuarioRequest.forEach((element) => {
        this.centralCustoDetailService
          .cadastrarUsuarioEquipeCentralCusto(element)
          .subscribe({
            next: (vinculo) => {
              //nao fazer nada,
              //VALIDAR
            },
            error: (error) => {
              this.toast.notify({
                message: 'Erro ao vincular usuário a equipe !',
                type: 'ERROR',
              });
            },
          });
      });
      this.sibebarService.closeSide(true);
    } else {
      this.toast.notify({
        message: 'Selecione pelo menos um usuário',
        type: 'INFO',
      });
    }
  }

  checkBox(event: any, role: string, id: number) {
    const isChecked = event;
    const aprovador = role === 'MANAGER' ? true : false;

    const request: CentralCustoEquipeRequest = {
      centralDeCustoId: this.centralCustoId,
      userId: id,
      aprovador: aprovador,
    };

    if (role == 'MANAGER') {
      if (isChecked) {
        if (!this.habilitarToggle) {
          this.habilitarToggle = true;

          // preciso pegar o valor do toggle, se esta marcado ou nao
          // depois de pegar esse valor, passar para o aprovador do request
        }
      } else {
        this.controlToggle.setValue(false);
        this.habilitarToggle = false;
      }
    }

    // Adiciona ou remove o request do array
    if (isChecked) {
      // Adiciona o novo request ao array, se ja não estiver no array
      if (
        !this.vincularUsuarioRequest.some((request) => request.userId === id)
      ) {
        this.vincularUsuarioRequest.push(request);
      }
    } else {
      // Remove o request do array se o checkbox for desmarcado
      this.vincularUsuarioRequest = this.vincularUsuarioRequest.filter(
        (request) => request.userId !== id
      );
    }

    // let aprovador;

    // if (role == 'MANAGER') {
    //   aprovador = true;

    //   if (event) {
    //     if (!this.vincularSelect) {
    //       this.vincularSelect = !this.vincularSelect;
    //     }
    //   } else {
    //     this.controlToggle.setValue(false);
    //     this.vincularSelect = false;

    //   }
    // } else {
    //   aprovador = false;
    // }

    // if(!event) {
    //   // Opcional: Remover a solicitação se necessário
    //   this.vincularUsuarioRequest = this.vincularUsuarioRequest.filter(
    //     (request) => request.userId !== id
    //   );

    //   // console.log(this.vincularUsuarioRequest)
    // }

    // // Crie a nova solicitação e adicione ao array
    // const vincular: CentralCustoEquipeRequest = {
    //   centralDeCustoId: this.centralCustoId, // Substitua com o valor real
    //   userId: id, // O ID do usuário
    //   aprovador: aprovador, // Ou false, conforme a lógica
    // };

    // this.vincularUsuarioRequest.push(vincular);

    // console.log(this.vincularUsuarioRequest);
  }

  listarScroll(event: any) {
    const element = event.target;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.filtro.tamanhoPagina = this.tamanhoPagina += this.tamanhoPagina;
      this.listenViajantes();
    }
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

  cancelar() {
    this.sibebarService.closeSide();
  }
}
