import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {AuthService} from '@core/auth.service';
import {RegisterDialogComponent} from '@shared/dialogs/register-dialog.component';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'TPV';
  username = undefined;

  constructor(private dialog: MatDialog, private authService: AuthService) {
  }

  login(): void {
    this.dialog.open(LoginDialogComponent)
      .afterClosed()
      .subscribe(() => this.username = this.authService.getName());
  }

  register(): void {
    this.dialog.open(RegisterDialogComponent);
  }

  logout(): void {
    this.authService.logout();
  }

  cart(): void {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  search(value): void {
  }

}
