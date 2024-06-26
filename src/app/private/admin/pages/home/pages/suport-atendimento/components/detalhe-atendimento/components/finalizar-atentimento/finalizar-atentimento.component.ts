import {Component, inject} from '@angular/core';
import {
    ButtonComponent
} from "../../../../../../../../../../shared/button/button.component";
import {
    ModalComponent
} from "../../../../../../../../../../shared/modal/modal.component";
import {
  ModalService
} from "../../../../../../../../../../shared/modal/modal.service";

@Component({
  selector: 'app-finalizar-atentimento',
  standalone: true,
    imports: [
        ButtonComponent,
        ModalComponent
    ],
  templateUrl: './finalizar-atentimento.component.html',
  styleUrl: './finalizar-atentimento.component.scss'
})
export class FinalizarAtentimentoComponent {

  private modal = inject(ModalService);

  cancel() {
    this.modal.close();
  }

  finalizar() {
    this.modal.close(true);
  }
}
