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

  constructor(private sharedVoucherService: SharedVoucherService, private httpService: HttpService) {}

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
    return this.httpService
      .param('from', dateFrom.toISOString().replace(/\.[0-9A-Z]{4}/, ''))
      .param('to', dateTo.toISOString().replace(/\.[0-9A-Z]{4}/, ''))
      .get(`${EndPoints.VOUCHERS}/between`);
  }
}
