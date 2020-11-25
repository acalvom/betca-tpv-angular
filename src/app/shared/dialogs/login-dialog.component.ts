import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {TokensService} from '@core/tokens.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LoginDialogComponent {
  mobile: number;
  password: string;
  shopUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private tokensService: TokensService, private router: Router) {
    this.shopUrl = data.shopUrl;
  }

  login(): void {
    this.tokensService.login(this.mobile, this.password).subscribe(
      () => this.router.navigate([this.shopUrl]).then()
    );
  }
}
