import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

import { VoosService } from '../../voos.service';
import { VoosIdaComponent } from '../voos-ida/voos-ida.component';
import { VoosVoltaComponent } from "../voos-volta/voos-volta.component";

@Component({
  selector: 'voos-escolhidos',
  standalone: true,
  imports: [VoosIdaComponent, VoosVoltaComponent],
  templateUrl: './voos-escolhidos.component.html',
  styleUrl: './voos-escolhidos.component.scss',
})
export class VoosEscolhidosComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  vooIda: any[] | null = [];
  vooVolta: any[] | null = [];

  constructor(private readonly vooService: VoosService) {}


  ngOnInit(): void {

    this.vooService.vooIda.asObservable().subscribe((voo) => {
      this.vooIda = voo
    })
    this.vooService.vooVolta.asObservable().subscribe((voo) => {
      this.vooVolta = voo
    })

    this.subscription.add();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
