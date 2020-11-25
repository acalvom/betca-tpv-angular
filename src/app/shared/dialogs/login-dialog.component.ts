import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '@core/auth.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LoginDialogComponent {
  mobile: number;
  password: string;
  shopUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private tokensService: AuthService, private router: Router, private dialog: MatDialog) {
    this.shopUrl = data.shopUrl;
  }

  login(): void {
    this.tokensService.login(this.mobile, this.password).subscribe(
      () => {
        if (this.tokensService.isAdmin() || this.tokensService.isManager() || this.tokensService.isOperator()) {
          this.router.navigate([this.shopUrl]).then().finally(() => this.dialog.closeAll());
        } else {
          this.dialog.closeAll();
        }
      }
    );
  }
}
