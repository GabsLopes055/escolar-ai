import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/button/button.component";
import { InputIconComponent } from "../../shared/input-icon/input-icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent {

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


  continuar() {
    this.step++;
  }

}
