import {Injectable} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedVoucherService {

  printVoucher(value: number): Observable<any> {
    console.log(value);
    return EMPTY; // TODO create and print voucher
  }
}
