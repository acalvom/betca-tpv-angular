import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDiscountService} from './customer-discount.service';
import {CustomerDiscount} from './customer-discount.model';
import {CustomerDiscountSearch} from './customer-discount-search.model';

@Component({
  selector: 'app-customer-discount',
  templateUrl: './customer-discount.component.html',
  styleUrls: ['./customer-discount.component.css']
})
export class CustomerDiscountComponent implements OnInit {
  title = 'Customer Discount';
  customers = of([]);
  customerDiscount: CustomerDiscountSearch;

  constructor(private dialog: MatDialog, private customerDiscountService: CustomerDiscountService) {
    this.cleanFilters();
  }

  ngOnInit(): void {
  }

  createCustomerDiscount(): void {
  }

  getCustomersDiscounts(): void {
    this.customers = this.customerDiscountService.getCustomersDiscount(this.customerDiscount);
  }

  readCustomerDiscount(customerDiscount: CustomerDiscount): void {
  }

  setCustomerDiscount(customerDiscount: CustomerDiscount): void {
  }

  deleteCustomerDiscount(customerDiscount: CustomerDiscount): void {
  }

  cleanFilters(): void {
    this.customerDiscount = {};
  }

}
