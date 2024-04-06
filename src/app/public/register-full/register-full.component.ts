import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from "../../shared/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-register-full',
    standalone: true,
    host: {class: 'main'},
    templateUrl: './register-full.component.html',
    styleUrl: './register-full.component.scss',
    imports: [InputComponent, ButtonComponent, ReactiveFormsModule, RouterLink]
})
export class RegisterFullComponent implements OnInit, OnDestroy {

  id!: any;
  steps = 1;

  formGroup = new FormGroup({
    cnpj: new FormControl('89549403000106'),
    razaoSocial: new FormControl('To Go Trip LDTA'),
    nomeFantasia: new FormControl('To Go Trip'),
    inscEstadual: new FormControl('123153423'),
    cnaePrimario: new FormControl('2321'),
    cnaeSecundario: new FormControl('12211'),
  })

  senha = new FormControl(null);

  haveUppercaseAndLowwercase = false;
  contentNumbers = false;
  specialChars = false;

  subscription = new Subscription();

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    /**
     * @TODO O cliente acessará esta tela atraves do link no e-mail.
     * No email a url tera o UUID do cliente. Onde ele dará continuidade no 
     * cadastro.
     * 
     * abaixo eu irei pegar esse UUID. vou consultar a empresa no backend 
     * e preencher a tela com as informações da empresa.
     */

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

    this.subscription.add(
      this.activatedRoute.params.subscribe(data => {
        console.log(data['id'])
        this.id = data['id'];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextStep() {
    this.steps += 1;
    if(this.steps < 3) {
      return;
    }

    /**
     * @TODO chama no backend
     */
  }

  backStep() {
    this.steps -=1;
  }
}
