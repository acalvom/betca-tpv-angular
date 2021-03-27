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

  constructor(private httpService: HttpService) {
  }

  searchCustomersDiscount(customerDiscountSearch: CustomerDiscountSearch): Observable<CustomerDiscount[]> {
    return this.httpService
      .paramsFrom(customerDiscountSearch)
      .get(EndPoints.CUSTOMERS_DISCOUNTS + CustomerDiscountService.SEARCH);
  }

  createCustomerDiscount(customerDiscount: CustomerDiscount): Observable<CustomerDiscount> {
    return this.httpService
      .post(EndPoints.CUSTOMERS_DISCOUNTS, customerDiscount);
  }

  readCustomerDiscount(id: string): Observable<CustomerDiscount> {
    return this.httpService.get(EndPoints.CUSTOMERS_DISCOUNTS + '/' + id);
  }

  updateCustomerDiscount(id: string, customerDiscount: CustomerDiscount): Observable<CustomerDiscount> {
    return this.httpService
      .successful()
      .put(EndPoints.CUSTOMERS_DISCOUNTS + '/' + id, customerDiscount);
  }

  deleteCustomerDiscount(id: string): Observable<CustomerDiscount[]> {
    return this.httpService.delete(EndPoints.CUSTOMERS_DISCOUNTS + '/' + id);
  }

}
