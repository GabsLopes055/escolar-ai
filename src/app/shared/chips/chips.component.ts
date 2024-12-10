import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { StatusChamado } from '../../models/chamada.interface';

@Component({
  selector: 'tgt-chips',
  standalone: true,
  imports: [],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
})
export class ChipsComponent {
  @Input() label: string = '';
  @Input() select!: boolean;

  @Output() filtrar = new EventEmitter();

}
