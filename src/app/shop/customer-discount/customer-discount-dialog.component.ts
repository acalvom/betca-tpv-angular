import {Component, Inject, OnInit} from '@angular/core';
import {CustomerDiscount} from '../shared/services/models/customer-discount.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CustomerDiscountService} from './customer-discount.service';

@Component({
  selector: 'app-customer-discount-dialog',
  templateUrl: './customer-discount-dialog.component.html',
  styleUrls: ['customer-discount.component.css']
})
export class CustomerDiscountDialogComponent {
  customerDiscount: CustomerDiscount;
  dialogTitle: string;
  oldCustomer: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: CustomerDiscount,
              private customerService: CustomerDiscountService,
              private dialog: MatDialog) {
    this.dialogTitle = data ? 'Create Customer Discount' : 'Update Customer Discount';
    this.customerDiscount = data ? data : {
      id: undefined,
      note: undefined,
      registationDate: undefined,
      discount: undefined,
      minimmumPurchase: undefined,
      user: undefined
    };
    this.oldCustomer = data ? data.id : undefined;
  }

  createCustomerDiscount(): void {
    this.customerService
      .createCustomerDiscount(this.customerDiscount)
      .subscribe(() => this.dialog.closeAll());
  }

  updateCustomerDiscount(): void {
    this.customerService
      .updateCustomerDiscount(this.oldCustomer, this.customerDiscount)
      .subscribe(() => this.dialog.closeAll());
  }

  isCreate(): boolean {
    return this.oldCustomer === undefined;
  }

  invalid(): boolean {
    return this.checkNumberAttributes(this.customerDiscount.minimmumPurchase)
      || this.checkNumberAttributes(this.customerDiscount.discount)
      || this.checkStringAttributes(this.customerDiscount.user) ;
  }

  checkNumberAttributes(attr: number): boolean {
    return attr === undefined || null;
  }

  checkStringAttributes(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

}
