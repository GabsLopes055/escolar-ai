import { VoosService } from './../../voos.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { ChipsComponent } from '../../../../../../../../shared/chips/chips.component';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'voos-ida',
  standalone: true,
  imports: [ButtonComponent, ChipsComponent],
  templateUrl: './voos-ida.component.html',
  styleUrl: './voos-ida.component.scss',
})
export class VoosIdaComponent implements OnInit, OnDestroy {

  @Input() vooIda: any = [];

  subscription = new Subscription();
  panel: boolean = false;

  constructor(private readonly vooService: VoosService) {}


  ngOnInit(): void {
    this.subscription.add();
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
    this.vooService.updateVoosIda(voo);
  }
}
