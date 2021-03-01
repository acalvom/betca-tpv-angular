import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {TicketCreditLine} from './models/ticket-credit-line.model';

@Injectable({
  providedIn: 'root',
})
export class SharedCreditLineService {
  private static USER_PHONE = '/userPhone';

  constructor(private httpService: HttpService) {
  }

  /*read(barcode: string): Observable<Article> { // TODO
    return this.httpService
      .get(EndPoints.ARTICLES + '/' + barcode);
  }

  create(article: Article): Observable<Article> {
    return this.httpService
      .post(EndPoints.ARTICLES, article);
  }*/

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
