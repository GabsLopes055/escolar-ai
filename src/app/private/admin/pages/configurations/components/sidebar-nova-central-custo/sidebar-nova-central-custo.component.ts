import { Component } from '@angular/core';
import { SidebarComponent } from "../../../../../../shared/sidebar/sidebar.component";
import { InputComponent } from "../../../../../../shared/input/input.component";
import { ToggleComponent } from "../../../../../../shared/toggle/toggle.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";

@Component({
    selector: 'app-sidebar-nova-central-custo',
    standalone: true,
    templateUrl: './sidebar-nova-central-custo.component.html',
    styleUrl: './sidebar-nova-central-custo.component.scss',
    imports: [SidebarComponent, InputComponent, ToggleComponent, ButtonComponent]
})
export class SidebarNovaCentralCustoComponent {

}
