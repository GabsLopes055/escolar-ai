import { Component, OnInit } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/button/button.component";
import { Router, RouterLink } from '@angular/router';
import { InputIconComponent } from "../../shared/input-icon/input-icon.component";
import { MenuService } from '../../shared/menu/menu.service';
import { AuthService } from '../services/auth.service';
import { AuthenticationRequest } from '../../models/authentication.interface';
import { User } from '../../models/user.interface';
import { UserService } from '../../shared/services/user/user.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  host: { class: 'main' },
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    InputComponent,
    ButtonComponent,
    RouterLink,
    InputIconComponent,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly toastService: ToastService
  ) { }

  ngOnInit(): void {

  }

  entrar() {
    this.router.navigate(['/admin/']);
    this.menuService.updateMenu();
    // this.authService.logar(this.formLogin.value as AuthenticationRequest).subscribe({
    //   next: response => {
    //     window.sessionStorage.setItem('token', response.token);

    //     const token = response.token.split(".")[1];
    //     const payload = JSON.parse(atob(token));
    //     const usuario: User = payload['usuario'];

    //     this.userService.usuarioInstance = usuario;
    //     this.userService.usuario.next(usuario);

    //   },
    //   error: erro => {
    //     this.toastService.notify({message: 'Usuário ou senha incorreto', type: 'ERROR'})
    //   }
    // });

  }

}

export interface Payload {
  sub: "jonathan.souza@togotrip.com.br",
  usuario: User
  iat: number,
  exp: number
}
