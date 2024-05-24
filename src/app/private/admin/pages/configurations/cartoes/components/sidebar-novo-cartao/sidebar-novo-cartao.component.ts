import {ChangeDetectorRef, Component} from '@angular/core';
import { SidebarComponent } from "../../../../../../../shared/sidebar/sidebar.component";
import { InputComponent } from "../../../../../../../shared/input/input.component";
import { CreditCardComponent } from "../../../../../../../shared/credit-card/credit-card.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../../../../shared/button/button.component";
import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import {
  UserService
} from "../../../../../../../shared/services/user/user.service";
import {CartoesService} from "../../cartoes.service";
import {Cartao} from "../../../../../../../models/cartao.interface";
import {ToastService} from "../../../../../../../shared/toast/toast.service";

@Component({
    selector: 'app-sidebar-novo-cartao',
    standalone: true,
    templateUrl: './sidebar-novo-cartao.component.html',
    styleUrl: './sidebar-novo-cartao.component.scss',
    imports: [SidebarComponent, InputComponent, CreditCardComponent, ReactiveFormsModule, FormsModule, ButtonComponent]
})
export class SidebarNovoCartaoComponent {

    groupCard = new FormGroup({
        cardNumber: new FormControl(''),
        cardName: new FormControl(''),
        cardCvv: new FormControl(''),
        cardMouth: new FormControl(''),
        empresaId: new FormControl(),
    });

    constructor(
        private readonly sidebarService: SidebarService,
        private readonly userService: UserService,
        private readonly cartoesService: CartoesService,
        private readonly toast: ToastService,
        private readonly changes: ChangeDetectorRef
    ) {
      const usuario = this.userService.user;
      if(usuario) {
        this.groupCard.controls.empresaId.setValue(parseInt(String(usuario.empresaId)));
      }
    }

    cadastrar() {
      console.log(this.groupCard.value);
      this.cartoesService.cadastrar(this.groupCard.value as Cartao).subscribe({
        next: card => {
          this.toast.notify({message: 'Cartão cadastrado com sucesso', type: "SUCCESS"});
          this.sidebarService.closeSide(card)
        },
        error: () => {
          this.toast.notify({message: 'Houve um erro ao tentar cadastrar o cartão.', type: "ERROR"});
        }
      })
    }
    cancel() {
        this.sidebarService.closeSide();
    }
}
