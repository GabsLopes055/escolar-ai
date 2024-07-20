import {Component, Input, OnInit} from '@angular/core';


import {DetalheAtendimentoService} from "./detalhe-atendimento.service";
import {DatePipe, JsonPipe} from "@angular/common";
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
import {User, UserEntity} from "../../../../../../../../models/user.interface";
import {
  MenssagemChamado, MenssagemChamadoRequest, StatusChamado
} from "../../../../../../../../models/chamado.interface";
import {
  UserService
} from "../../../../../../../../shared/services/user/user.service";
import {ToastService} from "../../../../../../../../shared/toast/toast.service";
import {ModalService} from "../../../../../../../../shared/modal/modal.service";
import {
  FinalizarAtentimentoComponent
} from "./components/finalizar-atentimento/finalizar-atentimento.component";
import {
  AvaliacaoStarsComponent
} from "../../../../../../../../shared/avaliacao-stars/avaliacao-stars.component";



@Component({
  selector: 'app-detalhe-atendimento',
  standalone: true,
  imports: [
    SidebarComponent,
    PerfilComponent,
    TextareaComponent,
    ButtonComponent,
    DatePipe,
    AvaliacaoStarsComponent,
    JsonPipe,
  ],
  templateUrl: './detalhe-atendimento.component.html',
  styleUrl: './detalhe-atendimento.component.scss'
})
export class DetalheAtendimentoComponent implements OnInit {

  @Input() data: any; // id do chamado.
  usuario: User | null;

  menssagens: MenssagemChamado[] = [];

  textAreaControl = new FormControl();

  notaAvalicao = new FormControl();

  nota: any = 0;

  usuarioSolicitanteChamado!: UserEntity;
  usuarioSupporte!:User;

  constructor(
    private readonly userService: UserService,
    private readonly service: DetalheAtendimentoService,
    private readonly toast: ToastService,
    private readonly modal: ModalService,
  ) {
    this.usuario = this.userService.user;
  }

  ngOnInit(): void {
    this.listenMessages();
    this.listenChamado();
  }

  listenMessages() {
    this.service.getMenssagens(this.data.id).subscribe({
      next: value => {
        this.menssagens = value
      }
    });
  }

  listenChamado() {
    this.service.buscar(this.data.id).subscribe({
      next: value => {
        this.usuarioSolicitanteChamado = value.user;
        this.nota = value.notaAtendimento;
        if(parseInt(value.notaAtendimento) > 0) {
          this.notaAvalicao.setValue(parseInt(value.notaAtendimento));
        }
      }
    });
  }


  finalizarAtendimento() {
    const modalRef = this.modal.open(FinalizarAtentimentoComponent);
    modalRef.afterClosed.subscribe(value => {
      if(value) {
        this.service.finalizarChamado({chamadoId: this.data.id, notaAvaliacao: 0}).subscribe({
          next: value => {
            this.toast.notify({message: 'Atendimento finalizado com sucesso.', type: "SUCCESS"});
            this.data.status = value.status;
          },
          error: () => {
            this.toast.notify({message: 'Ocorreu um erro ao tentar finalizar atendimento.', type: "ERROR"});
          }
        });
      }
    });
  }

  avaliar() {
    this.service.avaliar({chamadoId: this.data.id, notaAvaliacao: this.notaAvalicao.value}).subscribe({
      next: value => {
        this.toast.notify({message: 'Obrigado por avaliar.', type: "SUCCESS"});
        this.data.status = value.status;
      },
      error: () => {
        this.toast.notify({message: 'Ocorreu ao avaliar atendimento.', type: "ERROR"});
      }
    });
  }

  responderChamado() {
    if(this.usuario?.id) {
      const request: MenssagemChamadoRequest = {
        chamadoId: this.data.id,
        menssagem: this.textAreaControl.value,
        userId: this.usuario.id
      }

      this.service.responderChamado(request).subscribe({
        next: menssagemChamado => {
          this.toast.notify({message: 'Menssagem enviada com sucesso.', type: "SUCCESS"});
          this.textAreaControl.reset()
          this.menssagens.push(menssagemChamado);
        },
        error: () => {
          this.toast.notify({message: 'Ocorreu um erro ao responder o chamado.', type: "ERROR"});
        }
      });
    }

  }

  protected readonly StatusChamado = StatusChamado;
}
