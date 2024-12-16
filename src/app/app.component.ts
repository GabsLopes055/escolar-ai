import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Menu, MenuComponent } from './shared/menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuService } from './shared/menu/menu.service';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MenuComponent,
    NavbarComponent,
    AsyncPipe,
    HttpClientModule,
    ButtonComponent,
  ],
})
export class AppComponent {
  title = 'Escolar Ai';
  email: string = 'contato@escolarai.com';

  constructor(
    private readonly router: Router
  ) {}

  irParaLogin() {
    window.open("https://escolarai.com.br/login");
  }
}
