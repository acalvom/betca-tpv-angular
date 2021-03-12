import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {TicketCreditLine} from './models/ticket-credit-line.model';
import {Credit} from './models/credit.model';
import {EndPoints} from '@shared/end-points';
import {CreditSale} from './models/credit-sale.model';

@Injectable({
  providedIn: 'root',
})
export class SharedCreditLineService {
  private SEARCH = '/search';
  private SEARCH_UNPAID = '/searchUnpaid';
  private PAY = '/pay';

  constructor(private httpService: HttpService) {
  }

  findByUserReference(userReference: string): Observable<Credit> {
    return this.httpService
      .get(EndPoints.CREDIT + this.SEARCH + '?userReference=' + userReference);
  }

  create(credit: Credit): Observable<Credit> {
    return this.httpService
      .post(EndPoints.CREDIT, credit);
  }

  addCreditSale(userReference: string, creditSale: CreditSale): Observable<Credit>{
    return this.httpService
      .put(EndPoints.CREDIT + '/' + userReference, creditSale);
  }

  findUnpaidTicketsFromCreditLine(userReference: string): Observable<TicketCreditLine[]> {
    return this.httpService
      .get(EndPoints.CREDIT + this.SEARCH_UNPAID + '?userReference=' + userReference);
  }

  payUnpaidTicketsFromCreditLine(userReference: string, cashOrCard: string): Observable<Credit>{
    return this.httpService
      .put(EndPoints.CREDIT + '/' + userReference + this.PAY + '/' + cashOrCard);
  }

}
