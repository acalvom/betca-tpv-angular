import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProviderInvoice} from './provider-invoice.model';

@Injectable({
  providedIn: 'root',
})
export class ProviderInvoiceService {

  constructor() {
  }

  create(providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    // TODO
    return of();
  }

  read(orderId: string): Observable<ProviderInvoice> {
    // TODO
    return of();
  }

  update(): Observable<ProviderInvoice> {
    // TODO
    return of();
  }

  delete(): Observable<void> {
    // TODO
    return of();
  }

}
