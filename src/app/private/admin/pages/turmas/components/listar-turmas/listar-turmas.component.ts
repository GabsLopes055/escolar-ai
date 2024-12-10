import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { turma } from '../../../../../../models/turma.interface';
import { DividerComponent } from '../../../../../../shared/divider/divider.component';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { TurmasService } from '../../turmas.service';
import { TooltipDirective } from '../../../../../../shared/directives/tooltip.directive';

@Component({
  selector: 'listar-turmas',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    DividerComponent,
    PaginatorComponent,
    TooltipDirective,
  ],
  templateUrl: './listar-turmas.component.html',
  styleUrl: './listar-turmas.component.scss',
})
export class ListarTurmasComponent {
  data: turma[] = [
    { nome: '8° Ano - Turma A', periodo: 'Manhã' },
    { nome: '8° Ano - Turma B', periodo: 'Tarde' },
    { nome: '8° Ano - Turma C', periodo: 'Manhã' },
    { nome: '8° Ano - Turma D', periodo: 'Tarde' },
    { nome: '8° Ano - Turma E', periodo: 'Manhã' },
    { nome: '8° Ano - Turma F', periodo: 'Tarde' },
    { nome: '8° Ano - Turma A', periodo: 'Manhã' },
    { nome: '8° Ano - Turma B', periodo: 'Tarde' },
    { nome: '8° Ano - Turma C', periodo: 'Manhã' },
    { nome: '8° Ano - Turma D', periodo: 'Tarde' },
    { nome: '8° Ano - Turma E', periodo: 'Manhã' },
    { nome: '8° Ano - Turma F', periodo: 'Tarde' },
    { nome: '8° Ano - Turma A', periodo: 'Manhã' },
    { nome: '8° Ano - Turma B', periodo: 'Tarde' },
    { nome: '8° Ano - Turma C', periodo: 'Manhã' },
    { nome: '8° Ano - Turma D', periodo: 'Tarde' },
    { nome: '8° Ano - Turma E', periodo: 'Manhã' },
    { nome: '8° Ano - Turma F', periodo: 'Tarde' },
  ];

  constructor(private readonly turmaService: TurmasService) {}

  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  criarTurma() {
    this.turmaService.steps.next('criar-turma');
  }

  visualizarturma() {
    this.turmaService.steps.next('visualizar-turma');
  }

  changePage(pagina: number) {}
}
