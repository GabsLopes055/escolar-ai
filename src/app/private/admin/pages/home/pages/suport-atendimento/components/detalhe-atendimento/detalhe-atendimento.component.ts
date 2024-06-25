import {Component, Input, OnInit} from '@angular/core';


import {DetalheAtendimentoService} from "./detalhe-atendimento.service";
import {DatePipe} from "@angular/common";
import {FormControl} from "@angular/forms";
import {
  SidebarComponent
} from "../../../../../../../../shared/sidebar/sidebar.component";
import {
  PerfilComponent
} from "../../../../../../../../shared/perfil/perfil.component";
import {
  TextareaComponent
} from "../../../../../../../../shared/textarea/textarea.component";
import {
  ButtonComponent
} from "../../../../../../../../shared/button/button.component";
import {User} from "../../../../../../../../models/user.interface";
import {
  MenssagemChamado, MenssagemChamadoRequest
} from "../../../../../../../../models/chamado.interface";
import {
  UserService
} from "../../../../../../../../shared/services/user/user.service";
import {ToastService} from "../../../../../../../../shared/toast/toast.service";



@Component({
  selector: 'app-detalhe-atendimento',
  standalone: true,
  imports: [
    SidebarComponent,
    PerfilComponent,
    TextareaComponent,
    ButtonComponent,
    DatePipe,
  ],
  templateUrl: './detalhe-atendimento.component.html',
  styleUrl: './detalhe-atendimento.component.scss'
})
export class DetalheAtendimentoComponent implements OnInit {

  @Input() data:any; // id do chamado.
  usuario: User | null;

  menssagens: MenssagemChamado[] = [];

  textAreaControl = new FormControl();

  constructor(
    private readonly userService: UserService,
    private readonly service: DetalheAtendimentoService,
    private readonly toast: ToastService
  ) {
    this.usuario = this.userService.user;
  }

  ngOnInit(): void {
    this.listenMessages();
  }

  listenMessages() {
    this.service.getMenssagens(this.data).subscribe({
      next: value => {
        this.menssagens = value
      }
    });
  }

  responderChamado() {
    if(this.usuario?.id) {
      const request: MenssagemChamadoRequest = {
        chamadoId: this.data,
        menssagem: this.textAreaControl.value,
        userId: this.usuario.id
      }

      this.service.responderChamado(request).subscribe({
        next: menssagemChamado => {
          this.toast.notify({message: 'Chamado respondido com sucesso.', type: "SUCCESS"});
          this.textAreaControl.reset()
          this.menssagens.push(menssagemChamado);
        },
        error: () => {
          this.toast.notify({message: 'Ocorreu um erro ao responder o chamado.', type: "ERROR"});
        }
      });
    }

  }
}
