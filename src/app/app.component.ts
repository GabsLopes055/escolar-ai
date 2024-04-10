import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu, MenuComponent } from "./shared/menu/menu.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { MenuService } from './shared/menu/menu.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MenuComponent, NavbarComponent, AsyncPipe]
})
export class AppComponent {
  title = 'togotrip-angular';
  isMenu: Menu[] = [];

  constructor (private menuService: MenuService) {
    this.menuService._menu.subscribe(menu => this.isMenu = menu);
  }
}
