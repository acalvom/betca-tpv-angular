import {Component, OnInit} from '@angular/core';
import {OnlineOrder} from '../../home/shared/online-order.model';
import {OnlineOrderState} from '../../home/shared/online-order-state.model';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  displayedColumns = ['reference', 'deliveryDate', 'ticket', 'state'];
  onlineOrder1: OnlineOrder = {reference: 'r0001', state: OnlineOrderState.DELIVERED,
    deliveryDate: new Date('2020-01-01'), ticket: {id: '01', reference: 'r0001', mobile: 688930112}};
  onlineOrder2: OnlineOrder = {reference: 'r0002', state: OnlineOrderState.SENT,
    deliveryDate: new Date('2020-02-28'), ticket: {id: '02', reference: 'r0002', mobile: 688631677}};
  onlineOrder3: OnlineOrder = {reference: 'r0003', state: OnlineOrderState.PREPARING,
    deliveryDate: new Date('2020-04-01'), ticket: {id: '03', reference: 'r0003', mobile: 688987646}};
  onlineOrders = [this.onlineOrder1, this.onlineOrder2, this.onlineOrder3];
  stateOptions = ['PREPARING', 'SENT', 'DELIVERED'];

  constructor() { }

  ngOnInit(): void {
  }

}
