import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'tgt-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() value!: any;
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'date' = 'text';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() mask: string = '';
  @Input() readonly: boolean = false;

  @Output() changeInput = new EventEmitter();

  change() {
    console.log(this.value)
    this.changeInput.emit()
  }

}
