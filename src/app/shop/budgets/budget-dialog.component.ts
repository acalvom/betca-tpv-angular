import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {ShoppingCartService} from '../cashier-opened/shopping-cart/shopping-cart.service';
import {BudgetCreation} from './budget-creation.model';



@Component({
  templateUrl: 'budget-dialog.component.html',
  styleUrls: ['../cashier-opened/shopping-cart/shopping-cart.component.css']
})
export class BudgetDialogComponent {

  budgetCreation: BudgetCreation;
  totalPurchase: number;
  constructor( @Inject(MAT_DIALOG_DATA) data, private dialogRef: MatDialogRef<BudgetDialogComponent>,
               private shoppingCartService: ShoppingCartService) {
    this.budgetCreation = {id: null, creationDate : null  , shoppings: data};
  }

  createBudget(): void{
    this.shoppingCartService.createBudget(this.budgetCreation)
      .subscribe(() => this.dialogRef.close(true));
    // TODO create budget
  }
}
