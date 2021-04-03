import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProviderInvoice} from './provider-invoice.model';
import {TotalTax} from './total-tax.model';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root',
})
export class ProviderInvoiceService {
  static TOTAL_TAX_QUARTERS = '/total-tax/quarters';

  constructor(private httpService: HttpService) {
  }

  findAll(): Observable<ProviderInvoice[]> {
    return this.httpService.get(EndPoints.PROVIDER_INVOICES);
  }

  create(providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    return this.httpService
      .post(EndPoints.PROVIDER_INVOICES, providerInvoice);
  }

  read(providerInvoiceNumber: number): Observable<ProviderInvoice> {
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
  }

  update(oldProviderInvoiceNumber: number, providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    return this.httpService
      .put(EndPoints.PROVIDER_INVOICES + '/' + oldProviderInvoiceNumber, providerInvoice);
  }

  delete(providerInvoiceNumber: number): Observable<void> {
    return this.httpService
      .delete(EndPoints.PROVIDER_INVOICES + '/' + providerInvoiceNumber);
  }

  calculateTotalTax(quarterNumber: number): Observable<TotalTax> {
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + ProviderInvoiceService.TOTAL_TAX_QUARTERS + '/' + quarterNumber);
  }

}
