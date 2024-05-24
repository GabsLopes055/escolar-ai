import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ButtonComponent } from "../../../../../shared/button/button.component";
import { DividerComponent } from "../../../../../shared/divider/divider.component";
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { SidebarNovoCartaoComponent } from './components/sidebar-novo-cartao/sidebar-novo-cartao.component';
import { CreditCardViewComponent } from "../../../../../shared/credit-card-view/credit-card-view.component";
import { Cartao } from '../../../../../models/cartao.interface';
import { CardNumberPipe } from '../../../../../shared/pipes/card-number/card-number.pipe';
import {UserService} from "../../../../../shared/services/user/user.service";
import {CartoesService} from "./cartoes.service";
import {ModalService} from "../../../../../shared/modal/modal.service";
import {ConfirmComponent} from "./components/confirm/confirm.component";
import {ToastService} from "../../../../../shared/toast/toast.service";

@Component({
    selector: 'cartoes',
    standalone: true,
    templateUrl: './cartoes.component.html',
    styleUrl: './cartoes.component.scss',
    imports: [ButtonComponent, DividerComponent, CreditCardViewComponent, CardNumberPipe]
})
export class CartoesComponent implements OnInit{

  cartoes: Cartao[] = [];
  empresaId!: number;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly usuarioService: UserService,
    private readonly cartoesService: CartoesService,
    private readonly modalService: ModalService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if(empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.listenEmpresaId();
    }
  }

  addCard() {
    const close = this.sidebarService.openSide(SidebarNovoCartaoComponent);
    close.sub.subscribe({
      next: data => {
        this.cartoes.push(data)
      }
    })
  }

  listenEmpresaId() {
    this.cartoesService.listar(this.empresaId).subscribe({
      next: cartoes => {
        this.cartoes = cartoes;
      }
    });
  }

  excluir(id?: number) {
    const ref = this.modalService.open(ConfirmComponent);
    ref.closed.subscribe({
      next: data => {
        if (data) {
          if(id) {
            this.cartoesService.delete(id).subscribe({
              next: () => {
                this.toast.notify({message: 'Cartão deletado com sucesso.', type: "SUCCESS" });
                this.listenEmpresaId();
              },
              error: () => {
                this.toast.notify({message: 'Ocorreu um erro ao deletar cartão.', type: "ERROR" });
              }
            })
          }

        }
      }
    });
  }
}
