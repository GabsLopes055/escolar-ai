import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

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
 @Input() formControl: FormControl = new FormControl();




 change() {
  this.isChecked = !this.isChecked;
 }
}
