import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../../core/http.service';
import {SharedCashierService} from '../../shared/services/shared.cashier.service';
import {CashierState} from './cashier-state.model';
import {CashierClosure} from './cashier-closure.model';


@Injectable()
export class CashierClosureService {
  static STATE = '/state';

  constructor(private httpService: HttpService) {
  }

  close(cashierClosure: CashierClosure): Observable<void> {
    return this.httpService.patch(SharedCashierService.CASHIER_LAST, cashierClosure);
  }

  readState(): Observable<CashierState> {
    return this.httpService.get(SharedCashierService.CASHIER_LAST + CashierClosureService.STATE);
  }

}
