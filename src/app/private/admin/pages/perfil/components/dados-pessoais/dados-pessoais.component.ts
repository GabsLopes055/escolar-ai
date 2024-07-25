import { InputViewComponent } from './../../../../../../shared/input-view/input-view.component';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { PerfilService } from '../../perfil.service';
import { Role, User } from '../../../../../../models/user.interface';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { DatePipe } from '@angular/common';
import { OptionSelect, SelectComponent } from '../../../../../../shared/select/select.component';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [ButtonComponent, InputViewComponent, InputComponent, DatePipe, SelectComponent],
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.scss',
})
export class DadosPessoaisComponent implements OnInit {
  usuario: any;
  formEditarUsuario = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    cpf: new FormControl(),
    dataNascimento: new FormControl(),
    role: new FormControl(),
    sexo: new FormControl(),
    empresaId: new FormControl(null),
    password: new FormControl(null),
  });

  formEditarSenha = new FormGroup({
    senhaAntiga: new FormControl(),
    senhaNova: new FormControl(),
    confirmacaoNovaSenha: new FormControl(),
  });

  optionsSexo: OptionSelect[] = [
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' },
  ];

  optionsPerfil: OptionSelect[] = [
    { label: 'Administrador', value: Role.ADMIN },
    { label: 'Gestor', value: Role.MANAGER },
    { label: 'Viajante', value: Role.USER },
    { label: 'Suporte', value: Role.SUPPORT },
  ];

  constructor(
    private readonly perfilUsuario: PerfilService,
    private readonly userService: UserService
  ) {}

  ngOnInit() {
    this.buscarUsuarioId(this.userService.user?.id);
  }

  buscarUsuarioId(idUsuario: any) {
    this.perfilUsuario.buscar(idUsuario).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.formEditarUsuario.controls.id.setValue(usuario.id);
        this.formEditarUsuario.controls.nome.setValue(usuario.nome);
        this.formEditarUsuario.controls.cpf.setValue(usuario.cpf);
        this.formEditarUsuario.controls.email.setValue(usuario.email);
        this.formEditarUsuario.controls.telefone.setValue(usuario.telefone);
        this.formEditarUsuario.controls.dataNascimento.setValue(usuario.dataNascimento);
        this.formEditarUsuario.controls.sexo.setValue(usuario.sexo);
        this.formEditarUsuario.controls.role.setValue(usuario.role);
      },
    });
  }

  abrirFormEditar() {
    this.mostrarForm('edit');
  }

  abrirFormPassword() {
    this.mostrarForm('password');
  }

  cancelarEditar() {
    this.mostrarForm('view');
  }

  private mostrarForm(formType: 'view' | 'edit' | 'password') {
    this.mostrarFormEdit = formType === 'edit';
    this.mostrarFormPassword = formType === 'password';
    this.vizualizarInformacoesUsuario = formType === 'view';
    this.footerActions = formType !== 'view';
  }

  atualizar() {

    if(this.mostrarFormPassword) {
      console.log('atualizar senha')
    }

    if(this.mostrarFormEdit) {
      console.log('atualizar informacoes usuario')
      console.log(this.formEditarSenha.value)
    }

  }

  protected readonly Role = Role

  // Variáveis para controle da exibição dos formulários e ações do footer
  vizualizarInformacoesUsuario = true;
  mostrarFormEdit = false;
  mostrarFormPassword = false;
  footerActions = false;
}
