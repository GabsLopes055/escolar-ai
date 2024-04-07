import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [ButtonComponent]
})
export class NavbarComponent {

}
