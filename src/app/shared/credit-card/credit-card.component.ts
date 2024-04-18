import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardNumberPipe } from '../pipes/card-number/card-number.pipe';
import { MouthCardPipe } from "../pipes/mouth-card/mouth-card.pipe";

@Component({
    selector: 'tgt-credit-card',
    standalone: true,
    templateUrl: './credit-card.component.html',
    styleUrl: './credit-card.component.scss',
    imports: [NgClass, ReactiveFormsModule, FormsModule, CardNumberPipe, MouthCardPipe]
})
export class CreditCardComponent {

  iai = false;

  @Input() group = new FormGroup({
    numberCard: new FormControl('0000000000000000'),
    name: new FormControl('Jonathan L M Souza'),
    cvc: new FormControl('423'),
    mouth: new FormControl('06/35'),
  });
}
