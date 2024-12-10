import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '../../shared/button/button.component';
import { InputIconComponent } from '../../shared/input-icon/input-icon.component';
import { InputComponent } from '../../shared/input/input.component';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  host: {class: 'main'},
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    InputIconComponent,
    RouterLink,
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    InputComponent
]
})
export class RegisterComponent {

  form = new FormGroup({
    cnpj: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  step: number = 1;

  haveUppercaseAndLowwercase = false;
  contentNumbers = false;
  specialChars = false;


  constructor(
    private readonly authService: AuthService,
    private readonly toast: ToastService
  ) {
  }


  register() {
    this.step++;
  }

  cadastrar() {
    this.toast.notify({message: 'Cadastrado com sucesso', type: 'SUCCESS'});
  }
}
