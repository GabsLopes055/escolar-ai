import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../shared/modal/modal.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';


@Component({
  selector: 'app-confirm-delete',
  standalone: true,
    imports: [
        ButtonComponent,
        ModalComponent
    ],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent {
  constructor(
    private readonly modalService: ModalService
  ) {
  }

  delete() {
    this.modalService.close(true);
  }

  cancel() {
    this.modalService.close();
  }
}
