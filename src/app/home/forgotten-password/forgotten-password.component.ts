import { Component } from '@angular/core';
import {ForgottenPasswordService} from './forgotten-password.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent {
  hide1 = true;
  hide2 = true;
  newPassword: string;
  confirmPassword: string;
  email = false;
  constructor(private forgottenPassword: ForgottenPasswordService, private router: Router) {
    this.email = this.hasEmail();
  }

  resetPassword(): void {
    if (this.samePasswords()) {
      this.forgottenPassword.resetPassword(localStorage.getItem('recoverEmail'), this.newPassword);
      this.router.navigate(['home']).then().finally();
    }
  }

  hasEmail(): boolean{
    return localStorage.getItem('recoverEmail') != null;
  }

  samePasswords(): boolean{
    return this.newPassword === this.confirmPassword;
  }

}
