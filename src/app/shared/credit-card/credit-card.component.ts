import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tgt-credit-card',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, FormsModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
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
