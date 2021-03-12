import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '@core/auth.service';
import {ShoppingBasketArticle} from '../shared/shopping-basket-article.model';
import {CheckOutDialogComponent} from '../../shop/cashier-opened/shopping-cart/check-out-dialog.component';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  displayedColumns = ['photo', 'description', 'amount', 'retailPrice', 'actions'];
  article1: ShoppingBasketArticle = {photo: '000001', description: 'dagahajq', amount: 2, retailPrice: 23.67};
  article2: ShoppingBasketArticle = {photo: '000002', description: 'hfgdsagh', amount: 1, retailPrice: 10.89};
  article3: ShoppingBasketArticle = {photo: '000003', description: 'asdfghjg', amount: 5, retailPrice: 34.78};
  article4: ShoppingBasketArticle = {photo: '000004', description: 'jghfdssa', amount: 4, retailPrice: 23.09};
  article5: ShoppingBasketArticle = {photo: '000005', description: 'zxcngvhj', amount: 7, retailPrice: 5.20};
  shoppingBasket = [this.article1, this.article2, this.article3, this.article4, this.article5];
  dataSource = this.shoppingBasket;
  username = undefined;
  totalShoppingBasket = 0 ;

  constructor(private dialog: MatDialog, private authService: AuthService) {

  }

  ngOnInit(): void {

  }

  incrementAmount(shoppingBasketArticle: ShoppingBasketArticle): void {
    shoppingBasketArticle.amount++;
    if (shoppingBasketArticle.amount === 0) {
      shoppingBasketArticle.amount++;
    }
  }

  decreaseAmount(shoppingBasketArticle: ShoppingBasketArticle): any {
    shoppingBasketArticle.amount--;
    if (shoppingBasketArticle.amount === 0) {
      shoppingBasketArticle.amount--;
    }
  }

  delete(shoppingBasketArticle: ShoppingBasketArticle): void {
    const index = this.shoppingBasket.indexOf(shoppingBasketArticle);
    if (index > 0) {
      this.shoppingBasket.splice(index, 1);
    }
  }

  login(): void {
    this.dialog.open(LoginDialogComponent)
      .afterClosed()
      .subscribe(() => this.username = this.authService.getName());
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  pay() {
    this.dialog.open(CheckOutDialogComponent, {data: this.shoppingBasket}).afterClosed().subscribe(
      result => {
        if (result) {
          this.ngOnInit();
        }
      }
    );
  }
}
