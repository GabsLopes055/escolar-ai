import { Component, Input } from '@angular/core';

@Component({
  selector: 'tgt-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() icon!:string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fieldButton: 'outline' | 'field' = 'field';
  @Input() color: TypeColors = 'primary';
  @Input() disabled: boolean = false;
  @Input() border: boolean = true


  colors: Colors = {
    primary: '#000',
    secundary: '#fdd325',
    warning: '',
    success: '',
    error: '#FA077C'
  }
    
}
type TypeColors = 'primary' | 'secundary' | 'warning' | 'success' | 'error';
type Colors = {
  [key in TypeColors]: string;
}