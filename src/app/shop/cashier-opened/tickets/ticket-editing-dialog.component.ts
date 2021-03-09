import {Component, Inject, OnInit} from '@angular/core';
import {Shopping} from '../../shared/services/models/shopping.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ShoppingState} from '../../shared/services/models/shopping-state.model';
import {TicketEdition} from './ticket-edition.model';
import {TicketService} from './ticket.service';
import {CheckOutDialogComponent} from '../shopping-cart/check-out-dialog.component';

@Component({
  selector: 'app-ticket-editing-dialog',
  templateUrl: './ticket-editing-dialog.component.html',
  styleUrls: ['./ticket-editing-dialog.component.css']
})
export class TicketEditingDialogComponent implements OnInit{

  stateValues = Object.keys(ShoppingState).filter(key => isNaN(Number(key)));
  displayedColumns = ['id', 'description', 'retailPrice', 'amount', 'discount', 'total', 'actions'];
  shoppingList: Shopping[] = [];
  commitedShopping: Shopping[] = [];
  ticket: TicketEdition;
  totalShoppingList = 0;
  originalPrice = 0;

  constructor(@Inject(MAT_DIALOG_DATA) data: TicketEdition, private ticketService: TicketService, private dialog: MatDialog) {
    this.ticket = data ? data : undefined;
  }

  ngOnInit(): void {
    this.getShoppingList();
    this.synchronizeShoppingCart();
    this.originalPrice = this.totalShoppingList;
  }

  getShoppingList(): void {
    for (const shopping of this.ticket.shoppingList) {
      const shoppingModel = new Shopping(shopping.barcode, shopping.description, shopping.retailPrice);
      shoppingModel.amount = shopping.amount;
      shoppingModel.discount = shopping.discount;
      shoppingModel.state = shopping.state;
      shoppingModel.updateTotal();
      this.shoppingList.push(shoppingModel);
    }
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
    if (shopping.amount > 0) {
      shopping.amount--;
      shopping.updateTotal();
      this.synchronizeShoppingCart();
    }
  }

  verifyEstate(shopping: Shopping): void{
    if (shopping.state.toString() === ShoppingState[ShoppingState.COMMITTED]) {
      this.commitedShopping.push(shopping);
    }
  }

  update(): void {
    this.shoppingList
      .filter(shopping => shopping.amount > 0);
    this.ticketService.update(this.ticket.id, this.shoppingList, (this.originalPrice - this.totalShoppingList))
      .subscribe(
        () => {
          this.dialog.closeAll();
          this.dialog.open(CheckOutDialogComponent, {data: this.commitedShopping}).afterClosed().subscribe(
            result => {
              if (result) {
                this.ngOnInit();
              }
            }
          );
        }
      );
  }
}
