import {Component, Inject, OnInit} from '@angular/core';
import {Shopping} from '../../shared/services/models/shopping.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {NumberDialogComponent} from '@shared/dialogs/number-dialog.component';
import {ShoppingState} from '../shopping-cart/shopping-state.model';

@Component({
  selector: 'app-ticket-editing-dialog',
  templateUrl: './ticket-editing-dialog.component.html',
  styleUrls: ['./ticket-editing-dialog.component.css']
})
export class TicketEditingDialogComponent implements OnInit{

  indexShoppingList: 0;
  displayedColumns = ['id', 'description', 'retailPrice', 'amount', 'discount', 'total', 'actions'];
  shoppingList: Shopping[];
  totalShoppingList = 0 ;

  constructor(@Inject(MAT_DIALOG_DATA) data: Shopping[], private dialog: MatDialog) {
    this.shoppingList = data ? data : undefined;
  }

  ngOnInit(): void {
    this.synchronizeShoppingCart();
  }

  synchronizeShoppingCart(): void {
    this.shoppingList = [...this.shoppingList];
    let total = 0;
    for (const shopping of this.shoppingList) {
      total = total + shopping.total;
    }
    this.totalShoppingList = Math.round(total * 100) / 100;
  }

  decreaseAmount(shopping: Shopping): void {
    shopping.amount--;
    if (shopping.amount === 0) {
      shopping.amount--;
      shopping.state = ShoppingState.COMMITTED;
    }
    shopping.updateTotal();
    this.synchronizeShoppingCart();
  }

  changeCommitted(item: any): void {

  }

  checkboxState(state: any): void {

  }

  update(): void {

  }
}
