import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {Role} from '@core/role.model';
import {HttpService} from '@core/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';

@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class RegisterDialogComponent {
  user: User;
  rgpdUser: RgpdUser;


  constructor(private httpService: HttpService, private router: Router,
              private dialog: MatDialog, private snackBar: MatSnackBar, private userService: UserCompleteService) {
    this.user = {
      mobile: undefined,
      firstName : '',
      familyName: '',
      email: '',
      dni: '',
      address: '',
      password: '',
      role: undefined,
      registrationDate: undefined,
      active: undefined,
    };

    this.rgpdUser = {
      mobile: this.user.mobile,
      rgpdType: undefined,
      agreement: undefined
    };
  }

  register(): void {
    this.userService
      .createCompleteUser(this.user)
      .subscribe(() => this.dialog.closeAll());
    /*
    this.httpService.post(EndPoints.USERS, this.user)
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
