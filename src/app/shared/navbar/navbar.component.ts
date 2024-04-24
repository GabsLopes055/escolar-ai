import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NavbarService } from './navbar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user/user.service';

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
    nameUser: string | undefined = '';

    constructor(
        private readonly service: NavbarService,
        private readonly userService: UserService
    ) {
        this.title = service.title;
        const usuario = this.userService.user;
        const firstName = usuario?.nome.split(" ")[0];
        this.nameUser = firstName;
    }


    showHideDetail() {
        this.isDetail = !this.isDetail;
    }
}
