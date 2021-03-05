import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDiscountService} from './customer-discount.service';
import {CustomerDiscount} from '../shared/services/models/customer-discount.model';
import {CustomerDiscountSearch} from './customer-discount-search.model';
import {CustomerDiscountDialogComponent} from './customer-discount-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';

@Component({
  selector: 'app-customer-discount',
  templateUrl: './customer-discount.component.html'
})
export class CustomerDiscountComponent {
  title = 'Customer Discount';
  customers = of([]);
  customerDiscount: CustomerDiscountSearch;

  constructor(private dialog: MatDialog, private customerDiscountService: CustomerDiscountService) {
    this.cleanFilters();
  }

  createCustomerDiscount(): void {
    this.dialog
      .open(CustomerDiscountDialogComponent)
      .afterClosed()
      .subscribe(() => this.searchCustomersDiscounts());
  }

  searchCustomersDiscounts(): void {
    this.customers = this.customerDiscountService.searchCustomersDiscount(this.customerDiscount);
  }

  readCustomerDiscount(customerDiscount: CustomerDiscount): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Customer Discount Details',
        object: this.customerDiscountService.readCustomerDiscount(customerDiscount.id)
      }
    });
  }

  setCustomerDiscount(customerDiscount: CustomerDiscount): void {
    this.customerDiscountService
      .readCustomerDiscount(customerDiscount.id)
      .subscribe(customer => this.dialog.open(CustomerDiscountDialogComponent, {data: customer})
        .afterClosed()
        .subscribe(() => this.searchCustomersDiscounts()));
  }

  deleteCustomerDiscount(customerDiscount: CustomerDiscount): void {
    this.customerDiscountService
      .deleteCustomerDiscount(customerDiscount.id)
      .subscribe(() => this.searchCustomersDiscounts());
  }

  cleanFilters(): void {
    this.customerDiscount = {};
  }

}
