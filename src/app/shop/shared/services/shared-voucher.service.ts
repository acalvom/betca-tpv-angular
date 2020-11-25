import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';

@Injectable()
export class SharedVoucherService {

  printVoucher(value: number): Observable<any> {
    return EMPTY; // TODO create and print voucher
  }
}
