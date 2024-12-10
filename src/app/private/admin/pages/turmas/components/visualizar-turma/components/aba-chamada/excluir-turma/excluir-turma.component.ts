import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";

@Component({
  selector: 'app-excluir-turma',
  standalone: true,
  imports: [ModalComponent, ButtonComponent, DividerComponent],
  templateUrl: './excluir-turma.component.html',
  styleUrl: './excluir-turma.component.scss'
})
export class ExcluirTurmaComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  excluir() {
    this.modalService.close();
  }


}
