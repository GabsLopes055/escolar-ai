import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'tgt-input-icon',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './input-icon.component.html',
  styleUrl: './input-icon.component.scss'
})
export class InputIconComponent {
  @Input() type!: string;
  @Input() icon!: string;
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() mask: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() backGround: string = '';
  @Input() border!: boolean;
}
