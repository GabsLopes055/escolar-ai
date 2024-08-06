import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../../../../../../shared/sidebar/sidebar.component';
import { InputIconComponent } from '../../../../../../../../shared/input-icon/input-icon.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { DividerComponent } from '../../../../../../../../shared/divider/divider.component';
import { SolicitacaoUserRequest } from '../../../../../../../../models/user.interface';
import { SidebarService } from '../../../../../../../../shared/sidebar/sidebar.service';
import { ToastService } from '../../../../../../../../shared/toast/toast.service';
import { UserService } from '../../../../../../../../shared/services/user/user.service';
import { debounceTime } from 'rxjs';
import { VoosService } from '../../voos.service';
import { PerfilComponent } from '../../../../../../../../shared/perfil/perfil.component';
import { RadioComponent } from '../../../../../../../../shared/radio/radio.component';
import { NgClass, NgStyle } from '@angular/common';
import { PerfilAcessoService } from '../../../../../configurations/perfil-acesso/perfil-acesso.service';

@Component({
  selector: 'app-solicitar-reserva',
  standalone: true,
  imports: [
    SidebarComponent,
    InputIconComponent,
    ButtonComponent,
    DividerComponent,
    PerfilComponent,
    RadioComponent,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './solicitar-reserva.component.html',
  styleUrl: './solicitar-reserva.component.scss',
})
export class SolicitarReservaComponent implements OnInit {
  @Input() data: any;

  usuarios: any[] = [];
  tamanhoPagina: number = 50; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual

  permissaoReservarParaMim!: boolean;
  empresaId!: number;
  filtro: SolicitacaoUserRequest = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    nome: null,
    email: null,
    role: null,
    statusUser: null,
    empresaId: null,
  };

  pesquisa = new FormControl();

  constructor(
    private readonly sibebarService: SidebarService,
    private readonly toast: ToastService,
    private readonly usuarioService: UserService,
    private readonly voosService: VoosService,
    private readonly perfilService: PerfilAcessoService
  ) {}

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;

    if (empresaId) {
      this.empresaId = empresaId;
      // this.filtro.empresaId = parseInt(String(empresaId));
    }
    this.listarUsuarios();
    this.campoPesquisa();
    this.preencherPermissoes();
  }

  preencherPermissoes() {
    this.perfilService.buscar(this.empresaId).subscribe({
      next: (value) => {
        this.permissaoReservarParaMim = value.gestorViaja;
      },
    });
  }

  listarUsuarios() {
    this.voosService.listarPor(this.filtro).subscribe({
      next: (integrantes) => {
        this.totalItems = integrantes.totalCount;
        this.usuarios = integrantes.itens.map((item) => {
          return {
            item,
            control: new FormControl(),
          };
        });
      },
    });
  }

  usuarioSelecionado(value: any, usuario: any) {
    console.log('radio selecionado:', value, 'usuario:', usuario);
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      if (value == '') {
        this.filtro.nome = null;
      } else {
        this.filtro.nome = value;
      }
      this.listarUsuarios();
    });
  }

  confirmarReserva() {
    this.sibebarService.closeSide(true);
  }

  cancelar() {
    this.sibebarService.closeSide(false);

  }
}
