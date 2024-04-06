import { Component } from '@angular/core';
import { InputIconComponent } from "../../shared/input-icon/input-icon.component";
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";
import { FeedbackInitRegisterComponent } from "./components/feedback-init-register/feedback-init-register.component";

@Component({
    selector: 'app-register',
    standalone: true,
    host: {class: 'main'},
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [InputIconComponent, RouterLink, ButtonComponent, FeedbackInitRegisterComponent]
})
export class RegisterComponent {


    isFeedback = false;


    showFeedback() {
        this.isFeedback = !this.isFeedback;
    }
}
