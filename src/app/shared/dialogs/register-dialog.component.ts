import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Role} from '@core/role.model';
import {User} from '../models/userRegister.model';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RgpdUser} from '@shared/models/rgpd-user.model';
import {DataProtectionActService} from '@shared/components/data-protection-act/data-protection-act.service';

@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class RegisterDialogComponent {
  static CUSTOMER = '/customers';
  rgpdUser: RgpdUser;
  user: User;
  hide = true;

  constructor(@Inject(MAT_DIALOG_DATA) data: User, private httpService: HttpService, private router: Router,
              private dialog: MatDialog, private snackBar: MatSnackBar, private dataProtectionActService: DataProtectionActService) {
    this.user = data ? data : {
      mobile: undefined, firstName: undefined, familyName: undefined, email: undefined, dni: undefined,
      address: undefined, password: undefined, role: Role.CUSTOMER, active: undefined, registrationDate: new Date()
    };
    this.rgpdUser = {
      mobile: this.user.mobile,
      rgpdType: undefined,
      agreement: undefined
    };
  }

  register(): void {
    this.httpService.post(EndPoints.USERS + RegisterDialogComponent.CUSTOMER, this.user)
      .subscribe(() => {
        this.dataProtectionActService.create(this.rgpdUser)
          .subscribe(() => {
            this.dialog.closeAll();
            this.openSnackBar('User ' + this.user.firstName + ' successfully register.', 'OK');
          });
      });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
