import {Injectable} from '@angular/core';
import {CustomerDiscount} from '../shared/services/models/customer-discount.model';
import {CustomerDiscountSearch} from './customer-discount-search.model';
import {Observable, of} from 'rxjs';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class CustomerDiscountService {
  private static SEARCH = '/search';

  private customerDiscounts: CustomerDiscount[] = [
    {id: '1', note: 'customer1', registationDate: '02/05/20', discount: 0, minimmumPurchase: 0, user: '66666'},
    {id: '2', note: 'customer2', registationDate: '02/05/20', discount: 0, minimmumPurchase: 0, user: '77777'}
  ];

  constructor(private httpService: HttpService) {
  }

  searchCustomersDiscount(customerDiscountSearch: CustomerDiscountSearch): Observable<CustomerDiscount[]> {
    return this.httpService
      .paramsFrom(customerDiscountSearch)
      .get(EndPoints.CUSTOMERS_DISCOUNTS + CustomerDiscountService.SEARCH);
  }

  createCustomerDiscount(customerDiscount: CustomerDiscount): Observable<CustomerDiscount> {
    customerDiscount.id = (this.customerDiscounts.length + 1).toString();
    customerDiscount.registationDate = Date.now().toString();
    this.customerDiscounts.push(customerDiscount);
    return of(customerDiscount);
  }

  readCustomerDiscount(id: string): Observable<CustomerDiscount> {
    return of(this.customerDiscounts.find(customer => customer.id === id));
  }

  updateCustomerDiscount(id: string, customerDiscount: CustomerDiscount): Observable<CustomerDiscount> {
    const setCustomer = this.customerDiscounts.find(customer => customer.id === id);
    const index = this.customerDiscounts.indexOf(setCustomer);
    if (index > -1) {
      this.customerDiscounts.splice(index, 1, customerDiscount);
    }
    return of(customerDiscount);
  }

  deleteCustomerDiscount(id: string): Observable<CustomerDiscount[]> {
    const deleteCustomer = this.customerDiscounts.find(customer => customer.id === id);
    const index = this.customerDiscounts.indexOf(deleteCustomer);
    this.customerDiscounts.splice(index, 1);
    return of(this.customerDiscounts);
  }

}
