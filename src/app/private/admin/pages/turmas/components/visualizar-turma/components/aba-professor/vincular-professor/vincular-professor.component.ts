import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { CheckboxComponent } from "../../../../../../../../../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-vincular-professor',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './vincular-professor.component.html',
  styleUrl: './vincular-professor.component.scss'
})
export class VincularProfessorComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  vincular() {
    this.modalService.close();
  }
}
