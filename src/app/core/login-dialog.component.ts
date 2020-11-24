import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {TokensService} from '@core/tokens.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['../shared/dialogs/dialog.component.css']
})
export class LoginDialogComponent {
  mobile: number;
  password: string;
  homeUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private tokensService: TokensService, private router: Router) {
    this.homeUrl = data.homeUrl;
  }

  login(): void {
    this.tokensService.login(this.mobile, this.password).subscribe(
      () => this.router.navigate([this.homeUrl])
    );
  }
}
