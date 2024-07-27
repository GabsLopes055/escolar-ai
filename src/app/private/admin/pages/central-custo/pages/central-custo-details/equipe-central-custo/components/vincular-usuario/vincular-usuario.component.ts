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
  User,
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
  @Input() data: any;

  pesquisa = new FormControl();

  tamanhoPagina: number = 50; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual

  usuarios: any[] = [];
  centralCustoId!: number;

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
    }

    this.service.idCentralSelected.subscribe((id) => {
      this.centralCustoId = id as number;
      if (id) {
        this.listenViajantes();
      }
    });

    this.campoPesquisa();
  }

  listenViajantes() {
    this.viajantesService.listarPor(this.filtro).subscribe({
      next: (integrantes) => {
        this.totalItems = integrantes.totalCount;
        this.usuarios = integrantes.itens.map((item) => {
          return {
            item,
            control: new FormControl(false),
            statusToggle: false,
          };
        });
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
    if (this.vincularUsuarioRequest.length !== 0) {
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

  checkBox(usuario: any, event: any) {

    const isChecked = event;

    if (usuario.item.role == 'MANAGER') {
      if (isChecked) {
        if (!usuario.statusToggle) {
          usuario.statusToggle = true;
        }
      } else {
        usuario.statusToggle = false;
        usuario.control.setValue(false);
      }
    }

    const request: CentralCustoEquipeRequest = {
      centralDeCustoId: this.centralCustoId,
      userId: usuario.item.id,
      aprovador: usuario.control.value,
    };

    // Adiciona ou remove o request do array
    if (isChecked) {
      // Adiciona o novo request ao array, se ja não estiver no array
      if (!this.vincularUsuarioRequest.some((request) => request.userId === usuario.item.id)) {
        this.vincularUsuarioRequest.push(request);
      }

    } else {
      // Remove o request do array se o checkbox for desmarcado
      this.vincularUsuarioRequest = this.vincularUsuarioRequest.filter(
        (request) => request.userId !== usuario.item.id
      );
    }
  }

  listarScroll(event: any) {
    const element = event.target;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.filtro.tamanhoPagina = this.tamanhoPagina += this.tamanhoPagina;
      this.listenViajantes();
    }
  }

  toggleCheck(event: any, usuario: any) {
    this.vincularUsuarioRequest = this.vincularUsuarioRequest.map(
      (_usuario) => {
        if (usuario.item.id == _usuario.userId) {
          _usuario.aprovador = event;
        }
        return _usuario;
      }
    );
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
