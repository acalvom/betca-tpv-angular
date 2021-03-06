import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProviderInvoice} from './provider-invoice.model';
import {HttpService} from '@core/http.service';
// import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class ProviderInvoiceService {
  providerInvoices: ProviderInvoice[] = [
    { number: 1, creationDate: new Date(), baseTax: 1000, taxValue: 10, provider: 'pro1', orderId: '1'},
    { number: 2, creationDate: new Date(), baseTax: 2000, taxValue: 20, provider: 'pro2', orderId: '2'},
  ];

  constructor(private httpService: HttpService) {
  }

  findAll(): Observable<ProviderInvoice[]> {
    return of(this.providerInvoices);
  }

  create(providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    this.providerInvoices.push(providerInvoice);
    return of(providerInvoice);
    /*
    return this.httpService
      .post(EndPoints.PROVIDER_INVOICES, providerInvoice);
    */
  }

  read(providerInvoiceNumber: number): Observable<ProviderInvoice> {
    const providerInvoice = this.providerInvoices.find(pi => pi.number === providerInvoiceNumber);
    return of(providerInvoice);
    /*
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
    */
  }

  update(): Observable<ProviderInvoice> {
    // TODO
    return of();
  }

  delete(providerInvoiceNumber: number): Observable<void> {
    const index = this.providerInvoices.findIndex(pi => pi.number === providerInvoiceNumber);
    this.providerInvoices.splice(index, 1);
    /*
    return this.httpService
      .delete(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
     */
    return of(null);
  }

}
