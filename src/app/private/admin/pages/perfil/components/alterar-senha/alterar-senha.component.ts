import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { DividerComponent } from "../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alterar-senha',
  standalone: true,
  imports: [ModalComponent, ButtonComponent, DividerComponent, InputIconComponent, ReactiveFormsModule],
  templateUrl: './alterar-senha.component.html',
  styleUrl: './alterar-senha.component.scss'
})
export class AlterarSenhaComponent {

  haveUppercaseAndLowwercase = false;
  contentNumbers = false;
  specialChars = false;

  form = new FormGroup({
    senhaAtual: new FormControl(),
    senhaNova: new FormControl(),
    confirmaSenhaNova: new FormControl(),
  })

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly toast: ToastService,
  ) {}

  enviar() {
    this.sidebarService.closeSide();
    this.toast.notify({message: 'Senha Alterada com Sucesso !', type: 'SUCCESS'});
  }

  cancelar() {
    /**
     * Apenas a service do sidebar que estava fechando esta modal
     * o porque ninguém sabe.
     */
    this.sidebarService.closeSide();
  }
}
