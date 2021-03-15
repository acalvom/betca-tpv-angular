import {Component, OnInit} from '@angular/core';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '@core/auth.service';
import {ShoppingBasketArticle} from '../shared/shopping-basket-article.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PayDialogComponent} from './pay-dialog.component';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  displayedColumns = ['photo', 'description', 'quantity', 'retailPrice', 'amount', 'actions'];
  article1: ShoppingBasketArticle = {photo: 'https://static.zara.net/photos///2021/V/0/1/p/2753/025/712/2/w/375/2753025712_6_1_1.jpg?ts=1614009934404',
    description: 'White', quantity: 2, retailPrice: 23.67, amount: 0};
  article2: ShoppingBasketArticle = {photo: 'https://static.zara.net/photos///2021/V/0/1/p/2409/711/406/2/w/375/2409711406_6_1_1.jpg?ts=1614100929895',
    description: 'Light blue', quantity: 1, retailPrice: 10.89, amount: 0};
  article3: ShoppingBasketArticle = {photo: 'https://static.zara.net/photos///2021/V/0/1/p/2409/711/704/2/w/375/2409711704_6_1_1.jpg?ts=1614091492493',
    description: 'Brown', quantity: 5, retailPrice: 34.78, amount: 0};
  article4: ShoppingBasketArticle = {photo: 'https://static.zara.net/photos///2021/V/0/1/p/8073/150/412/2/w/375/8073150412_6_1_1.jpg?ts=1614784382100',
    description: 'Purple', quantity: 4, retailPrice: 23.09, amount: 0};
  article5: ShoppingBasketArticle = {photo: 'https://static.zara.net/photos///2021/V/0/1/p/2761/053/403/2/w/375/2761053403_6_1_1.jpg?ts=1610963172458',
    description: 'Blue', quantity: 7, retailPrice: 5.20, amount: 0};
  shoppingBasket = [this.article1, this.article2, this.article3, this.article4, this.article5];
  dataSource = this.shoppingBasket;
  username = undefined;
  totalShoppingBasket = 0 ;

  constructor(private dialog: MatDialog, private authService: AuthService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    for (let i = 0; i < this.shoppingBasket.length; i++) {
      this.shoppingBasket[i].amount = this.shoppingBasket[i].quantity * this.shoppingBasket[i].retailPrice;
      this.totalShoppingBasket += this.shoppingBasket[i].amount;
    }
  }

  incrementQuantity(shoppingBasketArticle: ShoppingBasketArticle): void {
    shoppingBasketArticle.quantity++;
    if (shoppingBasketArticle.quantity === 0) {
      shoppingBasketArticle.quantity++;
    }
    shoppingBasketArticle.amount = shoppingBasketArticle.quantity * shoppingBasketArticle.retailPrice;
    this.totalShoppingBasket = 0;
    for (let i = 0; i < this.shoppingBasket.length; i++) {
      this.totalShoppingBasket += this.shoppingBasket[i].amount;
    }
  }

  decreaseQuantity(shoppingBasketArticle: ShoppingBasketArticle): any {
    shoppingBasketArticle.quantity--;
    if (shoppingBasketArticle.quantity === 0) {
      shoppingBasketArticle.quantity--;
    }
    shoppingBasketArticle.amount = shoppingBasketArticle.quantity * shoppingBasketArticle.retailPrice;
    this.totalShoppingBasket = 0;
    for (let i = 0; i < this.shoppingBasket.length; i++) {
      this.totalShoppingBasket += this.shoppingBasket[i].amount;
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
    this.dialog.open(PayDialogComponent, {data: this.shoppingBasket}).afterClosed().subscribe(
      result => {
        if (result) {
          this.ngOnInit();
        }
      }
    );
  }

  confirm() {
    this.snackBar.open('You have successfully paid for the order.', 'Close', {
      duration: 3000
    });
  }
}

