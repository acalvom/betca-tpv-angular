import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {CashMovementDialog} from './cash-movement-dialog.model';


@Injectable({
  providedIn: 'root',
})
export class CashMovementDialogService {
  private static STATE = '/state';

  constructor(private httpService: HttpService) {
  }

  movementIn(cashMovementDialog: CashMovementDialog): Observable<void> {
    return this.httpService.patch(EndPoints.CASH_MOVEMENT_IN, cashMovementDialog);
  }

  movementOut(cashMovementDialog: CashMovementDialog): Observable<void> {
    return this.httpService.patch(EndPoints.CASH_MOVEMENT_OUT, cashMovementDialog);
  }

  readState(): Observable<CashMovementDialog> {
    return this.httpService.get(EndPoints.CASHIERS_LAST + CashMovementDialogService.STATE);
  }

}
