import { DatePipe, NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { ChipsComponent } from '../../../../../../shared/chips/chips.component';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { SelectComponent } from '../../../../../../shared/select/select.component';
import { VoosVoltaComponent } from './components/voos-volta/voos-volta.component';
import { VoosService } from './voos.service';
import { VoosEscolhidosComponent } from "./components/voos-escolhidos/voos-escolhidos.component";
import { VoosIdaComponent } from './components/voos-ida/voos-ida.component';

@Component({
  selector: 'voos',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePipe,
    ChipsComponent,
    NgClass,
    VoosIdaComponent,
    VoosVoltaComponent,
    VoosEscolhidosComponent
],
  templateUrl: './voos.component.html',
  styleUrl: './voos.component.scss',
})
export class VoosComponent implements OnInit, OnDestroy {

  inputs: boolean = true;

  voosIda: any[] = [];
  voosVolta: any[] = [];

  mostrarVoosIda: boolean = false;
  mostrarVoosVolta: boolean = false;
  mostrarVooSelecionados: boolean = false;

  subscriptions = new Subscription();

  formInputs = new FormGroup({
    origem: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required),
  });

  voosSelecionados: any = [];

  constructor(private readonly vooService: VoosService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.vooService.vooIda.next([])
    this.vooService.vooVolta.next([])
    this.criarVoos();
    this.subscriptions.add()
    this.monitoraVoosSelecionados();
  }

  monitoraVoosSelecionados() {

    this.vooService.vooIda.subscribe(() => {
      this.mostrarVoosIda = false;
      this.mostrarVoosVolta = true;
    })
    // this.subscriptions.push(
    // );
    this.vooService.vooVolta.subscribe((voos: any) => {
      this.mostrarVoosVolta = false;
      if(voos.length > 0) {
        this.mostrarVooSelecionados = true;
      }
    })

    // this.subscriptions.push(
    // );
  };

  pesquisarVoos() {

    if (this.formInputs.valid) {
      this.inputs = false;
      this.mostrarVoosIda = true;
    }
  }

  trocarVoos() {

    const origem = this.formInputs.controls.origem.value;
    const destino = this.formInputs.controls.destino.value;

    this.formInputs.controls.origem.setValue(destino);
    this.formInputs.controls.destino.setValue(origem);
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      }
    ];
  }
}
