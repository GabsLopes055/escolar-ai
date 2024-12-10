import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";

@Component({
  selector: 'app-ver-chamada',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './ver-chamada.component.html',
  styleUrl: './ver-chamada.component.scss'
})
export class VerChamadaComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  finalizarChamada() {
    this.modalService.close();
  }

}
