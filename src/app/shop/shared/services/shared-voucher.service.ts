import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Voucher} from './models/voucher.model';
import {HttpService} from '@core/http.service';
import {VoucherCreation} from '../../vouchers/voucher.creation';
import {map} from 'rxjs/operators';
import {EndPoints} from '@shared/end-points';


@Injectable({
  providedIn: 'root',
})
export class SharedVoucherService {

  constructor(private httpService: HttpService) {

  }

  create(voucher: VoucherCreation): Observable<Voucher> {
    const createdVoucher: Voucher = {
      reference: undefined,
      value: voucher.value,
      creationDate: undefined,
      dateOfUse: undefined
    };

    return this.httpService.post(EndPoints.VOUCHERS, createdVoucher);
  }

  printVoucher(value: number): Observable<any> {
    const voucherCreation: VoucherCreation = { value };
    return this.create(voucherCreation)
      .pipe(map(voucher => this.httpService.pdf().get(`${EndPoints.VOUCHERS}/${voucher.reference}`)));
  }

  consumeVoucher(voucher: Voucher): Observable<any> {
    return this.httpService.put(`${EndPoints.VOUCHERS}/${voucher.reference}`);
  }

  findAll(): Observable<Voucher[]> {
    return this.httpService.get(EndPoints.VOUCHERS);
  }
}
