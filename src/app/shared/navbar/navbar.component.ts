import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NavbarService } from './navbar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [ButtonComponent, CommonModule, RouterLink]
})
export class NavbarComponent {

    isDetail = false;
    title;
    isViajar = this.service.showBtnViajar

    constructor(
        private readonly service: NavbarService
    ) {
        this.title = service.title;
    }


    showHideDetail() {
        this.isDetail = !this.isDetail;
    }
}
