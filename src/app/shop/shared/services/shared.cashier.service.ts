import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {CashierLast} from './models/cashier-last.model';
import {EndPoints} from '@shared/end-points';

@Injectable()
export class SharedCashierService {

  constructor(private httpService: HttpService) {
  }

  openCashier(): Observable<any> {
    return this.httpService.post(EndPoints.CASHIERS);
  }

  readLast(): Observable<CashierLast> {
    return this.httpService.get(EndPoints.CASHIERS_LAST);
  }

}