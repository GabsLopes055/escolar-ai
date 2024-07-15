import { InputViewComponent } from './../../../../../../shared/input-view/input-view.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [
    ButtonComponent,
    InputViewComponent
  ],
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.scss'
})
export class DadosPessoaisComponent {

}
