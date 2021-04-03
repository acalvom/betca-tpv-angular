import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {CashierState} from './cashier-state.model';
import {CashierClosure} from './cashier-closure.model';
import {EndPoints} from '@shared/end-points';
import {Cashier} from '../../shared/services/models/cashier.model';
import {CashierTotals} from '../../shared/services/models/cashier-totals.model';
import {CashierClosureSearch} from './cashier-closure-search.model';


@Injectable({
  providedIn: 'root',
})
export class CashierClosureService {
  private static STATE = '/state';
  static SEARCH = '/search';
  static TOTALS = '/totals';

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

  search(cashierClosureSearch: CashierClosureSearch): Observable<Cashier[]> {
    return this.httpService
      .paramsFrom(cashierClosureSearch)
      .get(EndPoints.CASHIERS + CashierClosureService.SEARCH);
  }

  totals(cashierClosureSearch: CashierClosureSearch): Observable<Cashier> {
    return this.httpService
      .paramsFrom(cashierClosureSearch)
      .get(EndPoints.CASHIERS + CashierClosureService.SEARCH + CashierClosureService.TOTALS);
  }
}
