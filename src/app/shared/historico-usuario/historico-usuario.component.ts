import { Component } from '@angular/core';
import { StatusCircleComponent } from "../status-circle/status-circle.component";

@Component({
    selector: 'tgt-historico-usuario',
    standalone: true,
    templateUrl: './historico-usuario.component.html',
    styleUrl: './historico-usuario.component.scss',
    imports: [StatusCircleComponent]
})
export class HistoricoUsuarioComponent {

}
