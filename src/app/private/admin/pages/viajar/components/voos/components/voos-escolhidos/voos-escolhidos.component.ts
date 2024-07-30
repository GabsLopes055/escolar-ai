import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

import { VoosService } from '../../voos.service';
import { VoosVoltaComponent } from "../voos-volta/voos-volta.component";
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { SidebarService } from '../../../../../../../../shared/sidebar/sidebar.service';
import { SolicitarReservaComponent } from '../solicitar-reserva/solicitar-reserva.component';
import { Router } from '@angular/router';
import { VoosIdaComponent } from '../voos-ida/voos-ida.component';

@Component({
  selector: 'voos-escolhidos',
  standalone: true,
  imports: [VoosIdaComponent, VoosVoltaComponent, ButtonComponent],
  templateUrl: './voos-escolhidos.component.html',
  styleUrl: './voos-escolhidos.component.scss',
})
export class VoosEscolhidosComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  vooIda: any[] | null = [];
  vooVolta: any[] | null = [];

  constructor(
    private readonly vooService: VoosService,
    private readonly sidebarService: SidebarService
  )
    {}


  ngOnInit(): void {

    this.vooService.vooIda.subscribe((voo: any | null) => {
      this.vooIda = voo;
    })
    this.vooService.vooVolta.subscribe((voo: any | null) => {
      this.vooVolta = voo
    })

    this.subscription.add();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  solicitarReserva() {

    const sideRef = this.sidebarService.openSideWithData(SolicitarReservaComponent);

    sideRef.afterClosed.subscribe((value) => {
      if (value) {
        this.vooService.confirmarVoo.next(true)
      }
    });
  }
}
