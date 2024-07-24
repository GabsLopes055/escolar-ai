import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../shared/divider/divider.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';


@Component({
  selector: 'app-adicionar-cartao',
  standalone: true,
  imports: [
    ButtonComponent,
    ModalComponent,
    DividerComponent
  ],
  templateUrl: './adicionar-cartao.component.html',
  styleUrl: './adicionar-cartao.component.scss'
})
export class AdicionarCartaoComponent {

  constructor(
    private readonly modalService: ModalService,
    private readonly router: Router
  ) {
  }

  cadastrarCartao() {
    this.modalService.close(true);
    this.router.navigate(['/admin/settings'])
  }

  cancel() {
    this.modalService.close();
  }

}
