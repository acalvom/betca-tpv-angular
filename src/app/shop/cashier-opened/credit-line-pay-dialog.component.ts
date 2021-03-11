import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../shared/services/models/user.model';
import {Observable, of} from 'rxjs';
import {SharedCreditLineService} from '../shared/services/shared.credit-line.service';
import {TicketCreditLine} from '../shared/services/models/ticket-credit-line.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreditSale} from '../shared/services/models/credit-sale.model';


@Component({
  templateUrl: 'credit-line-pay-dialog.component.html'
})

export class CreditLinePayDialogComponent {

  title = 'Unpaid tickets';
  user: User;
  cash = false;
  card = false;
  total = 0;
  showUnpaidTickets = false;

  creditSales: CreditSale[];
  unpaidTickets: Observable<TicketCreditLine[]> = of([]);

  @Input() userPhone: string;
  @Output() add = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) data, private sharedCreditLineService: SharedCreditLineService, private snackBar: MatSnackBar) {

  }

  managedMobile(): boolean {// TODO ? VER SI LO HAGO
    return !!this.user;
  }

  resetMobile(): void {
    this.user = undefined;
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchUnpaidTicketsByUserPhone(): void {
      this.user = {mobile: Number(this.userPhone)};
      this.sharedCreditLineService.findByUserReference(this.user.mobile.toString()).subscribe(
        result => { if (result == null) {
          this.showUnpaidTickets = false;
          this.snackBar.open('That user doesn´t have a credit-line.', 'Close', {
            duration: 3000
          });
        } else {
          if (this.user){
            this.total = 0;
            this.unpaidTickets = this.sharedCreditLineService.findUnpaidTicketsFromCreditLine(this.user.mobile.toString());
            this.unpaidTickets.subscribe(
              value => {
                if (value.length !== 0){
                  this.showUnpaidTickets = true;
                  value.forEach(dataValues => this.total += dataValues.amount.valueOf());
                  this.total.toFixed(2);
                } else {
                  this.showUnpaidTickets = false;
                  this.snackBar.open('This user has no tickets to pay.', 'Close', {
                    duration: 3000
                  });
                }
              }
            );
          }
        }
        }
      );
  }

  payByCash(): void{
    if (this.cash === false) {
      this.cash = true;
      this.card = false;
    } else {
      this.cash = false;
    }
  }

  payByCard(): void{
    if (this.card === false) {
      this.card = true;
      this.cash = false;
    } else {
      this.card = false;
    }
  }

  pay(): void {
    if (this.card === true){
      this.sharedCreditLineService.payUnpaidTicketsFromCreditLine(this.user.mobile.toString(), 'card').subscribe(
        value => {
          this.snackBar.open('Tickets have been paid successfully by card.', 'Close', {
            duration: 3000
          });
          this.showUnpaidTickets = false;
          this.unpaidTickets = undefined;
        }
      );
    }else if (this.cash === true){
      this.sharedCreditLineService.payUnpaidTicketsFromCreditLine(this.user.mobile.toString(), 'cash').subscribe(
        value => {
          this.snackBar.open('Tickets have been paid successfully by cash.', 'Close', {
            duration: 3000
          });
          this.showUnpaidTickets = false;
          this.unpaidTickets = undefined;
        }
      );
    }
  }

}
