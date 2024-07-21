import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { SolicitacaoUserRequest } from '../../../../../../../../../models/user.interface';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { CheckboxComponent } from '../../../../../../../../../shared/checkbox/checkbox.component';
import { DividerComponent } from '../../../../../../../../../shared/divider/divider.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { InputComponent } from '../../../../../../../../../shared/input/input.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { SidebarComponent } from '../../../../../../../../../shared/sidebar/sidebar.component';
import {
  HeaderTableDataComponent,
} from '../../../../../../../../../shared/table/components/header-table-data/header-table-data.component';
import {
  HeaderTableComponent,
} from '../../../../../../../../../shared/table/components/header-table/header-table.component';
import { ItemTableComponent } from '../../../../../../../../../shared/table/components/item-table/item-table.component';
import { TableDataComponent } from '../../../../../../../../../shared/table/components/table-data/table-data.component';
import { TableComponent } from '../../../../../../../../../shared/table/table.component';
import { ToggleComponent } from '../../../../../../../../../shared/toggle/toggle.component';
import { ViajantesService } from '../../../../../../viajantes/viajantes.service';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { SidebarService } from '../../../../../../../../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-vincular-usuario',
  standalone: true,
  imports: [
    ButtonComponent,
    SidebarComponent,
    DividerComponent,
    InputComponent,
    InputIconComponent,
    ListComponent,
    TableDataComponent,
    TableDataComponent,
    HeaderTableComponent,
    HeaderTableDataComponent,
    ItemTableComponent,
    TableComponent,
    CheckboxComponent,
    ToggleComponent,
    ItemDataComponent
],
  templateUrl: './vincular-usuario.component.html',
  styleUrl: './vincular-usuario.component.scss'
})
export class VincularUsuarioComponent {


  @Input() data!: any;

  pesquisa = new FormControl();
  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  usuarios: any[] = [];
  controlToggle = new FormControl();
  vincularSelect: boolean = false;

  filtro: SolicitacaoUserRequest = {
    pagina: this.pagina,
    tamanhoPagina: this.tamanhoPagina,
    nome: null,
    email: null,
    role: null,
    statusUser: null,
    empresaId: null,
  };


  constructor(
    private readonly viajantesService: ViajantesService,
    private readonly sibebarService: SidebarService
  ) {
    this.listenViajantes();
    this.campoPesquisa();
  }

  listenViajantes() {
    this.viajantesService.listarPor(this.filtro).subscribe({
      next: (integrantes) => {
        this.totalItems = integrantes.totalCount;
        this.usuarios = integrantes.itens;
      },
    });
  }

  campoPesquisa() {
    this.pesquisa.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      if (value == '') {
        this.filtro.nome = null;
      } else {
        this.filtro.nome = value;
      }
      console.log(this.filtro)
      this.listenViajantes();
    });
  }

  vincularUsuario() {
    this.sibebarService.closeSide(true)
  }

  desabilitarBotao() {
    if(!this.vincularSelect) {
      this.vincularSelect = !this.vincularSelect
    }
  }

  cancelar(){
    this.sibebarService.closeSide()
  }


}
