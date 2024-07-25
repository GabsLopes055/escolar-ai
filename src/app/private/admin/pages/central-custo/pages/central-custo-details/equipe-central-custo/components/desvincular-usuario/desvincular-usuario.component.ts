import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../../../../shared/divider/divider.component';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';



@Component({
  selector: 'app-desvincular-usuario',
  standalone: true,
  imports: [
    ButtonComponent,
    ModalComponent,
    DividerComponent
  ],
  templateUrl: './desvincular-usuario.component.html',
  styleUrl: './desvincular-usuario.component.scss'
})
export class DesvincularUsuarioComponent {
  constructor(
    private readonly modalService: ModalService
  ) {
  }

  desvincularUsuario() {
    this.modalService.close(true);
  }

  cancel() {
    this.modalService.close();
  }
}
