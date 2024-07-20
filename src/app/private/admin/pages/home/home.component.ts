import {ModalService} from './../../../../shared/modal/modal.service';
import {MenuService} from './../../../../shared/menu/menu.service';
import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../../../shared/navbar/navbar.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {ButtonComponent} from "../../../../shared/button/button.component";
import {RouterLink} from '@angular/router';
import {ToastService} from '../../../../shared/toast/toast.service';
import {
  AbrirChamadoComponent
} from "./components/abrir-chamado/abrir-chamado.component";
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
    private readonly modalService:ModalService,
    private readonly toast: ToastService,
    private readonly modal: ModalService
  ) {
    // const usuario = this.userService.user;
    // const firstName = usuario?.nome.split(" ")[0];
    navbarService.setTitle("Ajuda");
    this.menuService.setSelected({icon: 'help', label: 'Ajuda', route: '/admin', checked: true})
    navbarService.showBtnViajar.next(true);
    menuService.updateMenu();
  }
  ngOnInit(): void {
    // setTimeout(() =>{
    //   this.modalService.open(TourComponent);
    // }, 800);
  }

  abrirChamado() {
    this.modal.open(AbrirChamadoComponent);
  }
}
