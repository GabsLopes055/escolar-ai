import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-baixar-chamada',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './baixar-chamada.component.html',
  styleUrl: './baixar-chamada.component.scss'
})
export class BaixarChamadaComponent {
  constructor(
    private readonly modalService: ModalService
  ){}


  baixar() {
    this.modalService.close();
  }
}
