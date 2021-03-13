import {Component, OnInit} from '@angular/core';

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

  displayedColumns = ['photo', 'description', 'quantity', 'retailPrice', 'amount', 'actions'];
  article1: ShoppingBasketArticle = {photo: 'https://stylelovely.com/wp-content/uploads/ropa-para-ninos-primavera-2018-el-corte-ingles-peto-vaquero.jpg',
    description: 'dagahajq', quantity: 2, retailPrice: 23.67, amount: 0};
  article2: ShoppingBasketArticle = {photo: 'https://mundokawaii.store/wp-content/uploads/2019/05/ropa-kawaii-1-1200x1200.jpg',
    description: 'hfgdsagh', quantity: 1, retailPrice: 10.89, amount: 0};
  article3: ShoppingBasketArticle = {photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XvoGaGEIGHxXsV6NJjYoJzCBW0QX6yp3Fg&usqp=CAU',
    description: 'asdfghjg', quantity: 5, retailPrice: 34.78, amount: 0};
  article4: ShoppingBasketArticle = {photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkd0ur-V6Vb_urgwsrzrl4p8XtlVhz2t9YA&usqp=CAU',
    description: 'jghfdssa', quantity: 4, retailPrice: 23.09, amount: 0};
  article5: ShoppingBasketArticle = {photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-koXQj2fzy3zXR3GJYP4sAEXoF3_W2QKivQ&usqp=CAU',
    description: 'zxcngvhj', quantity: 7, retailPrice: 5.20, amount: 0};
  shoppingBasket = [this.article1, this.article2, this.article3, this.article4, this.article5];
  dataSource = this.shoppingBasket;
  username = undefined;
  totalShoppingBasket = 0 ;

  constructor(private dialog: MatDialog, private authService: AuthService) {

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
    this.dialog.open(CheckOutDialogComponent, {data: this.shoppingBasket}).afterClosed().subscribe(
      result => {
        if (result) {
          this.ngOnInit();
        }
      }
    );
  }
}

