import { Component } from '@angular/core';
import { ToggleComponent } from '../../../../../../shared/toggle/toggle.component';

@Component({
  selector: 'app-notificacoes',
  standalone: true,
  imports: [
    ToggleComponent
  ],
  templateUrl: './notificacoes.component.html',
  styleUrl: './notificacoes.component.scss'
})
export class NotificacoesComponent {

}
