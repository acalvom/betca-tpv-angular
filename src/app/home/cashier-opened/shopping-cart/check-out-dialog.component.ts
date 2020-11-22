import {Component} from '@angular/core';

import {TicketCreation} from './ticket-creation.model';
import {ShoppingCartService} from './shopping-cart.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: 'check-out-dialog.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class CheckOutDialogComponent {

  totalPurchase: number;
  requestedInvoice = false;
  requestedGiftTicket = false;
  ticketCreation: TicketCreation;

  constructor(private dialog: MatDialog, private shoppingCartService: ShoppingCartService) {
    this.totalPurchase = this.shoppingCartService.getTotalShoppingCart();
    this.ticketCreation = {cash: 0, card: 0, voucher: 0, shoppingList: null, note: ''};
  }

  format(value: number): number {
    return value ? value : 0; // empty string,NaN,false,undefined,null,0 is: false
  }

  searchUser(mobile: string): void {
    this.ticketCreation.user = {mobile: Number(mobile)};
  }

  managed(): boolean {
    return !!this.ticketCreation.user;
  }

  resetMobile(): void {
    this.ticketCreation.user = undefined;
  }

  uncommitted(): any {
    return this.shoppingCartService.unCommitArticlesExist();
  }

  totalCommitted(): any {
    return this.shoppingCartService.getTotalCommitted();
  }

  warning(): boolean {
    return !this.managed() && this.shoppingCartService.unCommitArticlesExist();
  }

  returnedAmount(): number {
    return Math.round(
      (this.format(this.ticketCreation.cash)
        + this.format(this.ticketCreation.card)
        + this.format(this.ticketCreation.voucher)
        - this.totalPurchase) * 100
    ) / 100;
  }

  returnedCash(): number {
    if (this.ticketCreation.cash >= this.returnedAmount()) {
      return this.returnedAmount();
    } else {
      return this.ticketCreation.cash;
    }
  }

  fillCard(): void {
    if (this.returnedAmount() < 0) {
      this.ticketCreation.card = -this.returnedAmount();
    } else {
      this.ticketCreation.card = this.totalPurchase;
      this.ticketCreation.cash = 0;
    }
  }

  fillCash(): void {
    this.ticketCreation.cash = this.format(this.ticketCreation.cash);
    if (this.returnedAmount() < 0 && this.ticketCreation.cash === 0) {
      this.ticketCreation.cash = -this.returnedAmount();
    } else if (this.ticketCreation.cash < 20) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 5) + 1) * 5;
    } else if (this.ticketCreation.cash < 50) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 10) + 1) * 10;
    } else {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 50) + 1) * 50;
    }
  }

  consumeVoucher(): void {
    // TODO consumir un vale que se entrega como parte del pago
  }

  invalidCheckOut(): boolean {
    return (this.totalPurchase + this.returnedAmount() - this.shoppingCartService.getTotalCommitted() < -0.01); // rounding errors
  }

  round(value): any {
    return Math.round(value * 100) / 100;
  }

  pay(): any {
    const returned = this.returnedAmount();
    const cash = this.ticketCreation.cash;
    let voucher = 0;
    this.ticketCreation.cash = this.format(this.ticketCreation.cash);
    this.ticketCreation.card = this.format(this.ticketCreation.card);
    this.ticketCreation.voucher = this.format(this.ticketCreation.voucher);
    if (returned > 0) {
      this.ticketCreation.cash -= returned;
    }
    if (this.ticketCreation.cash < 0) {
      voucher = -this.ticketCreation.cash;
      this.ticketCreation.cash = 0;
    }
    if (this.ticketCreation.card > 0) {
      this.ticketCreation.note += ' Pay with card: ' + this.round(this.ticketCreation.card) + '.';
    }
    if (this.ticketCreation.voucher > 0) {
      this.ticketCreation.note += ' Pay with voucher: ' + this.round(this.ticketCreation.voucher) + '.';
    }
    if (this.ticketCreation.cash > 0) {
      this.ticketCreation.note += ' Pay with cash: ' + this.round(cash) + '.';
    }
    if (!this.ticketCreation.note) {
      this.ticketCreation.note += ' No Pay.';
    }
    if (returned > 0) {
      this.ticketCreation.note += ' Return: ' + this.round(returned) + '.';
    }
    this.shoppingCartService.createTicket(this.ticketCreation, voucher, this.requestedInvoice, this.requestedGiftTicket).subscribe(
      () => {
      },
      () => this.dialog.closeAll()
      , () => this.dialog.closeAll()
    );
  }

  invalidInvoice(): boolean {
    // TODO pendiente de calcular. Hace falta tener al usuario totalmente completado
    return true;
  }

}
