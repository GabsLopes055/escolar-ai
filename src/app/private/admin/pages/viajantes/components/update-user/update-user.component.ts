import {Component, Input, OnInit} from '@angular/core';
import {
  SidebarComponent
} from "../../../../../../shared/sidebar/sidebar.component";
import {
  InputViewComponent
} from "../../../../../../shared/input-view/input-view.component";
import {NgStyle} from "@angular/common";
import {ViajantesService} from "../../viajantes.service";
import {Role, User} from "../../../../../../models/user.interface";
import {InputComponent} from "../../../../../../shared/input/input.component";
import {
  OptionSelect,
  SelectComponent
} from "../../../../../../shared/select/select.component";
import {RadioComponent} from "../../../../../../shared/radio/radio.component";
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {SidebarService} from "../../../../../../shared/sidebar/sidebar.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    SidebarComponent,
    InputViewComponent,
    NgStyle,
    InputComponent,
    SelectComponent,
    RadioComponent,
    ButtonComponent
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit{

  @Input() data!: number;

  isEdit = false;
  user!: User;

  options: OptionSelect[] = [
    {label: 'Masculino', value: 'MASCULINO'},
    {label: 'Feminino', value: 'FEMININO'},
  ];

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    dataNascimento: new FormControl(),
    sexo: new FormControl(),
    role: new FormControl(),
  });

  constructor(
    private readonly viajantesService: ViajantesService,
    private readonly sidebar: SidebarService
  ) {

  }

  ngOnInit(): void {
    this.viajantesService.buscar(this.data).subscribe({
      next: user => {
        this.user = user;
        this.form.controls.id.setValue(user.id);
        this.form.controls.nome.setValue(user.nome);
        this.form.controls.cpf.setValue(user.cpf);
        this.form.controls.email.setValue(user.email);
        this.form.controls.dataNascimento.setValue(user.dataNascimento);
        this.form.controls.sexo.setValue(user.sexo);
        this.form.controls.role.setValue(user.role);
      }
    })
  }

  changeEdit() {
    if(!this.isEdit){
      this.isEdit = !this.isEdit;
    }
  }

  cancelar() {
    this.isEdit = false;
  }

  protected readonly Role = Role;
}
