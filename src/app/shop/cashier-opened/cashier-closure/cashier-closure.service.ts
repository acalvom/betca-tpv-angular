import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

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

  create(cashierClosure: CashierClosure): Observable<Cashier> {
    return this.httpService
      .post(EndPoints.CASHIERS, cashierClosure);
  }

  update(id: string, cashier: Cashier): Observable<Cashier> {
    return this.httpService
      .successful()
      .put(EndPoints.CASHIERS + '/' + id, cashier);
  }

  read(id: string): Observable<Cashier> {
    return this.httpService
      .get(EndPoints.CASHIERS + '/' + id);
  }

  search(cashierClosure: CashierClosure): Observable<Cashier[]> {
    return this.httpService
      .paramsFrom(cashierClosure)
      .get(EndPoints.CASHIERS + CashierClosureService.SEARCH);  }
}
