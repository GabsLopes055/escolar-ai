import { SidebarService } from '../../../../../../../shared/sidebar/sidebar.service';
import { ReservasComponent } from '../../../../reservas/reservas.component';
import { Component, Input } from '@angular/core';
import { SidebarComponent } from "../../../../../../../shared/sidebar/sidebar.component";
import { InputComponent } from "../../../../../../../shared/input/input.component";
import { ToggleComponent } from "../../../../../../../shared/toggle/toggle.component";
import { ButtonComponent } from "../../../../../../../shared/button/button.component";
import {
  OptionSelect,
  SelectComponent
} from "../../../../../../../shared/select/select.component";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-sidebar-nova-central-custo',
    standalone: true,
    templateUrl: './sidebar-nova-central-custo.component.html',
    styleUrl: './sidebar-nova-central-custo.component.scss',
    imports: [SidebarComponent, InputComponent, ToggleComponent, ButtonComponent, SelectComponent]
})
export class SidebarNovaCentralCustoComponent {

  options: OptionSelect[] = [
    {label: 'Masculino', value: 'MASCULINO'},
    {label: 'Feminino', value: 'FEMININO'},

  ];

  tetoOrcamentario = false;
    constructor(
        private sidebarService: SidebarService
    ) {}

    close() {
        this.sidebarService.closeSide();
    }

    tetoChange(data: any) {
      this.tetoOrcamentario = data;
      console.log(data)
    }

}
