import { InputViewComponent } from './../../../../../../shared/input-view/input-view.component';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { PerfilService } from '../../perfil.service';
import { User } from '../../../../../../models/user.interface';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../../../../../shared/input/input.component';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [
    ButtonComponent,
    InputViewComponent,
    InputComponent
  ],
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.scss'
})
export class DadosPessoaisComponent implements OnInit {


  mostrarFormEdit: boolean = false
  mostrarFormPassword: boolean = false

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

  constructor(
    private readonly perfilUsuario: PerfilService,
    private readonly userService: UserService
  ){
  }
  ngOnInit(): void {
    this.buscarUsuarioId(this.userService.user?.id)
  }

  buscarUsuarioId(idUsuario: any){
    this.perfilUsuario.buscar(idUsuario).subscribe({
      next: usuario => {
        this.usuario = usuario
        this.formEditarUsuario.controls.id.setValue(usuario.id);
        this.formEditarUsuario.controls.nome.setValue(usuario.nome);
        this.formEditarUsuario.controls.cpf.setValue(usuario.cpf);
        this.formEditarUsuario.controls.email.setValue(usuario.email);
        this.formEditarUsuario.controls.telefone.setValue(usuario.telefone);
        this.formEditarUsuario.controls.dataNascimento.setValue(usuario.dataNascimento);
        this.formEditarUsuario.controls.sexo.setValue(usuario.sexo);
        this.formEditarUsuario.controls.role.setValue(usuario.role);

      }
    })
  }

  cancelarEditar() {
    this.mostrarFormEdit = false;
    this.mostrarFormPassword = false
  }

  abrirFormEditar() {
    if(!this.mostrarFormEdit) {
      this.mostrarFormEdit = !this.mostrarFormEdit;
    }
  }

  abrirFormPassword() {
    if(!this.mostrarFormPassword) {
      this.mostrarFormPassword = !this.mostrarFormPassword
    }
    this.mostrarFormEdit = false
    console.log(this.mostrarFormEdit)
  }

  atualizar() {
    console.log("atualizar")
  }

}
