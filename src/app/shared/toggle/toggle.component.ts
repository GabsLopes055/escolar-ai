import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'toggle',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
 @Input() isChecked = false;
 @Input() icon = '';
 @Input() label = '';
 @Input() control: FormControl = new FormControl();

 @Output() changeToggle = new EventEmitter();




 change() {
  this.isChecked = !this.isChecked;
  this.changeToggle.emit(this.isChecked);
 }
}
