import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../core/http.service';
import {CashierLast} from './models/cashier-last.model';

@Injectable()
export class SharedCashierService {
  static END_POINT = environment.REST_CORE + '/cashier';
  static CASHIER_LAST =  SharedCashierService.END_POINT + '/last';

  constructor(private httpService: HttpService) {
  }

  openCashier(): Observable<any> {
    return this.httpService.post(SharedCashierService.END_POINT);
  }

  readLast(): Observable<CashierLast> {
    return this.httpService.get(SharedCashierService.CASHIER_LAST);
  }

}
