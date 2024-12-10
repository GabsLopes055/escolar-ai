import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { CheckboxComponent } from "../../../../../../../../../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-vincular-aluno',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './vincular-aluno.component.html',
  styleUrl: './vincular-aluno.component.scss'
})
export class VincularAlunoComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  vincular() {
    this.modalService.close();
  }

}
