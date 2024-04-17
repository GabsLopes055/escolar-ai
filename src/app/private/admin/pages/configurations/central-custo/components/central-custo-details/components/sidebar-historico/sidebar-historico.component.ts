import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from "../../../../../../../../../shared/sidebar/sidebar.component";
import { HistoricoUsuarioComponent } from "../../../../../../../../../shared/historico-usuario/historico-usuario.component";

@Component({
    selector: 'app-sidebar-historico',
    standalone: true,
    templateUrl: './sidebar-historico.component.html',
    styleUrl: './sidebar-historico.component.scss',
    imports: [SidebarComponent, HistoricoUsuarioComponent]
})
export class SidebarHistoricoComponent implements OnInit{
  @Input() data: any;

  constructor() {
    
  }
  ngOnInit(): void {
    console.log(this.data);
  }
}
