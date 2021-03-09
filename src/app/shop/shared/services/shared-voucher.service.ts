import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedVoucherService {

  printVoucher(value: number): Observable<any> {
    console.log('voucher: ' + value);
    return of(value); // TODO create and print voucher
  }
}
