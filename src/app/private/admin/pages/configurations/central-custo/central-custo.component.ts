import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../../../../../shared/button/button.component';
import {
  InputIconComponent
} from '../../../../../shared/input-icon/input-icon.component';
import {
  HeaderColComponent
} from '../../../../../shared/list/components/header-col/header-col.component';
import {
  HeaderListComponent
} from '../../../../../shared/list/components/header-list/header-list.component';
import {
  ItemDataComponent
} from '../../../../../shared/list/components/item-data/item-data.component';
import {
  ItemListComponent
} from '../../../../../shared/list/components/item-list/item-list.component';
import {ListComponent} from '../../../../../shared/list/list.component';
import {
  PaginatorComponent
} from '../../../../../shared/paginator/paginator.component';
import {SidebarComponent} from '../../../../../shared/sidebar/sidebar.component';
import {SidebarService} from '../../../../../shared/sidebar/sidebar.service';
import {
  StatusCircleComponent
} from '../../../../../shared/status-circle/status-circle.component';
import {TabsComponent} from '../../../../../shared/tabs/tabs.component';
import {
  SidebarNovaCentralCustoComponent
} from './components/sidebar-nova-central-custo/sidebar-nova-central-custo.component';
import {TableComponent} from "../../../../../shared/table/table.component";
import {
  HeaderTableComponent
} from "../../../../../shared/table/components/header-table/header-table.component";
import {
  HeaderTableDataComponent
} from "../../../../../shared/table/components/header-table-data/header-table-data.component";
import {
  ItemTableComponent
} from "../../../../../shared/table/components/item-table/item-table.component";
import {
  TableDataComponent
} from "../../../../../shared/table/components/table-data/table-data.component";
import {
  CentralCustoDetailsComponent
} from "./components/central-custo-details/central-custo-details.component";
import {CentralCustoService} from './central-custo.service';
import {CentralDeCusto} from "../../../../../models/central-de-custo.interface";
import {UserService} from "../../../../../shared/services/user/user.service";

@Component({
    selector: 'central-custo',
    standalone: true,
    templateUrl: './central-custo.component.html',
    styleUrl: './central-custo.component.scss',
    imports: [
        TabsComponent,
        InputIconComponent,
        ButtonComponent,
        CommonModule,
        SidebarComponent,
        PaginatorComponent,
        ListComponent,
        ItemListComponent,
        HeaderColComponent,
        ItemDataComponent,
        HeaderListComponent,
        StatusCircleComponent,
        TableComponent,
        HeaderTableComponent,
        HeaderTableDataComponent,
        ItemTableComponent,
        TableDataComponent,
        CentralCustoDetailsComponent
    ]
})
export class CetralCustoComponent implements OnInit{

  isList = this.service.showlist;

  data: CentralDeCusto[] = []
  empresaId: number = 0

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly service: CentralCustoService,
    private readonly usuarioService: UserService
  ){}

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.listenCentralCusto();
    }
  }

  adicionarCentralCusto() {
    const closeRef = this.sidebarService.openSide(SidebarNovaCentralCustoComponent);
    closeRef.sub.subscribe(data => {
      if (data) {
        this.listenCentralCusto();
      }
    });
  }

  showDetails(id: number) {
   this.service.showDetails.next(true);
   this.service.showlist.next(false);
   this.service.idCentralSelected.next(id);
  }

  listenCentralCusto() {
    this.service.listarPorEmpresa(this.empresaId).subscribe({
      next: centrais => {
        this.data = centrais;
      }
    });
  }

  formatAndMaskString(input: string) {
    if (input.length !== 16) {
      throw new Error("A string deve ter exatamente 16 caracteres.");
    }

    // Substitui os primeiros 12 caracteres por '*'
    let maskedString = '**** **** ****' + input.slice(12);

    // Verifica se a maskedString não é nula ou indefinida
    let parts = maskedString.match(/.{1,4}/g);
    if (parts === null) {
      throw new Error("Erro ao formatar a string.");
    }

    return parts.join(' ');
  }
}
