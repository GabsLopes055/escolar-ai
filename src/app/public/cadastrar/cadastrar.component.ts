import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {InputComponent} from "../../shared/input/input.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {
  OptionSelect,
  SelectComponent
} from "../../shared/select/select.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {debounceTime, distinctUntilChanged, Subscription} from "rxjs";
import {SolicitacaoService} from "./solicitacao.service";
import {UserRequest} from "../../models/user.interface";
import {ToastService} from "../../shared/toast/toast.service";

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    SelectComponent,
    RouterLink
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent implements OnInit {
  id!: any;
  steps = 1;
  nomeSolicitante = 'Jow';

  formRequest = new FormGroup({
    empresaId: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    password: new FormControl(),
    sexo: new FormControl(),
    dataNascimento: new FormControl(),
    cpf: new FormControl(),
    role: new FormControl()
  });

  options: OptionSelect[] = [
    {label: 'Masculino', value: 'MASCULINO'},
    {label: 'Feminino', value: 'FEMININO'},
  ]

  senha = new FormControl(null);

  haveUppercaseAndLowwercase = false;
  contentNumbers = false;
  specialChars = false;

  subscription = new Subscription();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly router:Router,
    private readonly solicitacaoService: SolicitacaoService,
    private readonly toast: ToastService,
  ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe(data => {
        this.id = data['id'];
        this.solicitacaoService.buscarPorId(parseInt(this.id)).subscribe({
          next: solicitacao => {
            console.log(solicitacao)
            this.nomeSolicitante = solicitacao.nome;
            this.formRequest.controls.nome.setValue(solicitacao.nome);
            this.formRequest.controls.email.setValue(solicitacao.email);
            this.formRequest.controls.role.setValue(solicitacao.role);
            this.formRequest.controls.empresaId.setValue(solicitacao.empresa.id);
            console.log(solicitacao)
          },
          error: erro => {
            console.log(erro)
          }
        })
      })
    );

    this.senha.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => {
      if(value != null) {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        const containsSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

        this.contentNumbers = containsNumber;
        this.specialChars = containsSpecial;

        if (containsUppercase && containsLowercase) {
          this.haveUppercaseAndLowwercase = true;
        } else {
          this.haveUppercaseAndLowwercase = false;
        }
      }
    })
  }

  cadastrar() {
    console.log(this.formRequest.value)

    this.solicitacaoService.cadastrar(this.formRequest.value as UserRequest).subscribe({
      next: value => {
        this.steps = 3;
        this.toast.notify({message: 'Cadastro realizado com sucesso.', type: "SUCCESS"});
      },
      error: () => {
        this.toast.notify({message: 'Ocorreu um erro ao realizar cadastro.', type: "ERROR"});
      }
    });
  }

  nextStep() {
    this.steps += 1;
    if(this.steps == 3) {
      this.cadastrar();
    }
    if(this.steps < 2) {
      return;
    }
  }

  backStep() {
    this.steps -=1;
  }
}
