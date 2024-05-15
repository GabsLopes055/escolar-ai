import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'tgt-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  iniciais: string = '';
  constructor(
    private readonly userService: UserService,
  ) {
    const usuario = this.userService.user;
    this.iniciais = this.obterIniciais(usuario?.nome as string).toUpperCase()
  }


  obterIniciais(nomeCompleto: string) {
    // Dividir o nome completo em partes
    let partesNome = nomeCompleto.split(" ");
    
    // Obter a primeira letra do primeiro nome
    let primeiraLetraPrimeiroNome = partesNome[0][0];

    // Obter a primeira letra do último sobrenome
    let ultimoSobrenome = partesNome[partesNome.length - 1];
    let primeiraLetraUltimoSobrenome = ultimoSobrenome[0];

    // Retornar as iniciais
    return primeiraLetraPrimeiroNome + primeiraLetraUltimoSobrenome;
}
}
