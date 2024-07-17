import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tgt-status-circle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './status-circle.component.html',
  styleUrl: './status-circle.component.scss'
})
export class StatusCircleComponent {
  @Input() status!: Status;
}
export enum Status {
  ATIVA = 'ATIVA',
  INATIVA = 'INATIVA'
}
