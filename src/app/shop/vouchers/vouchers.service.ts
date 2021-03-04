import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Voucher} from '../shared/services/models/voucher.model';
import {VoucherCreation} from './voucher.creation';

@Injectable({
  providedIn: 'root'
})
export class VouchersService {

  vouchers: Voucher[];

  create(voucher: VoucherCreation): Observable<Voucher> {
    const createdVoucher: Voucher = {
      reference: 'created',
      value: voucher.value,
      creationDate: new Date(),
      dateOfUse: undefined
    };

    this.vouchers.push(createdVoucher);
    return of(createdVoucher);
  }

  constructor() {
    this.vouchers = [
      {reference: 'reference1', value: 10, creationDate: new Date(), dateOfUse: new Date()},
      {reference: 'reference2', value: 20, creationDate: new Date(), dateOfUse: new Date()},
      {reference: 'reference3', value: 30, creationDate: new Date(), dateOfUse: new Date()},
      {reference: 'reference4', value: 40, creationDate: new Date(), dateOfUse: new Date()},
    ];
  }

  findAll(): Observable<Voucher[]> {
    return of(this.vouchers);
  }

  read(reference: string): Observable<Voucher> {
    return of(this.vouchers.filter(v => v.reference === reference)[0]);
  }
}
