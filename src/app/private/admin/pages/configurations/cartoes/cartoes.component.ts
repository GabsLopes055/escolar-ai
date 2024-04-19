import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../shared/button/button.component";
import { DividerComponent } from "../../../../../shared/divider/divider.component";
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { SidebarNovoCartaoComponent } from './components/sidebar-novo-cartao/sidebar-novo-cartao.component';
import { CreditCardViewComponent } from "../../../../../shared/credit-card-view/credit-card-view.component";

@Component({
    selector: 'cartoes',
    standalone: true,
    templateUrl: './cartoes.component.html',
    styleUrl: './cartoes.component.scss',
    imports: [ButtonComponent, DividerComponent, CreditCardViewComponent]
})
export class CartoesComponent {

  constructor(
    private readonly sidebarService: SidebarService
  ) {}

  addCard() {
    this.sidebarService.openSide(SidebarNovoCartaoComponent);
  }
}
