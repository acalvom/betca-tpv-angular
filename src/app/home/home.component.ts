import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../core/http.service';
import {TokensService} from '../core/tokens.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

})
export class HomeComponent {
  backend: string;

  cashierClosed: boolean;
  username: string;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: TokensService) {
    this.username = tokensService.getName();
    this.cashierClosed = true;
    this.cashier();
  }

  isAdmin(): boolean {
    return this.tokensService.isAdmin();
  }

  isManager(): boolean {
    return this.tokensService.isManager();
  }

  cashier(): void {
  }

  deleteDb(): void {
  }

  seedDb(): void {
  }

  logout(): void {
    this.tokensService.logout();
  }

  closeCashier(): void {
  }

  openCashier(): void {
  }

}
