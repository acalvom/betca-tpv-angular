import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';
import {Observable, of} from 'rxjs';
import {OrderSearch} from "./order-search.model";

@Injectable({
  providedIn: 'root'
})
export class ProviderOrderService {

  orderLines: OrderLine[] = [{articleBarcode: '8400000000079', requiredAmount: 15, finalAmount: undefined},
    {articleBarcode: '8400000000017', requiredAmount: 5, finalAmount: undefined},
    {articleBarcode: '8400000000024', requiredAmount: 8, finalAmount: undefined},
    {articleBarcode: '8400000000100', requiredAmount: 12, finalAmount: 8},
    {articleBarcode: '8400000000093', requiredAmount: 10, finalAmount: 10}
  ];

  providerOrders: Order[] = [
    {
      reference: 'ref1',
      description: 'ped1',
      providerCompany: 'pro1',
      openingDate: new Date('2021-03-01 09:00:00'),
      orderLines: [this.orderLines[0]]
    },
    {
      reference: 'ref2',
      description: 'ped2',
      providerCompany: 'pro3',
      openingDate: new Date('2021-03-04 13:00:00'),
      closingDate: new Date('2021-03-08 09:00:00'),
      orderLines: [this.orderLines[0]]
    },
    {
      reference: 'ref3',
      description: 'ped3',
      providerCompany: 'pro4',
      openingDate: new Date('2021-03-05 18:00:00'),
      orderLines: [this.orderLines[0]]
    }
  ];


  constructor(private httpService: HttpService) {

  }


  findAll(orderSearch: OrderSearch): Observable<Order[]> {
    const orders: Order[] = this.providerOrders.filter(order => orderSearch.description === undefined ||
      order.description === orderSearch.description)
      .filter(order => orderSearch.providerCompany === undefined ||
        order.providerCompany === orderSearch.providerCompany);
    return of(orders);
  }

  create(order: Order): Observable<Order> {
    this.providerOrders.push(order);
    return of(order);
  }

  read(reference: string): Observable<Order> {
    const order = this.providerOrders.find(order => order.reference === reference);
    return of({...order});
  }

  update(reference: string, order: Order): Observable<Order> {
    const index = this.providerOrders.findIndex(order => order.reference === reference);
    this.providerOrders[index] = order;
    return of(order);
  }

  close(reference: string, order: Order): Observable<void> {
    const index = this.providerOrders.findIndex(order => order.reference === reference);
    const removedElements = this.providerOrders.splice(index, 1);
    console.log(removedElements);
    return of(null);
  }


}
