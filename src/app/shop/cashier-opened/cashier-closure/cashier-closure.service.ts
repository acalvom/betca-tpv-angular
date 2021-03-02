import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {CashierState} from './cashier-state.model';
import {CashierClosure} from './cashier-closure.model';
import {EndPoints} from '@shared/end-points';
import {Cashier} from '../../shared/services/models/cashier.model';


@Injectable({
  providedIn: 'root',
})
export class CashierClosureService {
  private static STATE = '/state';
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  close(cashierClosure: CashierClosure): Observable<void> {
    return this.httpService.patch(EndPoints.CASHIERS_LAST, cashierClosure);
  }

  readState(): Observable<CashierState> {
    return this.httpService.get(EndPoints.CASHIERS_LAST + CashierClosureService.STATE);
  }

  read(id: string): Observable<Cashier> {
    return this.httpService
      .get(EndPoints.CASHIERS + '/' + id);
  }

  search(cashierClosure: CashierClosure): Observable<Cashier[]> {
    /*return this.httpService
      .paramsFrom(cashierClosure)
      .get(EndPoints.CASHIERS + CashierClosureService.SEARCH);*/

    const cashier: Cashier[] = ([
      {
        initialCash : 1,
        cashSales : 1,
        cardSales : 1,
        usedVouchers : 1,
        deposit : 1,
        withdrawal : 1,
        comment : 'hola',
        lostCard : 1,
        lostCash : 1,
        finalCash : 1,
        finalCard : 1,
        openingDate : null,
        closureDate : null
      },
      {
        initialCash : 1,
        cashSales : 1,
        cardSales : 1,
        usedVouchers : 1,
        deposit : 1,
        withdrawal : 1,
        comment : 'hola',
        lostCard : 1,
        lostCash : 1,
        finalCash : 1,
        finalCard : 1,
        openingDate : null,
        closureDate : null
      }
    ]);
    return of(cashier);
  }

}
