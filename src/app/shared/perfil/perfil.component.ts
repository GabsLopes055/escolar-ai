import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'tgt-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{

  iniciais: string = 'JS';
  @Input() nome:string = '';
  @Input() size: 'middle' | 'small' = 'middle';
  @Input() border: 'true' | 'none' = 'true';
  @Input() icon: boolean = false;

  constructor(
    private readonly userService: UserService,
  ) {}

  ngOnInit(): void {
    // if(!this.nome.length) {
    //   const usuario = this.userService.user;
    //   this.iniciais = this.obterIniciais(usuario?.nome as string).toUpperCase()
    // } else {
    //   this.iniciais = this.obterIniciais(this.nome).toUpperCase()
    // }
  }


  obterIniciais(nomeCompleto: string) {
    // Dividir o nome completo em partes
    // let partesNome = nomeCompleto.split(" ");

    // // Obter a primeira letra do primeiro nome
    // let primeiraLetraPrimeiroNome = partesNome[0][0];

    // // Obter a primeira letra do último sobrenome
    // let ultimoSobrenome = partesNome[partesNome.length - 1];
    // let primeiraLetraUltimoSobrenome = ultimoSobrenome[0];

    // // Retornar as iniciais
    // return primeiraLetraPrimeiroNome + primeiraLetraUltimoSobrenome;
}
}
