import {Component, Input} from '@angular/core';
import {NgxMaskDirective} from "ngx-mask";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'tgt-textarea',
  standalone: true,
    imports: [
        NgxMaskDirective,
        ReactiveFormsModule
    ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'date' = 'text';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() mask: string = '';
  @Input() readonly: boolean = false;
}
