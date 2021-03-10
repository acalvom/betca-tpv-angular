import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


import {HttpService} from '@core/http.service';
import {CreditSale} from './models/credit-sale.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class SharedCreditSaleService {

  constructor(private httpService: HttpService) {
  }
  create(creditSale: CreditSale): Observable<CreditSale> {
    return this.httpService
      .post(EndPoints.CREDIT_SALE, creditSale);
  }

}
