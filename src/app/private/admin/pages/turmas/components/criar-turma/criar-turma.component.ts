import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { TurmasService } from '../../turmas.service';

@Component({
  selector: 'criar-turma',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent],
  templateUrl: './criar-turma.component.html',
  styleUrl: './criar-turma.component.scss'
})
export class CriarTurmaComponent {

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    periodo: new FormControl('', Validators.required)
  })

  constructor(
    private readonly turmaService: TurmasService
  ){}

  salvar() {
    this.turmaService.steps.next("listar-turmas")
  }

}
