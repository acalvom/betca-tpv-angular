import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {Role} from '@core/role.model';
import {User} from '@core/user.model';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RgpdUser} from '@shared/models/rgpd-user.model';

@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class RegisterDialogComponent {
  mobile: number;
  firstName = '';
  familyName: string;
  email: string;
  dni: string;
  address: string;
  password: string;
  role: Role;
  registrationDate: Date;
  active: boolean;
  rgpdUser: RgpdUser;

  /*  private MESSAGE: string = 'Usuario ' + this.name + ' registrado correctamente.';
    user: User = {
      mobile: this.mobile,
      name: this.name,
      token: this.password,
      role: this.role
    };*/

  constructor(private httpService: HttpService, private router: Router,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.rgpdUser = {mobile: this.mobile};
  }

  register(): void {
    of(console.log(''))
      .subscribe(() => {
        this.dialog.closeAll();
        this.openSnackBar('Usuario ' + this.firstName + ' registrado correctamente.', '');
      });
    /*this.httpService.post(EndPoints.USERS, this.user)
      .subscribe(() => {
      this.dialog.closeAll();
    });*/
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
