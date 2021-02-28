import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {Role} from '@core/role.model';
import {User} from '@core/user.model';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class RegisterDialogComponent {
  mobile: number;
  password: string;
  role: Role = Role.CUSTOMER;
  name = '';
  /*  private MESSAGE: string = 'Usuario ' + this.name + ' registrado correctamente.';
    user: User = {
      mobile: this.mobile,
      name: this.name,
      token: this.password,
      role: this.role
    };*/

  constructor(private httpService: HttpService, private router: Router,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  register(): void {
    of(console.log(''))
      .subscribe(() => {
        this.dialog.closeAll();
        this.openSnackBar('Usuario ' + this.name + ' registrado correctamente.', '');
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
