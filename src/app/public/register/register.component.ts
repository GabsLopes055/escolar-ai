import {Component} from '@angular/core';
import {InputIconComponent} from "../../shared/input-icon/input-icon.component";
import {RouterLink} from '@angular/router';
import {ButtonComponent} from "../../shared/button/button.component";
import {
  FeedbackInitRegisterComponent
} from "./components/feedback-init-register/feedback-init-register.component";
import {AuthService} from '../services/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {Solicitacao} from '../../models/authentication.interface';
import {ToastService} from "../../shared/toast/toast.service";
import {
  FeedbackErroRegisterComponent
} from "./components/feedback-erro-register/feedback-erro-register.component";

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
    FeedbackInitRegisterComponent,
    ReactiveFormsModule,
    FormsModule,
    FeedbackErroRegisterComponent
  ]
})
export class RegisterComponent {

  form = new FormGroup({
    cnpj: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  isFeedback = false;
  showForm = true;
  showFeedbackSuccess: boolean = false;
  showFeedbackErro: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly toast: ToastService
  ) {
  }

  register() {
    this.authService.registerEmpresa(this.form.value as Solicitacao).subscribe({
      next: () => {
        this.showForm = false;
        this.showFeedbackSuccess = true;
      },
      error: erro => {
        this.showForm = false;
        this.showFeedbackErro = true;
      }
    })
  }

  showFeedback() {
    this.isFeedback = !this.isFeedback;
  }
}
