import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./shared/menu/menu.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MenuComponent, NavbarComponent]
})
export class AppComponent {
  title = 'togotrip-angular';
}
