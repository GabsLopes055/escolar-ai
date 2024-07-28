import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../../../../../../shared/select/select.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChipsComponent } from "../../../../../../shared/chips/chips.component";

@Component({
  selector: 'voos',
  standalone: true,
  imports: [InputComponent, ButtonComponent, SelectComponent, DatePipe, ChipsComponent],
  templateUrl: './voos.component.html',
  styleUrl: './voos.component.scss',
})
export class VoosComponent implements OnInit {

  ngOnInit(): void {
  }

  inputs: boolean = true;

  voosIda: any[] = [];
  voosVolta: any[] = [];
  panel: boolean = false;

  formInputs = new FormGroup({
    origem: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required),
  });

  pesquisarVoos() {
    this.inputs = false
    this.criarVoos();
  }

  abriTarifas() {
    if(!this.panel) {
      this.panel = !this.panel;
    }
  }

  criarVoos() {
    this.voosIda = [
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [
          {
            aeroporto: 'MCW',
          },
          {
            aeroporto: 'MCW',
          },
        ],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [
          {
            aeroporto: 'MCW',
          },
        ],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [
          {
            aeroporto: 'MCW',
          },
        ],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
      {
        origem: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        destino: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        duracao: '09h50m',
        paradas: [
          {
            aeroporto: 'MCW',
          },
          {
            aeroporto: 'MCW',
          },
        ],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
    ];

    this.voosVolta = [
      {
        origem: [
          {
            cidade: 'Nova York',
            nomeAeroporto: 'John F. Kennedy',
            siglaAeroporto: 'JFK',
            horaChegada: '06:15',
          },
        ],
        destino: [
          {
            cidade: 'São Paulo',
            nomeAeroporto: 'Guarulhos International',
            siglaAeroporto: 'GRU',
            horaSaida: '21:15',
          },
        ],
        duracao: '09h50m',
        paradas: [
          {
            aeroporto: 'MCW',
          },
        ],
        tarifa: 'R$5.758,64',
        nomeAviao: 'Boing B767-400',
        operadoPor: 'LATAM Airlines Brasil',
        servicos: [
          {
            servico: 'Bebidas alcoólicas e não alcoólicas',
            icon: 'wine_bar',
          },
          {
            servico: 'Entretenimento a bordo',
            icon: 'movie',
          },
          {
            servico: 'Serviço de alimentação',
            icon: 'dinner_dining',
          },
          {
            servico: 'Tomada elétrica',
            icon: 'power',
          },
        ],
      },
    ];
  }
}
