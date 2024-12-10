import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ListarTurmasComponent } from "./components/listar-turmas/listar-turmas.component";
import { TurmasService } from './turmas.service';
import { CriarTurmaComponent } from "./components/criar-turma/criar-turma.component";
import { VisualizarTurmaComponent } from "./components/visualizar-turma/visualizar-turma.component";

@Component({
  selector: 'app-turmas',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ReactiveFormsModule, ListarTurmasComponent, CriarTurmaComponent, VisualizarTurmaComponent],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.scss',
})
export class TurmasComponent implements OnDestroy{

  component!: string;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly turmaService: TurmasService
  ) {
    navbarService.setTitle('Turmas');
    menuService.setSelected({
      icon: 'meeting_room',
      label: 'Turmas',
      route: '/admin/turmas',
      checked: true,
    });

    this.turmaService.steps.subscribe(value => {
      this.component = value;
    });

  }
  ngOnDestroy(): void {
    this.turmaService.steps.next('listar-turmas');
  }
}
