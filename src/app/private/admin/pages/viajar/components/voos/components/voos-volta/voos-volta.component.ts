import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { ChipsComponent } from '../../../../../../../../shared/chips/chips.component';
import { VoosService } from '../../voos.service';

@Component({
  selector: 'voos-volta',
  standalone: true,
  imports: [
    ButtonComponent,
    ChipsComponent
  ],
  templateUrl: './voos-volta.component.html',
  styleUrl: './voos-volta.component.scss'
})

export class VoosVoltaComponent implements OnInit {

  @Input() vooVolta : any[] | null = [];
  @Input() mostrarLabel: boolean = true;

  subscription = new Subscription();

  vooIda: string = '';
  panel: boolean = false;

  constructor(private readonly vooService: VoosService) {}


  ngOnInit(): void {
    this.subscription.add();

    this.vooService.vooIda.subscribe((value: any) => {
      this.vooIda = value[0].origem[0].siglaAeroporto + " - " + value[0].destino[0].siglaAeroporto
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  abriTarifas() {
    if (!this.panel) {
      this.panel = !this.panel;
    } else {
      this.panel = false;
    }
  }

  selecionarVoo(voo: any) {
    this.vooService.updateVoosVolta(voo);
  }
}
