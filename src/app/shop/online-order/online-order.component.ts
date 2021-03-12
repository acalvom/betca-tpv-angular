import {Component, OnInit} from '@angular/core';
import {OnlineOrder} from './online-order-model';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  displayedColumns = ['reference', 'deliveryDate', 'totalPayed', 'state', 'saveState'];
  onlineOrder1: OnlineOrder = {
    reference: '80001',
    deliveryDate: new Date('2020-01-01'),
    totalPayed: 253,
    state: 'PREPARING'};
  onlineOrder2: OnlineOrder = {
    reference: '80002',
    deliveryDate: new Date('2020-05-06'),
    totalPayed: 123,
    state: 'SENT'};
  onlineOrder3: OnlineOrder = {
    reference: '80003',
    deliveryDate: new Date('2020-08-26'),
    totalPayed: 785,
    state: 'DELIVERED'};
  onlineOrders = [this.onlineOrder1, this.onlineOrder2, this.onlineOrder3];
  dataSource = this.onlineOrders;
  stateOptions = ['PREPARING', 'SENT', 'DELIVERED'];

  constructor() { }

  ngOnInit(): void {
  }

}
