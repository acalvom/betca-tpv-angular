import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private httpService: HttpService, private snackBar: MatSnackBar, private dialog: MatDialog) {

  }

  sendEmail(): void {
    this.httpService.post(EndPoints.SEND_EMAIL, {email: this.email})
      .subscribe(() => {
        localStorage.setItem('recoverEmail', this.email);
        this.dialog.closeAll();
        this.openSnackBar('We have sent you an email with a link, which will redirect you to a page where you could create a new password.', '');
      });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
