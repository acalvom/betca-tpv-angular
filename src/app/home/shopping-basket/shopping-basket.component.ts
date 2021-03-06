import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '@core/auth.service';
import {CheckOutDialogComponent} from '../../shop/cashier-opened/shopping-cart/check-out-dialog.component';
import {Article} from "../shared/article.model";


@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  displayedColumns: string[] = ['position', 'barcode', 'description', 'retailPrice'];
  article1: Article = {barcode: '000001', description: 'dagahajq', retailPrice: 23.67};
  article2: Article = {barcode: '000002', description: 'hfgdsagh', retailPrice: 10.89};
  article3: Article = {barcode: '000003', description: 'asdfghjg', retailPrice: 34.78};
  article4: Article = {barcode: '000004', description: 'jghfdssa', retailPrice: 23.09};
  article5: Article = {barcode: '000005', description: 'zxcngvhj', retailPrice: 5.20};
  shoppingBasket = [this.article1, this.article2, this.article3, this.article4, this.article5];
  dataSource = this.shoppingBasket;
  username = undefined;
  totalShoppingBasket = 0 ;

  constructor(private dialog: MatDialog, private authService: AuthService) {

  }

  ngOnInit(): void {

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
