import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {TicketCreditLine} from './models/ticket-credit-line.model';
import {Credit} from './models/credit.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class SharedCreditLineService {
  private SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  findByUserReference(userReference: string): Observable<Credit> { // TODO
    return this.httpService
      .get(EndPoints.CREDIT + this.SEARCH + '?userReference=' + userReference);
  }

  create(credit: Credit): Observable<Credit> {
    return this.httpService
      .post(EndPoints.CREDIT, credit);
  }

  searchUnpaidTickets(userPhone: string): Observable<TicketCreditLine[]> {
    /*return this.httpService
      .param('userPhone', userPhone)
      .get(EndPoints.CREDIT_LINE + SharedCreditLineService.USER_PHONE)
      .pipe(
        map(response => response.creditSales)
      );*/
    return of([
      {reference: '4354345df', total: 25, creationDate: '2018-02-27 12:26:30'},
      {reference: '7354345df', total: 40, creationDate: '2018-03-09 10:20:35'},
      {reference: '6354345df', total: 68, creationDate: '2018-03-12 12:09:12'},
    ]);
  }

}
