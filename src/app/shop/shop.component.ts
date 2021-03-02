import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {HttpService} from '@core/http.service';
import {AuthService} from '@core/auth.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';
import {AddCreditLineDialogComponent} from './shared/dialogs/add-credit-line-dialog.component';
import {CreditLinePayDialogComponent} from './cashier-opened/credit-line-pay-dialog.component';
import {DataProtectionActDialogComponent} from './data-protection-act/data-protection-act-dialog.component';

@Component({
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],

})
export class ShopComponent {
  username: string;
  cashierClosed: boolean;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: AuthService, private sharedCashierService: SharedCashierService) {
    this.username = tokensService.getName();
    this.cashierClosed = true;
    this.cashier();
  }

  untilManager(): boolean {
    return this.tokensService.untilManager();
  }

  cashier(): void {
    this.sharedCashierService.readLast()
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

  creditLine(): void {
    this.dialog.open(AddCreditLineDialogComponent)
      .afterClosed();
  }

  creditLinePay(): void {
    this.dialog.open(CreditLinePayDialogComponent)
      .afterClosed();
  }

  dataProtectionAct(): void {
    this.dialog.open(DataProtectionActDialogComponent)
      .afterClosed();
  }

}
