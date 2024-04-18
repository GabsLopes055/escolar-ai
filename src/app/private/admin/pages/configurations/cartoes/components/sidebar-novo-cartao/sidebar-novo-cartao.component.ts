import { Component } from '@angular/core';
import { SidebarComponent } from "../../../../../../../shared/sidebar/sidebar.component";
import { InputComponent } from "../../../../../../../shared/input/input.component";
import { CreditCardComponent } from "../../../../../../../shared/credit-card/credit-card.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-sidebar-novo-cartao',
    standalone: true,
    templateUrl: './sidebar-novo-cartao.component.html',
    styleUrl: './sidebar-novo-cartao.component.scss',
    imports: [SidebarComponent, InputComponent, CreditCardComponent, ReactiveFormsModule, FormsModule]
})
export class SidebarNovoCartaoComponent {

    group = new FormGroup({
        numberCard: new FormControl(''),
        name: new FormControl(''),
        cvc: new FormControl(''),
        mouth: new FormControl(''),
    });
}
