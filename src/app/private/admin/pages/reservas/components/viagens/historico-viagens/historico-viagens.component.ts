import { Component } from '@angular/core';
import { HistoricoUsuarioComponent } from "../../../../../../../shared/historico-usuario/historico-usuario.component";
import { SidebarComponent } from "../../../../../../../shared/sidebar/sidebar.component";
import { SolicitacaoAprovacaoComponent } from "../../../../../../../shared/solicitacao-aprovacao/solicitacao-aprovacao.component";

@Component({
  selector: 'app-historico-viagens',
  standalone: true,
  imports: [HistoricoUsuarioComponent, SidebarComponent, SolicitacaoAprovacaoComponent],
  templateUrl: './historico-viagens.component.html',
  styleUrl: './historico-viagens.component.scss'
})
export class HistoricoViagensComponent {

}
