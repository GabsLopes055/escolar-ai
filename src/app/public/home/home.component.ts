import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonComponent, RouterLink]
})
export class HomeComponent {

}
