import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderOrderService {

  providerOrders: Order[] = [
    { reference: 'ref1', description: 'ped1' , providerCompany: 'prov1', openingDate: new Date() },
    { reference: 'ref2', description: 'ped2' , providerCompany: 'prov2', openingDate: new Date(), closingDate: new Date() },
    { reference: 'ref3', description: 'ped3' , providerCompany: 'prov3', openingDate: new Date() }
  ];

  orderLines: OrderLine[] = [{articleBarcode: '', requiredAmount: 15 },
    {articleBarcode: '8400000000017', requiredAmount: 5 },
    {articleBarcode: '8400000000024', requiredAmount: 8 },
    {articleBarcode: '8400000000100', requiredAmount: 12, finalAmount: 8 },
    {articleBarcode: '8400000000093', requiredAmount: 10, finalAmount: 10 }
  ];

  constructor(private httpService: HttpService) {

  }


  findAll(): Observable<Order[]> {
    return of(this.providerOrders);
  }

}
