import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDiscountService} from './customer-discount.service';
import {CustomerDiscount} from './customer-discount.model';

@Component({
  selector: 'app-customer-discount',
  templateUrl: './customer-discount.component.html',
  styleUrls: ['./customer-discount.component.css']
})
export class CustomerDiscountComponent implements OnInit {
  title = 'Customer Discount';
  customers = of([]);
  customerDiscount: CustomerDiscount;

  constructor(private dialog: MatDialog, private customerDiscountService: CustomerDiscountService) {
    this.customerDiscount = {};
  }

  ngOnInit(): void {
  }

  createCustomerDiscount(): void {
  }

  searchCustomersDiscounts(): void {
  }

  readCustomerDiscount(customerDiscount: CustomerDiscount): void {
  }

  updateCustomerDiscount(customerDiscount: CustomerDiscount): void {
  }

}
