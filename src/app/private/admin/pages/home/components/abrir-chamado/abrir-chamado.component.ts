import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../../../shared/modal/modal.component';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { TextareaComponent } from '../../../../../../shared/textarea/textarea.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { AbrirChamadoService } from './abrir-chamado.service';
import { ChamadoRequest } from '../../../../../../models/chamado.interface';

@Component({
  selector: 'app-abrir-chamado',
  standalone: true,
  imports: [ModalComponent, InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './abrir-chamado.component.html',
  styleUrl: './abrir-chamado.component.scss',
})
export class AbrirChamadoComponent implements OnInit {

  contagemCaracteres: any = 0

  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    menssagem: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    userId: new FormControl(),
  });

  constructor(
    private readonly userService: UserService,
    private readonly modal: ModalService,
    private readonly toast: ToastService,
    private readonly service: AbrirChamadoService
  ) {}

  ngOnInit(): void {
    const user = this.userService.user;
    if (user) {
      this.form.controls.userId.setValue(user.id);
    }
  }

  contagem() {
    this.contagemCaracteres = this.form.controls.menssagem.value?.length;
  }

  enviar() {
    if (this.form.valid) {
      this.service.abrirChamado(this.form.value as ChamadoRequest).subscribe({
        next: () => {
          this.toast.notify({
            message: 'Chamado registrado com sucesso',
            type: 'SUCCESS',
          });
          this.modal.close();
        },
        error: () => {
          this.toast.notify({
            message: 'Ocorreu um erro ao abrir um chamado',
            type: 'ERROR',
          });
        },
      });
    } else {
      this.toast.notify({
        message: 'Preencha o formulário corretamente !',
        type: 'ERROR',
      });
    }
  }

  cancelar() {
    this.modal.close(true);
  }
}
