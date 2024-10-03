import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in-up.component.html',
  styleUrl: './sign-in-up.component.css',
})
export class SignInUpComponent {
  isSignUpMode = false;

  setSignUpMode(signUp: boolean) {
    this.isSignUpMode = signUp;
  }
}
