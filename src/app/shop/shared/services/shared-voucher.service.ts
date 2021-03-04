import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Voucher} from './models/voucher.model';
import {HttpService} from '@core/http.service';

@Injectable({
  providedIn: 'root',
})
export class SharedVoucherService {

  constructor(private httpService: HttpService) {}

  printVoucher(value: number): Observable<any> {
    const voucher: Voucher = {
      reference: '',
      value,
      creationDate: new Date(),
      dateOfUse: undefined
    };

    return this.createAndPrint(voucher);
  }

  createAndPrint(voucher: Voucher): Observable<Voucher> {
    return this.httpService
      .pdf()
      .post('', voucher);
  }
}
