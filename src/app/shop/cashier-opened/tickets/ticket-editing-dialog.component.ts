import {Component, Inject} from '@angular/core';
import {Shopping} from '../../shared/services/models/shopping.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-editing-dialog',
  templateUrl: './ticket-editing-dialog.component.html',
  styleUrls: ['./ticket-editing-dialog.component.css']
})
export class TicketEditingDialogComponent{

  indexShoppingList: 0;
  displayedColumns = ['id', 'description', 'retailPrice', 'amount', 'discount', 'total', 'actions'];
  shoppingList: Shopping[];

  constructor(@Inject(MAT_DIALOG_DATA) data: Shopping[]) {
    this.shoppingList = data ? data : undefined;
  }

  update(): void {

  }

  decreaseAmount(item: any): void {

  }

  changeCommitted(item: any): void {

  }

  checkboxState(state: any): void {

  }
}
