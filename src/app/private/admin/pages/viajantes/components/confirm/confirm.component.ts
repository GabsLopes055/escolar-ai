import { Component } from '@angular/core';
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {ModalComponent} from "../../../../../../shared/modal/modal.component";
import {ModalService} from "../../../../../../shared/modal/modal.service";

@Component({
  selector: 'app-confirm',
  standalone: true,
    imports: [
        ButtonComponent,
        ModalComponent
    ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
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
