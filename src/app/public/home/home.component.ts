import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { RouterLink } from '@angular/router';
import {Tab, TabsComponent} from "../../shared/tabs/tabs.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
  imports: [ButtonComponent, RouterLink, TabsComponent]
})
export class HomeComponent {

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Gestão de Viagens',
      value: 'gestao_de_viagens',
      selected: true,
    },
    {
      icon: '',
      label: 'Gestão de Despesas',
      value: 'gestao_de_despesas',
      selected: false,
    },
    {
      icon: '',
      label: 'Gestão de Equipe',
      value: 'gestao_de_equipe',
      selected: false,
    },
  ];

  opcaoSelecionada: string = this.tabs[0].value;


  chosenTab(tab: string) {
    this.opcaoSelecionada = tab;
  }
}
