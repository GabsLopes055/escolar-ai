import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SidebarComponent } from '../../../../../../shared/sidebar/sidebar.component';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { ToggleComponent } from '../../../../../../shared/toggle/toggle.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { OptionSelect, SelectComponent } from '../../../../../../shared/select/select.component';
import { TooltipDirective } from '../../../../../../shared/directives/tooltip.directive';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { CartoesService } from '../../../configurations/cartoes/cartoes.service';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { CentralCustoService } from '../../central-custo.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { CentralDeCustoRequest } from '../../../../../../models/central-de-custo.interface';




@Component({
  selector: 'app-sidebar-nova-central-custo',
  standalone: true,
  templateUrl: './sidebar-nova-central-custo.component.html',
  styleUrl: './sidebar-nova-central-custo.component.scss',
  imports: [
    SidebarComponent,
    InputComponent,
    ToggleComponent,
    ButtonComponent,
    SelectComponent,
    TooltipDirective,
  ],
})
export class SidebarNovaCentralCustoComponent implements OnInit {
  options: OptionSelect[] = [];

  empresaId: number = 0;
  tetoOrcamentario = false;
  controlTetoOrcamentario = new FormControl();
  form = new FormGroup({
    nome: new FormControl(),
    valor: new FormControl(),
    empresaId: new FormControl(this.empresaId),
    cartaoId: new FormControl(),
  });

  constructor(
    private sidebarService: SidebarService,
    private readonly cartoesService: CartoesService,
    private readonly usuarioService: UserService,
    private readonly centralDeCustoService: CentralCustoService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    const empresaId = this.usuarioService.user?.empresaId;
    if (empresaId) {
      this.empresaId = parseInt(String(empresaId));
      this.form.controls.empresaId.setValue(parseInt(String(empresaId)));
      this.listenCartoes();
    }
  }

  close() {
    this.sidebarService.closeSide();
  }

  tetoChange(data: any) {
    this.tetoOrcamentario = data;
  }

  cadastrar() {
    this.form.controls.valor.setValue(
      parseFloat(this.form.controls.valor.value)
    );
    this.centralDeCustoService
      .cadastrar(this.form.value as CentralDeCustoRequest)
      .subscribe({
        next: () => {
          this.toast.notify({
            message: 'Central de custo cadastrada com sucesso.',
            type: 'SUCCESS',
          });
          this.sidebarService.closeSide(true);
        },
        error: () => {
          this.toast.notify({
            message: 'Não foi possível cadastrar central de custo cadastrada.',
            type: 'ERROR',
          });
          this.sidebarService.closeSide(false);
        },
      });
  }

  // LISTEN
  listenCartoes() {
    this.cartoesService.listar(this.empresaId).subscribe({
      next: (cartoes) => {
        this.options = cartoes.map((cartao) => {
          return {
            value: cartao.id,
            label: `${this.formatString(cartao.cardNumber)} - ${
              cartao.cardName
            }`,
          };
        });
      },
    });
  }

  // HELPER

  private formatString(numeroCartao: string) {
    if (numeroCartao.length !== 16) {
      throw new Error('A string deve ter exatamente 16 caracteres');
    }

    let formattedStr = '';
    for (let i = 0; i < numeroCartao.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedStr += ' ';
      }
      formattedStr += numeroCartao[i];
    }
    return formattedStr;
  }
}
