import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {HttpService} from '@core/http.service';
import {TokensService} from '@core/tokens.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';

@Component({
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],

})
export class ShopComponent {
  username: string;
  cashierClosed: boolean;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: TokensService, private cashierService: SharedCashierService,
              private sharedCashierService: SharedCashierService) {
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
    this.cashierService.readLast()
      .pipe(
        map(cashier => cashier.closed)
      )
      .subscribe(
        closed => {
          this.cashierClosed = closed;
          if (closed) {
            this.router.navigate(['shop', 'cashier-closed']).then();
          } else {
            this.router.navigate(['shop', 'cashier-opened']).then();
          }
        }
      );
  }

  deleteDb(): void {
  }

  seedDb(): void {
  }

  logout(): void {
    this.tokensService.logout();
  }

  openCashier(): void {
    this.sharedCashierService
      .openCashier()
      .subscribe(() => this.cashier());
  }

  closeCashier(): void {
    this.dialog
      .open(CashierDialogComponent)
      .afterClosed()
      .subscribe(() => this.cashier());
  }



}