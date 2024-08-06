import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hoteis.component.html',
  styleUrl: './hoteis.component.scss',
})
export class HoteisComponent implements OnInit, OnDestroy {

  inputs: boolean = true;
  hoteis: any[] = [];
  currentIndex = 0;
  formInputs = new FormGroup({
    destino: new FormControl('', Validators.required),
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required),
  });

  subscription = new Subscription();

  constructor() {}

  ngOnDestroy(): void {

  }
  ngOnInit(): void {
  }

  pesquisarHoteis() {

    // if (this.formInputs.valid) {

      this.inputs = false;

      this.hoteis = [
        {
          nome: 'Nicckey Palace Hotel',
          valor: 200.0,
          total: 600,
          fotos: [
            {caminho: '../../../../../../../assets/images/hoteis/hotel_1.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_2.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_3.jpg'}
          ],
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
          fotos: [
            {caminho: '../../../../../../../assets/images/hoteis/hotel_1.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_2.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_3.jpg'}
          ],
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
          fotos: [
            {caminho: '../../../../../../../assets/images/hoteis/hotel_1.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_2.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_3.jpg'}
          ],
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
          fotos: [
            {caminho: '../../../../../../../assets/images/hoteis/hotel_1.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_2.jpg'},
            {caminho: '../../../../../../../assets/images/hoteis/hotel_3.jpg'}
          ],
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
    // }

    console.log(this.hoteis)

  }
  prevImage() {
    // this.currentIndex = (this.currentIndex === 0) ? this.hoteis.fotos.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    // this.currentIndex = (this.currentIndex === this.hoteis.fotos.length - 1) ? 0 : this.currentIndex + 1;
  }
}
