import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  isOpen = true;

  menu: Menu[] = []

  constructor(private service: MenuService) {
    console.log();
    this.service._menu.subscribe(menu => this.menu = menu);
  }

  ngOnInit(): void {
    
    
    ;
    
  }

  openClose() {
    this.isOpen = !this.isOpen;
  }
}

export interface Menu {
  icon: string;
  label: string;
  route: string;
  checked: boolean;
}
