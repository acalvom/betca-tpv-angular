import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {AuthService} from '@core/auth.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'TPV';
  username = undefined;
  tags = ['Sale', 'Popular', 'New'];

  constructor(private dialog: MatDialog, private tokensService: AuthService) {
  }

  login(): void {
    this.dialog.open(LoginDialogComponent, {data: {shopUrl: 'shop'}})
      .afterClosed()
      .subscribe(() => this.username = this.tokensService.getName());
  }

  addTag(tag){

  }
  logout(): void {
    this.tokensService.logout();
  }

  cart(): void {
  }

  isLogged(): boolean {
    return this.tokensService.isLogged();
  }

  isAdmin(): boolean {
    return this.tokensService.isAdmin();
  }

  search(value): void {
  }

  remove(tag): void {

  }

}
