import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../shared/button/button.component";
import { DividerComponent } from "../../../../../shared/divider/divider.component";
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { SidebarNovoCartaoComponent } from './components/sidebar-novo-cartao/sidebar-novo-cartao.component';
import { CreditCardViewComponent } from "../../../../../shared/credit-card-view/credit-card-view.component";
import { Cartao } from '../../../../../models/cartao.interface';
import { CardNumberPipe } from '../../../../../shared/pipes/card-number/card-number.pipe';

@Component({
    selector: 'cartoes',
    standalone: true,
    templateUrl: './cartoes.component.html',
    styleUrl: './cartoes.component.scss',
    imports: [ButtonComponent, DividerComponent, CreditCardViewComponent, CardNumberPipe]
})
export class CartoesComponent {

  cartoes: Cartao[] = [
    {
      cardNumber: '************2234',
      mouthValidate: '10/25',
      nameCard: 'Jonathan L M Souza',
      cvv: '306'
    },
    {
      cardNumber: '************8460',
      mouthValidate: '03/26',
      nameCard: 'Guilherme G nunes',
      cvv: '306'
    },
    {
      cardNumber: '************8496',
      mouthValidate: '10/2025',
      nameCard: 'Andrey L Kopetski',
      cvv: '399'
    },
  ]

  constructor(
    private readonly sidebarService: SidebarService
  ) {}

  addCard() {
    this.sidebarService.openSide(SidebarNovoCartaoComponent);
  }
}
