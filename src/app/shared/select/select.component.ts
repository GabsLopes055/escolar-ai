import { Component, Input, input } from '@angular/core';
import { DividerComponent } from "../divider/divider.component";
import { FormControl } from '@angular/forms';

@Component({
    selector: 'tgt-select',
    standalone: true,
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    imports: [DividerComponent]
})
export class SelectComponent {
  isOpenModal = false;

  @Input() label: string = 'Selecione';
  @Input() options: OptionSelect[] = [];
  @Input() control: FormControl = new FormControl();


  openModal() {
    this.isOpenModal = !this.isOpenModal;
  }

  select(option: OptionSelect) {
    this.label = option.label;
    this.isOpenModal = false;
    this.control.setValue(option.value);
  }
}
export interface OptionSelect {
  label: string;
  value: any;
}