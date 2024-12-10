import { professores } from './../../../../../../models/professores.interface';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import {
  Tab,
  TabsComponent,
} from '../../../../../../shared/tabs/tabs.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { chamada } from '../../../../../../models/chamada.interface';
import { alunos } from '../../../../../../models/alunos.interface';
import { TurmasService } from '../../turmas.service';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { RealizarChamadaComponent } from './components/aba-chamada/realizar-chamada/realizar-chamada.component';
import { ExcluirTurmaComponent } from './components/aba-chamada/excluir-turma/excluir-turma.component';
import { VerChamadaComponent } from './components/aba-chamada/ver-chamada/ver-chamada.component';
import { BaixarChamadaComponent } from './components/aba-chamada/baixar-chamada/baixar-chamada.component';
import { RemoverAlunoComponent } from './components/aba-aluno/remover-aluno/remover-aluno.component';
import { RemoverProfessorComponent } from './components/aba-professor/remover-professor/remover-professor.component';
import { VincularAlunoComponent } from './components/aba-aluno/vincular-aluno/vincular-aluno.component';
import { VincularProfessorComponent } from './components/aba-professor/vincular-professor/vincular-professor.component';

@Component({
  selector: 'visualizar-turma',
  standalone: true,
  imports: [
    ButtonComponent,
    TabsComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    PaginatorComponent,
  ],
  templateUrl: './visualizar-turma.component.html',
  styleUrl: './visualizar-turma.component.scss',
})
export class VisualizarTurmaComponent {
  data: chamada[] = [
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'João Santos',
      materia: 'Matemática',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Ana Oliveira',
      materia: 'Geografia',
      perfil: 'Professor(a)',
    },
    { colaborador: 'Joana Silva', materia: 'História', perfil: 'Professor(a)' },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Marcelo Santos',
      materia: 'Química',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Nataly Oliveira',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Andrey Silva',
      materia: 'Biologia',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Educação Física',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
  ];

  alunos: alunos[] = [
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
    {
      nome: 'Juliana Oliveira',
      responsavel: 'Simone Oliveira',
      email_responsavel: 'simoneoliveira@gmail.com',
    },
    {
      nome: 'Rafael Santos',
      responsavel: 'Maria Santos',
      email_responsavel: 'mariasantos@gmail.com',
    },
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
  ];

  professores: professores[] = [
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
    },
  ];

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Chamadas',
      value: 'chamadas',
      selected: false,
    },
    {
      icon: '',
      label: 'Alunos',
      value: 'alunos',
      selected: false,
    },
    {
      icon: '',
      label: 'Professores',
      value: 'professores',
      selected: false,
    },
  ];

  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  opcaoTabSelecionada = '';

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly turmaService: TurmasService,
    private readonly modalService: ModalService
  ) {}

  changePage($event: number) {
    throw new Error('Method not implemented.');
  }

  visualizarChamada() {
    this.modalService.open(VerChamadaComponent);
  }

  baixarChamada() {
    this.modalService.open(BaixarChamadaComponent);

  }

  excluirTurma() {
    this.modalService.open(ExcluirTurmaComponent);
    // console.log(this.opcaoTabSelecionada)
    // if(this.opcaoTabSelecionada === 'chamadas') {
    // }
    // if(this.opcaoTabSelecionada === 'alunos') {

    // }
    // if(this.opcaoTabSelecionada === 'professores') {

    // }
  }

  desvincularAluno() {
    this.modalService.open(RemoverAlunoComponent);
  }

  vincularAluno() {
    this.modalService.open(VincularAlunoComponent);
  }

  vincularProfessor() {
    this.modalService.open(VincularProfessorComponent);
  }

  desvincularProfessor() {
    this.modalService.open(RemoverProfessorComponent);
  }

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  back() {
    this.turmaService.steps.next('listar-turmas');
  }

  realizarChamada() {
    this.modalService.open(RealizarChamadaComponent);
  }
}
