import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Ticket} from './models/ticket.model';

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

  searchUnpaidTickets(userPhone: string): Observable<Ticket[]> {
    /*return this.httpService
      .param('userPhone', userPhone)
      .get(EndPoints.CREDIT_LINE + SharedCreditLineService.USER_PHONE)
      .pipe(
        map(response => response.creditSales)
      );*/
    return of([ // TODO ver exactamente que datos mostrar aqui
      {id: '1', reference: 'sashdkh3423', mobile: 345443454534},
      {id: '2', reference: '2sashdkh342', mobile: 345443454534},
      {id: '3', reference: '3sashdkh342', mobile: 345443454534},
    ]);
  }

}
