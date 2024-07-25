import { Status } from './../../../../../shared/status-circle/status-circle.component';
import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from '../../../../../shared/toggle/toggle.component';
import { DividerComponent } from '../../../../../shared/divider/divider.component';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../../shared/services/user/user.service';
import { User } from '../../../../../models/user.interface';
import { PerfilService } from '../../perfil/perfil.service';
import { PerfilAcessoService } from './perfil-acesso.service';
import { ToastService } from '../../../../../shared/toast/toast.service';
import {
  perfilAcesso,
  perfilAcessoRequest,
} from '../../../../../models/perfil-acesso.interface';

@Component({
  selector: 'perfil-acesso',
  standalone: true,
  imports: [
    ToggleComponent,
    DividerComponent,
    ToggleComponent,
    ButtonComponent,
    NgStyle,
    ReactiveFormsModule,
  ],
  templateUrl: './perfil-acesso.component.html',
  styleUrl: './perfil-acesso.component.scss',
})
export class PerfilAcessoComponent implements OnInit {
  empresaId: any;
  desabilitarToggle!: boolean;
  ativarToggle!: boolean;
  edit: boolean = false;

  permissoes: FormGroup = new FormGroup({
    id: new FormControl(),
    passageiroReserva: new FormControl(),
    passageiroViaja: new FormControl(),

    gestorReserva: new FormControl(),
    gestorViaja: new FormControl(),
    gestorConvida: new FormControl(),
    empresaId: new FormControl(),
    gestorCriaCentral: new FormControl(),
    gestorVerMenu: new FormControl(),
  });

  constructor(
    private readonly usuarioService: UserService,
    private readonly perfilService: PerfilAcessoService,
    private readonly toast: ToastService
  ) {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
    }
  }

  ngOnInit(): void {
    this.preencherPermissoes();
  }

  preencherPermissoes() {

    this.cancelar()

    this.perfilService.buscar(this.empresaId).subscribe({
      next: (value) => {

        this.permissoes.controls['id'].setValue(value.id)
        this.permissoes.controls['passageiroViaja'].setValue(value.passageiroViaja);
        this.permissoes.controls['passageiroReserva'].setValue(value.passageiroReserva);
        this.permissoes.controls['gestorConvida'].setValue(value.gestorConvida);
        this.permissoes.controls['gestorReserva'].setValue(value.gestorReserva);
        this.permissoes.controls['gestorViaja'].setValue(value.gestorViaja);
        this.permissoes.controls['gestorCriaCentral'].setValue(value.gestorCriaCentral)
        this.permissoes.controls['gestorVerMenu'].setValue(value.gestorVerMenu);
        this.permissoes.controls['empresaId'].setValue(this.empresaId);
      },
      error: () => {
        this.toast.notify({
          message: 'Erro ao listar permissões',
          type: 'ERROR',
        });
      },
    });
  }

  editarInformacoes() {
    if (!this.edit) {
      this.edit = !this.edit;
    }
  }

  alterarPermissoes() {
    this.perfilService
      .atualizar(this.permissoes.value as perfilAcessoRequest).subscribe({
        next: () => {
          this.toast.notify({
            message: 'Perfil de acesso alterado com sucesso!',
            type: 'SUCCESS',
          });
          this.preencherPermissoes();
        },
        error: () => {
          this.toast.notify({
            message: 'Erro ao atualizar permissões.',
            type: 'ERROR',
          });
          this.preencherPermissoes();
        },
      });
  }

  cancelar() {
    this.edit = false;
  }

  retornoPassageiroViaja(retorno: FormControl) {
    this.permissoes.controls['passageiroViaja'].setValue(retorno);
  }

  retornoPassageiroReserva(retorno: any) {
    this.permissoes.controls['passageiroReserva'].setValue(retorno);
  }

  retornoGestorReserva(retorno: any) {
    this.permissoes.controls['gestorReserva'].setValue(retorno);
  }

  retornoGestorViaja(retorno: any) {
    this.permissoes.controls['gestorViaja'].setValue(retorno);
  }

  retornoGestorConvida(retorno: any) {
    this.permissoes.controls['gestorConvida'].setValue(retorno);
  }
  retornoGestorCriaCentralCusto(retorno: any) {
    this.permissoes.controls['gestorCriaCentral'].setValue(retorno);
  }

  retornoGestorVerConfiguracoes(retorno: any) {
    this.permissoes.controls['gestorVerMenu'].setValue(retorno);
  }

  protected readonly status!: Status;
}
