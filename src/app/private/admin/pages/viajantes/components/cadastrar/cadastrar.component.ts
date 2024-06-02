import {Component, OnInit} from '@angular/core';
import {
    SidebarComponent
} from "../../../../../../shared/sidebar/sidebar.component";
import {InputComponent} from "../../../../../../shared/input/input.component";
import {RadioComponent} from "../../../../../../shared/radio/radio.component";
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {SidebarService} from "../../../../../../shared/sidebar/sidebar.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../../../shared/services/user/user.service";
import {
  Role,
  SolicitacaoUserRequest
} from "../../../../../../models/user.interface";
import {CadastrarService} from "./cadastrar.service";
import {ToastService} from "../../../../../../shared/toast/toast.service";

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    SidebarComponent,
    InputComponent,
    RadioComponent,
    ButtonComponent
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    empresaId: new FormControl(),
    role: new FormControl(),
  });

  constructor(
    private readonly sidebar: SidebarService,
    private readonly usuarioService: UserService,
    private readonly service: CadastrarService,
    private readonly toast: ToastService
    ) {
  }

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.form.controls.empresaId.setValue(parseInt(String(empresaId)));
    }
  }

  cadastrar() {

    this.service.solicitarCadastro(this.form.value as SolicitacaoUserRequest).subscribe({
      next: () => {
        this.toast.notify({message: 'Convite enviado com sucesso.', type: "SUCCESS"});
        this.sidebar.closeSide();
      },
      error: () => {
        this.toast.notify({message: 'Houve um erro ao enviar o convite.', type: "ERROR"});
      }
    })
  }

  cancelar() {
    this.sidebar.closeSide();
  }

  protected readonly Role = Role;
}
