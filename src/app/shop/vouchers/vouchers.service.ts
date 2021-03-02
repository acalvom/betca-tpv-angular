import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Voucher} from '../shared/services/models/voucher.model';

@Injectable({
  providedIn: 'root'
})
export class VouchersService {

  vouchers: Voucher[];

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
