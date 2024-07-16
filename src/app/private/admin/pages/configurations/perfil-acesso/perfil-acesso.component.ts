import { Status } from './../../../../../shared/status-circle/status-circle.component';
import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from '../../../../../shared/toggle/toggle.component';
import { DividerComponent } from '../../../../../shared/divider/divider.component';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { NgStyle } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'perfil-acesso',
  standalone: true,
  imports: [
    ToggleComponent,
    DividerComponent,
    ToggleComponent,
    ButtonComponent,
    NgStyle,
  ],
  templateUrl: './perfil-acesso.component.html',
  styleUrl: './perfil-acesso.component.scss',
})
export class PerfilAcessoComponent implements OnInit {

  desabilitarToggle!: boolean;
  ativarToggle!: boolean;
  edit: boolean = false;
  controlToggle = new FormControl();

  constructor() {}
  ngOnInit(): void {

        // A logica seria: a validação de desabilitar ou não o botão vem do back end. Assim que retornado eu atribuo para a variavel desabilitarToggle e passo essa variavel como o valor do control. Caso ela seja TRUE o control também sera TRUE

    this.desabilitarToggle = true
    this.controlToggle.setValue(this.desabilitarToggle)
  }

  editarInformacoes() {
    if (!this.edit) {
      this.edit = !this.edit;
    }
  }

  cancelar() {
    this.edit = false;
  }

  habilitarToggle(retorno: any) {

    console.log(retorno)
    console.log("Alterar o fundo do toggle")
  }

  protected readonly status!: Status;
}
