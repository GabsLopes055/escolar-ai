import {Component, OnInit} from '@angular/core';
import {ModalComponent} from "../../../../../../shared/modal/modal.component";
import {InputComponent} from "../../../../../../shared/input/input.component";
import {
  TextareaComponent
} from "../../../../../../shared/textarea/textarea.component";
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../../../shared/services/user/user.service";
import {ModalService} from "../../../../../../shared/modal/modal.service";
import {ToastService} from "../../../../../../shared/toast/toast.service";
import {AbrirChamadoService} from "./abrir-chamado.service";
import {ChamadoRequest} from "../../../../../../models/chamado.interface";

@Component({
  selector: 'app-abrir-chamado',
  standalone: true,
  imports: [
    ModalComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent
  ],
  templateUrl: './abrir-chamado.component.html',
  styleUrl: './abrir-chamado.component.scss'
})
export class AbrirChamadoComponent implements OnInit{

  form = new FormGroup({
    assunto: new FormControl(),
    menssagem: new FormControl(),
    userId: new FormControl(),
  });

  constructor(
    private readonly userService: UserService,
    private readonly modal: ModalService,
    private readonly toast: ToastService,
    private readonly service: AbrirChamadoService
  ) {
  }

  ngOnInit(): void {
    const user = this.userService.user;
    console.log(user)
    if (user) {
      this.form.controls.userId.setValue(user.id);
    }
  }

  enviar() {
    this.service.abrirChamado(this.form.value as ChamadoRequest).subscribe({
      next: () => {
        this.toast.notify({message: 'Chamado registrado com sucesso', type: "SUCCESS"});
        this.modal.close();
      },
      error: () => {
        this.toast.notify({message: 'Ocorreu um erro ao abrir um chamado', type: "ERROR"});
      }
    });
  }

  cancelar() {
    this.modal.close();
  }
}
