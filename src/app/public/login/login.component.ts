import { Component, OnInit } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";
import { FormControl } from '@angular/forms';
import { ButtonComponent } from "../../shared/button/button.component";
import { RouterLink } from '@angular/router';
import { InputIconComponent } from "../../shared/input-icon/input-icon.component";

@Component({
    selector: 'app-login',
    standalone: true,
    host: {class: 'main'},
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [InputComponent, ButtonComponent, RouterLink, InputIconComponent]
})
export class LoginComponent implements OnInit{



  ngOnInit(): void {

  }

}
