import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpen = true;

  menu = [
    {icon: 'dashboard', label: 'Dashboard', route: '#'},
    {icon: 'date_range', label: 'Reservas', route: '#'},
    {icon: 'task_alt', label: 'Aprovações', route: '#'},
    {icon: 'person_4', label: 'Viajantes', route: '#'},
    {icon: 'settings', label: 'Configurações', route: '#'},
  ]



  openClose() {
    this.isOpen = !this.isOpen;
  }
}
