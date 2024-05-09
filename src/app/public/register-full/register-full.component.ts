import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { ButtonComponent } from "../../shared/button/button.component";
import { InputComponent } from '../../shared/input/input.component';
import { AuthService } from '../services/auth.service';
import { UserRequest } from '../../models/authentication.interface';
import { OptionSelect, SelectComponent } from "../../shared/select/select.component";

@Component({
    selector: 'app-register-full',
    standalone: true,
    host: { class: 'main' },
    templateUrl: './register-full.component.html',
    styleUrl: './register-full.component.scss',
    imports: [InputComponent, ButtonComponent, ReactiveFormsModule, RouterLink, SelectComponent]
})
export class RegisterFullComponent implements OnInit, OnDestroy {

  id!: any;
  steps = 1;
  nomeSolicitante = '';
  formGroup = new FormGroup({
    cnpj: new FormControl('89549403000106'),
    razaoSocial: new FormControl('To Go Trip LDTA'),
    nomeFantasia: new FormControl('To Go Trip'),
    inscEstadual: new FormControl('123153423'),
  });

  formRequest = new FormGroup({
    empresaId: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    password: new FormControl(),
    sexo: new FormControl(),
    dataNascimento: new FormControl(),
    cpf: new FormControl()
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
    private readonly router:Router
    ) {}

  ngOnInit(): void {

    this.subscription.add(
      this.activatedRoute.params.subscribe(data => {
        this.id = data['id'];

        this.authService.buscarSolicitacao(data['id']).subscribe({
          next: solicitacao => {
            this.formRequest.controls.nome.setValue(solicitacao.nome);
            this.formRequest.controls.email.setValue(solicitacao.email);
            this.nomeSolicitante = solicitacao.nome;

            if(solicitacao) {
              this.authService.buscarEmpresa(solicitacao.cnpj).subscribe({
                next: empresa => {
                  this.formRequest.controls.empresaId.setValue(empresa.id);
                  this.formGroup.controls.cnpj.setValue(empresa.cnpj);
                  this.formGroup.controls.nomeFantasia.setValue(empresa.nomeFantasia);
                  this.formGroup.controls.razaoSocial.setValue(empresa.razaoSocial);
                  this.formGroup.controls.inscEstadual.setValue(empresa.inscricaoEstadual);
                }
            });
          }
          }, error: () => {
            this.router.navigate(['/login']);
          }
        });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cadastrar() {
    this.authService.register(this.formRequest.value as UserRequest).subscribe({
      next: () => {
        this.steps = 4;
      },
      error: () => {
        alert('Ocorreu um erro ao cadastrar');
      }
    });
  }

  nextStep() {
    this.steps += 1;
    if(this.steps == 4) {
      this.cadastrar();
    }
    if(this.steps < 3) {
      return;
    }
  }

  backStep() {
    this.steps -=1;
  }
}
