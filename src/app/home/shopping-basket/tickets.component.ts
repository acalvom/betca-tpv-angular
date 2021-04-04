import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
})
export class TicketsComponent{

  title = 'Tickets Management';

  shoppingList = [];

  pay = 0;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data, private snackBar: MatSnackBar) {

    this.shoppingList = data;
    for (let i = 0; i < this.shoppingList.length; i++) {
      this.shoppingList[i].amount = this.shoppingList[i].quantity * this.shoppingList[i].retailPrice;
      this.pay += this.shoppingList[i].amount;
    }
  }

  confirm(): void {
    this.snackBar.open('You have successfully paid for the order.', 'Close', {
      duration: 1000
    });
  }
}
