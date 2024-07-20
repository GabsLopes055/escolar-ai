import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputViewComponent } from '../../../../../../shared/input-view/input-view.component';
import { InputComponent } from '../../../../../../shared/input/input.component';
import { SelectComponent } from '../../../../../../shared/select/select.component';

@Component({
  selector: 'app-dados-empresariais',
  standalone: true,
  imports: [ButtonComponent, InputViewComponent, InputComponent, SelectComponent],
  templateUrl: './dados-empresariais.component.html',
  styleUrl: './dados-empresariais.component.scss'
})
export class DadosEmpresariaisComponent {

  vizualizarInformacoesEmpresa: boolean = true
  footerActions: boolean = false
  mostrarFormEdit = false;

  private mostrarForm(formType: 'view' | 'edit' | 'password') {
    this.vizualizarInformacoesEmpresa = formType === 'view';
    this.footerActions = formType !== 'view';
    this.mostrarFormEdit = formType === 'edit';
  }

  abrirFormEditar() {
    this.mostrarForm('edit');
  }

  atualizar() {


  }

  cancelarEditar() {
    this.mostrarForm('view');
  }
}
