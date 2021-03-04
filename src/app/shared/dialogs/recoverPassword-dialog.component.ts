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
  EMAIL_TEXT = 'We will send you an email with instructions on how to reset your password.';
  email: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
