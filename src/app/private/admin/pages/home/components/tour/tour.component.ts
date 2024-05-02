import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { ModalComponent } from './../../../../../../shared/modal/modal.component';
import { ModalService } from './../../../../../../shared/modal/modal.service';
import { UserService } from '../../../../../../shared/services/user/user.service';

@Component({
    selector: 'app-tour',
    standalone: true,
    templateUrl: './tour.component.html',
    styleUrl: './tour.component.scss',
    imports: [ModalComponent, ButtonComponent]
})
export class TourComponent {

  step = 1;
  nameUser;

  constructor(
    private readonly modalService: ModalService,
    private readonly userService: UserService,
    ) {
      const usuario = this.userService.user;
      const firstName = usuario?.nome.split(" ")[0];
      this.nameUser = firstName;
    }

  pular() {
    this.modalService.close();
  }
  next() {
    
    if(this.step == 3) {
      this.modalService.close();
      return;
    }
    this.step +=1;
  }

  back() {
    this.step -= 1;
  }
}
