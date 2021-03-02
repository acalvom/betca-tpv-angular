import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Radios with ngModel
 */
@Component({
  templateUrl: 'recoverPassword-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class RecoverPasswordDialogComponent {
  selectedOption = 'Email';
  EMAIL_TEXT = 'We will send you an email with instructions on how to reset your password.';
  PHONE_TEXT = 'We will text you a verification code to reset your password.';
  options: string[] = ['Email', 'Text Message (SMS)'];
  email: string;
  mobile: number;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public getText(): string {
    switch (this.selectedOption){
      case 'Email':
        return this.EMAIL_TEXT;
      case 'Text Message (SMS)':
        return this.PHONE_TEXT;
    }
  }

  public activate(option: string): boolean {
    return option === this.selectedOption;
  }
}
