import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { InputIconComponent } from "../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { SelectComponent } from "../../../../shared/select/select.component";
import { PaginatorComponent } from "../../../../shared/paginator/paginator.component";
import { ItemDataComponent } from "../../../../shared/list/components/item-data/item-data.component";
import { Status, StatusCircleComponent } from "../../../../shared/status-circle/status-circle.component";
import { ItemListComponent } from "../../../../shared/list/components/item-list/item-list.component";
import { HeaderColComponent } from "../../../../shared/list/components/header-col/header-col.component";
import { HeaderListComponent } from "../../../../shared/list/components/header-list/header-list.component";
import { ListComponent } from "../../../../shared/list/list.component";
import { HistoricoViagensComponent } from '../reservas/components/viagens/historico-viagens/historico-viagens.component';
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-aprovacoes',
  standalone: true,
  host: {class:'main'},
  imports: [InputIconComponent, ButtonComponent, SelectComponent, PaginatorComponent, ItemDataComponent, StatusCircleComponent, ItemListComponent, HeaderColComponent, HeaderListComponent, ListComponent],
  templateUrl: './aprovacoes.component.html',
  styleUrl: './aprovacoes.component.scss'
})
export class AprovacoesComponent implements OnInit {

  reservaVoo: any[] = [];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly sidebarService: SidebarService
  ) {
    navbarService.setTitle('Aprovações');
    navbarService.showBtnViajar.next(true);
    menuService.setSelected({icon: 'task_alt', label: 'Aprovações', route: '/admin/aprovacoes', checked: true});
  }

  ngOnInit(): void {
    this.reservaVoo = [
      {
        passageiro: 'Guilherme Sobrenome',
        solicitante: 'Jonathan Lauro',
        dataIda: '09/04/24 15:00',
        valor: 'R$3.000,00',
        status: Status.ATIVO,
      },
      {
        passageiro: 'Guilherme Sobrenome',
        solicitante: 'Jonathan Lauro',
        dataIda: '09/04/24 15:00',
        valor: 'R$3.000,00',
        status: Status.INATIVO,
      },
      {
        passageiro: 'Guilherme Sobrenome',
        solicitante: 'Jonathan Lauro',
        dataIda: '09/04/24 15:00',
        valor: 'R$3.000,00',
        status: Status.PENDENTE,
      },
      {
        passageiro: 'Guilherme Sobrenome',
        solicitante: 'Jonathan Lauro',
        dataIda: '09/04/24 15:00',
        valor: 'R$3.000,00',
        status: Status.PENDENTE,
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

  refresh() {}
}
