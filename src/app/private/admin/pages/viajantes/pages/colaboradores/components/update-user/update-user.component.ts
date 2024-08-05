import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../../../../../../shared/sidebar/sidebar.component';
import { InputViewComponent } from '../../../../../../../../shared/input-view/input-view.component';
import { DatePipe, NgStyle } from '@angular/common';
import { ViajantesService } from '../../../../viajantes.service';
import {
  Role,
  User,
  UserPutRequest,
} from '../../../../../../../../models/user.interface';
import { InputComponent } from '../../../../../../../../shared/input/input.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../../../shared/select/select.component';
import { RadioComponent } from '../../../../../../../../shared/radio/radio.component';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { SidebarService } from '../../../../../../../../shared/sidebar/sidebar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../../../../../../../../shared/toast/toast.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    SidebarComponent,
    InputViewComponent,
    NgStyle,
    DatePipe,
    InputComponent,
    SelectComponent,
    RadioComponent,
    ButtonComponent,
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent implements OnInit {
  @Input() data!: number;
  dataNascimento: any;
  isEdit = false;
  user!: User;

  options: OptionSelect[] = [
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' },
  ];

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    dataNascimento: new FormControl(),
    sexo: new FormControl(),
    role: new FormControl(),
    telefone: new FormControl(),
    empresaId: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(
    private readonly viajantesService: ViajantesService,
    private readonly sidebar: SidebarService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    this.viajantesService.buscar(this.data).subscribe({
      next: (user) => {
        this.user = user;
        this.form.controls.id.setValue(user.id);
        this.form.controls.nome.setValue(user.nome);
        this.form.controls.cpf.setValue(user.cpf);
        this.form.controls.email.setValue(user.email);
        this.form.controls.telefone.setValue(user.telefone);
        this.form.controls.dataNascimento.setValue(user.dataNascimento);
        this.form.controls.sexo.setValue(user.sexo);
        this.form.controls.role.setValue(user.role);
      },
    });
  }

  changeEdit() {
    if (!this.isEdit) {
      this.isEdit = !this.isEdit;
    }
  }

  cancelar() {
    this.isEdit = false;
  }

  atualizar() {
    console.log(this.form.value);
    this.viajantesService.atualizar(this.form.value as any).subscribe({
      next: () => {
        this.toast.notify({
          message: 'Integrante atualizado com sucesso.',
          type: 'SUCCESS',
        });
        this.sidebar.closeSide(true);
      },
      error: () => {
        this.toast.notify({
          message: 'Ocorreu um erro ao atualizar integrante.',
          type: 'ERROR',
        });
      },
    });
  }

  converteData(date: Date) {
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  protected readonly Role = Role;
}
