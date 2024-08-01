import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { StatusCircleComponent } from '../../../../../../shared/status-circle/status-circle.component';
import { Status } from './../../../../../../shared/status-circle/status-circle.component';
import { HistoricoUsuarioComponent } from '../../../../../../shared/historico-usuario/historico-usuario.component';
import { HistoricoViagensComponent } from './historico-viagens/historico-viagens.component';

@Component({
  selector: 'reservas-viagens',
  standalone: true,
  imports: [
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    StatusCircleComponent,
    ButtonComponent,
  ],
  templateUrl: './viagens.component.html',
  styleUrl: './viagens.component.scss',
})
export class ViagensComponent implements OnInit {
  reservaVoo: any[] = [];

  constructor(
     private readonly sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.reservaVoo = [
      {
        destino: 'São Paulo',
        origem: 'Nova York',
        dataIda: '15/04/24 15:00',
        dataVolta: '17/04/24 15:00',
        status: Status.ATIVO,
      },
      {
        destino: 'São Paulo',
        origem: 'Nova York',
        dataIda: '15/04/24 15:00',
        dataVolta: '17/04/24 15:00',
        status: Status.PENDENTE,
      },
      {
        destino: 'São Paulo',
        origem: 'Nova York',
        dataIda: '15/04/24 15:00',
        dataVolta: '17/04/24 15:00',
        status: Status.INATIVO,
      },
    ];
  }

  formataStatus(status: Status): string {
    let statusRetorno = '';
    if (status === Status.ATIVO) {
      statusRetorno = 'Aprovada';
    } else if (status === Status.INATIVO) {
      statusRetorno = 'Cancelada';
    } else {
      statusRetorno = 'Pendente';
    }
    return statusRetorno;
  }

  abrirDetalhes() {
    this.sidebarService.openSide(HistoricoViagensComponent)
  }

  protected readonly status!: Status;
}
