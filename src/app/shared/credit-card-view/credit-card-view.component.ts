import { Component } from '@angular/core';
import { CardNumberPipe } from "../pipes/card-number/card-number.pipe";
import { MouthCardPipe } from "../pipes/mouth-card/mouth-card.pipe";

@Component({
    selector: 'tgt-credit-card-view',
    standalone: true,
    templateUrl: './credit-card-view.component.html',
    styleUrl: './credit-card-view.component.scss',
    imports: [CardNumberPipe, MouthCardPipe]
})
export class CreditCardViewComponent {

}
