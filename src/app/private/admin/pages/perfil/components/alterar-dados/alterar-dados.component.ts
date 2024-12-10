import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { DividerComponent } from "../../../../../../shared/divider/divider.component";
import { ModalComponent } from "../../../../../../shared/modal/modal.component";
import { FormControl, FormGroup } from '@angular/forms';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';

@Component({
  selector: 'app-alterar-dados',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, DividerComponent, ModalComponent],
  templateUrl: './alterar-dados.component.html',
  styleUrl: './alterar-dados.component.scss'
})
export class AlterarDadosComponent {

  form = new FormGroup({
    cpf: new FormControl('123.456.789-89'),
    nomeCompleto: new FormControl('Joana da Silva'),
    email: new FormControl('joana@ayrtonsenna.gov'),
    celular: new FormControl('(41) 98765-4321'),
  });

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly toast: ToastService,
  ) {}

  enviar() {
    this.sidebarService.closeSide();
    this.toast.notify({message: 'Dados Alterados com Sucesso !', type: 'SUCCESS'});
  }

  cancelar() {
    /**
     * Apenas a service do sidebar que estava fechando esta modal
     * o porque ninguém sabe.
     */
    this.sidebarService.closeSide();
  }


}
