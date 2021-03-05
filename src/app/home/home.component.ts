import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {AuthService} from '@core/auth.service';
import {RegisterDialogComponent} from '@shared/dialogs/register-dialog.component';
import {Subscription} from 'rxjs';
import {LoginTimeRegisterService} from './login-time-register/login-time-register.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy{
  title = 'TPV';
  username = undefined;
  onLoginSubscription: Subscription;

  constructor(private dialog: MatDialog, private authService: AuthService, private loginTimeRegister: LoginTimeRegisterService) {
  }


  ngOnInit(): void {
    this.onLoginSubscription = this.authService.onLogin().subscribe(user => this.loginTimeRegister.login(user));
  }

  ngOnDestroy(): void {
    this.onLoginSubscription.unsubscribe();
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
