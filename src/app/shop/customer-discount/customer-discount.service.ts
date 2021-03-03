import { Injectable } from '@angular/core';
import {CustomerDiscount} from './customer-discount.model';
import {CustomerDiscountSearch} from './customer-discount-search.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDiscountService {

  private customerDiscounts: CustomerDiscount[] = [
    {note: 'customer1', registationDate: '02/05/20', discount: 0, minimmumPurchase: 0, user: 'user1'},
    {note: 'customer2', registationDate: '02/05/20', discount: 0, minimmumPurchase: 0, user: 'user2'}
  ];

  constructor() { }

  getCustomersDiscount(customerDiscountSearch: CustomerDiscountSearch): Observable<CustomerDiscount[]> {
    return of(this.customerDiscounts);
  }

}
