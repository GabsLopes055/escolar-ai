import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'tgt-radio',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {

  @Input() control = new FormControl();
  @Input() value:any;
}
