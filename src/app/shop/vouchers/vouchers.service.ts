import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Voucher} from '../shared/services/models/voucher.model';
import {VoucherCreation} from './voucher.creation';
import {SharedVoucherService} from '../shared/services/shared-voucher.service';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class VouchersService {

  vouchers: Voucher[];

  constructor(private sharedVoucherService: SharedVoucherService, private httpService: HttpService) {
    this.vouchers = [
      {reference: 'reference1', value: 10, creationDate: new Date('2021-01-20'), dateOfUse: new Date()},
      {reference: 'reference2', value: 20, creationDate: new Date('2021-02-28'), dateOfUse: undefined},
      {reference: 'reference3', value: 30, creationDate: new Date(), dateOfUse: new Date()},
      {reference: 'reference4', value: 40, creationDate: new Date('2019-12-31'), dateOfUse: undefined},
    ];
  }

  create(voucher: VoucherCreation): Observable<Voucher> {
    return this.sharedVoucherService.create(voucher);
  }

  findAll(): Observable<Voucher[]> {
    return this.sharedVoucherService.findAll();
  }

  read(reference: string): Observable<Voucher> {
    return this.httpService.get(`${EndPoints.VOUCHERS}/${reference}`);
  }

  findVouchersBetweenDates(dateFrom: Date, dateTo: Date): Observable<Voucher[]> {
    /*return this.httpService
      .param('dateFrom', dateFrom.toDateString())
      .param('dateTo', dateTo.toDateString())
      .get(EndPoints.VOUCHERS);*/
    dateFrom.setHours(0, 0, 0, 0);
    dateTo.setHours(0, 0, 0, 0);
    return of(this.vouchers
      .filter(voucher => {
        voucher.creationDate.setHours(0, 0, 0, 0);
        return voucher.creationDate.getTime() >= dateFrom.getTime()
        && voucher.creationDate.getTime() <= dateTo.getTime() && voucher.dateOfUse === undefined;
      })
    );
  }
}
