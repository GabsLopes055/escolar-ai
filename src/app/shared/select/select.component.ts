import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DividerComponent } from "../divider/divider.component";
import { FormControl } from '@angular/forms';

@Component({
    selector: 'tgt-select',
    standalone: true,
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    imports: [DividerComponent]
})
export class SelectComponent implements OnChanges {
  isOpenModal = false;

  @Input() label: string = 'Selecione';
  @Input() options: OptionSelect[] = [];
  @Input() control: FormControl = new FormControl();
  @Input() icon: string = 'arrow_drop_down';
  @Output() changeValue = new EventEmitter();
  @Input() border: boolean = true
  ngOnChanges(changes: SimpleChanges) {
    if (changes['control'] && this.control.value) {
      const selectedOption = this.options.find(
        (option) => option.value === this.control.value,
      );
      if (selectedOption) {
        this.label = selectedOption.label;
      }
    }
  }

  openModal() {
    this.isOpenModal = !this.isOpenModal;
  }

  select(option: OptionSelect) {
    this.label = option.label;
    this.isOpenModal = false;
    this.control.setValue(option.value);
    this.changeValue.emit(this.control.value);
  }
}
export interface OptionSelect {
  label: string;
  value: any;
}
