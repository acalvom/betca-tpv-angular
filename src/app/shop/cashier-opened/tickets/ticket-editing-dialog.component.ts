import {Component, Inject, OnInit} from '@angular/core';
import {Shopping} from '../../shared/services/models/shopping.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ShoppingState} from '../../shared/services/models/shopping-state.model';
import {TicketEdition} from './ticket-edition.model';
import {TicketService} from './ticket.service';

@Component({
  selector: 'app-ticket-editing-dialog',
  templateUrl: './ticket-editing-dialog.component.html',
  styleUrls: ['./ticket-editing-dialog.component.css']
})
export class TicketEditingDialogComponent implements OnInit{

  stateValues = Object.keys(ShoppingState).filter(key => isNaN(Number(key)));
  displayedColumns = ['id', 'description', 'retailPrice', 'amount', 'discount', 'total', 'actions'];
  shoppingList: Shopping[];
  ticket: TicketEdition;
  totalShoppingList = 0 ;

  constructor(@Inject(MAT_DIALOG_DATA) data: TicketEdition, private ticketService: TicketService, private dialog: MatDialog) {
    this.ticket = data ? data : undefined;
    this.shoppingList = this.ticket.shoppingList;
  }

  ngOnInit(): void {
    this.updatePricesShopping();
    this.synchronizeShoppingCart();
  }

  updatePricesShopping(): void {
    for (const shopping of this.shoppingList) {
      shopping.updateTotal();
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
    shopping.amount--;
    if (shopping.amount === 0) {
      shopping.amount--;
      shopping.state = ShoppingState.COMMITTED;
    }
    shopping.updateTotal();
    this.synchronizeShoppingCart();
  }

  update(): void {
    this.ticketService.update(this.ticket.id, this.shoppingList)
      .subscribe( () => this.dialog.closeAll());
  }
}
