import { ModalService } from './../../../../shared/modal/modal.service';
import { MenuService } from './../../../../shared/menu/menu.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { Router, RouterLink } from '@angular/router';
import { TourComponent } from './components/tour/tour.component';

@Component({
    selector: 'app-home',
    standalone: true,
    host: { class: 'main' },
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonComponent, RouterLink]
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly userService: UserService,
    private readonly modalService:ModalService
  ) {
    const usuario = this.userService.user;
    const firstName = usuario?.nome.split(" ")[0]
    navbarService.setTitle(`Hey, ${firstName}`);
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
  }
  ngOnInit(): void {
    setTimeout(() =>{
      this.modalService.open(TourComponent);
    }, 800);
    
  }
}
