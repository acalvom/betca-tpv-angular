import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProviderInvoice} from './provider-invoice.model';
// import {HttpService} from '@core/http.service';
// import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class ProviderInvoiceService {
  providerInvoices: ProviderInvoice[] = [
    {number: 1, creationDate: new Date('2021-03-01'), baseTax: 1000, taxValue: 10, provider: 'pro1', orderId: '1'},
    {number: 2, creationDate: new Date('2021-03-02'), baseTax: 2000, taxValue: 20, provider: 'pro2', orderId: '2'},
  ];

  constructor(/* private httpService: HttpService */) {
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
    return of({...providerInvoice});
    /*
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
    */
  }

  update(oldProviderInvoiceNumber: number, providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    const index = this.providerInvoices.findIndex(pi => pi.number === oldProviderInvoiceNumber);
    this.providerInvoices[index] = providerInvoice;
    return of(providerInvoice);
    /*
     return this.httpService
      .put(EndPoints.PROVIDER_INVOICES + '/' + providerInvoice.number, providerInvoice);
     */
  }

  delete(providerInvoiceNumber: number): Observable<void> {
    const index = this.providerInvoices.findIndex(pi => pi.number === providerInvoiceNumber);
    const removedElements = this.providerInvoices.splice(index, 1);
    console.log(removedElements);
    return of(null);
    /*
    return this.httpService
      .delete(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
     */
  }

  calculateQuarterlyAmount(trimester: number): Observable<number> {
    let amount = 0;
    if (trimester === 1) {
      amount = this.calculateAmount(this.providerInvoices[0]) +
        this.calculateAmount(this.providerInvoices[1]);
    }
    return of(amount);
    /*
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + '/' + 'trimesters/' + trimester);
     */
  }

  // TODO: Remove method
  calculateAmount(providerInvoice: ProviderInvoice): number {
    return providerInvoice.baseTax + (providerInvoice.baseTax * providerInvoice.taxValue / 100);
  }
}
