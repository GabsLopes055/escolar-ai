import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { SelectComponent } from '../../../../../../shared/select/select.component';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'hoteis',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePipe
  ],
  templateUrl: './hoteis.component.html',
  styleUrl: './hoteis.component.scss',
})
export class HoteisComponent implements OnInit, OnDestroy {

  inputs: boolean = true;
  hoteis: any[] = [];

  formInputs = new FormGroup({
    destino: new FormControl('', Validators.required),
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required),
  });

  subscription = new Subscription();

  constructor() {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add();
  }

  pesquisarHoteis() {

    this.inputs = false;

    console.log(this.formInputs.value)

    if (this.formInputs.valid) {

      this.hoteis = [
        {
          nome: 'Nicckey Palace Hotel',
          valor: 200.0,
          total: 600,
          beneficios: [
            { icon: 'hotel', label: 'Hotel 3 Estrelas' },
            { icon: 'hotel', label: 'Estacionamento gratuito' },
            { icon: 'hotel', label: 'Academia' },
            { icon: 'hotel', label: 'Café da manha incluído' },
            { icon: 'hotel', label: 'Piscina' },
            { icon: 'hotel', label: 'Restaurante' },
            { icon: 'hotel', label: 'Wi-Fi Gratuito' },
            { icon: 'hotel', label: 'Ar Condicionado' },
            { icon: 'hotel', label: 'Serviço de quarto' },
          ],
        },
        {
          nome: 'Nicckey Palace Hotel',
          valor: 200.0,
          total: 600,
          beneficios: [
            { icon: 'hotel', label: 'Hotel 3 Estrelas' },
            { icon: 'hotel', label: 'Estacionamento gratuito' },
            { icon: 'hotel', label: 'Academia' },
            { icon: 'hotel', label: 'Café da manha incluído' },
            { icon: 'hotel', label: 'Piscina' },
            { icon: 'hotel', label: 'Restaurante' },
            { icon: 'hotel', label: 'Wi-Fi Gratuito' },
            { icon: 'hotel', label: 'Ar Condicionado' },
            { icon: 'hotel', label: 'Serviço de quarto' },
          ],
        },
        {
          nome: 'Nicckey Palace Hotel',
          valor: 200.0,
          total: 600,
          beneficios: [
            { icon: 'hotel', label: 'Hotel 3 Estrelas' },
            { icon: 'hotel', label: 'Estacionamento gratuito' },
            { icon: 'hotel', label: 'Academia' },
            { icon: 'hotel', label: 'Café da manha incluído' },
            { icon: 'hotel', label: 'Piscina' },
            { icon: 'hotel', label: 'Restaurante' },
            { icon: 'hotel', label: 'Wi-Fi Gratuito' },
            { icon: 'hotel', label: 'Ar Condicionado' },
            { icon: 'hotel', label: 'Serviço de quarto' },
          ],
        },
        {
          nome: 'Nicckey Palace Hotel',
          valor: 200.0,
          total: 600,
          beneficios: [
            { icon: 'hotel', label: 'Hotel 3 Estrelas' },
            { icon: 'hotel', label: 'Estacionamento gratuito' },
            { icon: 'hotel', label: 'Academia' },
            { icon: 'hotel', label: 'Café da manha incluído' },
            { icon: 'hotel', label: 'Piscina' },
            { icon: 'hotel', label: 'Restaurante' },
            { icon: 'hotel', label: 'Wi-Fi Gratuito' },
            { icon: 'hotel', label: 'Ar Condicionado' },
            { icon: 'hotel', label: 'Serviço de quarto' },
          ],
        },
      ];

    }
  }
}
