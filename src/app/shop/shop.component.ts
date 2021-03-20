import {Component, OnInit} from '@angular/core';
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
import {CashMovementDialogComponent} from './cashier-opened/cash-movements/cash-movement-dialog/cash-movement-dialog.component';
import { SlackPublisherComponent } from './slack-publisher/slack-publisher.component';
import {ArticlesSizeFamilyCreationDialogComponent} from './articles-size-family-creation/articles-size-family-creation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedMessengerService } from './shared/services/shared-messenger.service';
import {StaffTimeService} from './staff/staff-time.service';
import { Message } from './shared/services/models/message.model';

@Component({
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],

})
export class ShopComponent implements OnInit {
  username: string;
  cashierClosed: boolean;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: AuthService, private sharedCashierService: SharedCashierService,
              private snackBar: MatSnackBar, private sharedMessengerService: SharedMessengerService,
              private logoutService: StaffTimeService) {
    this.username = tokensService.getName();
    this.cashierClosed = true;
    this.cashier();
  }

  ngOnInit(): void {
    this.openSnackBar();
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
    this.logoutService.logout();
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

  movementCash(): void {
    this.dialog.open(CashMovementDialogComponent)
      .afterClosed();
  }

  slack() {
    this.dialog.open(SlackPublisherComponent)
      .afterClosed();
  }

  createSizeFamily(): void {
    this.dialog.open(ArticlesSizeFamilyCreationDialogComponent)
      .afterClosed();
  }

  openSnackBar() {

    this.sharedMessengerService.checkNewMessages().subscribe((unreadMessages: Message[]) => {
      if(unreadMessages && unreadMessages.length > 0){
        let message: string = "You have new messages!";
        let action: string = "Go to messages 📧";

        let snackBarRef = this.snackBar.open(message, action, {
          duration: 8000,
        });
  
        var audio = new Audio('../../assets/pristine.mp3');
        audio.play();
  
        snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['shop', 'messenger']).then();
        });
      }
    }, error => {
      console.error("Error checking if there are new messages");
    });

  }
  
}

