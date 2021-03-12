import {Component, OnInit} from '@angular/core';
import {OnlineOrderDto} from '../shared/online-order.model';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  displayedColumns = ['deliveryDate', 'totalPayed', 'state'];
  onlineOrder1: OnlineOrderDto = {
    deliveryDate: new Date('2020-01-01'),
    totalPayed: 253,
    state: 'PREPARING'};
  onlineOrder2: OnlineOrderDto = {
    deliveryDate: new Date('2020-05-06'),
    totalPayed: 123,
    state: 'SENT'};
  onlineOrder3: OnlineOrderDto = {
    deliveryDate: new Date('2020-08-26'),
    totalPayed: 785,
    state: 'DELIVERED'};
  onlineOrders = [this.onlineOrder1, this.onlineOrder2, this.onlineOrder3];
  dataSource = this.onlineOrders;

  constructor() { }

  ngOnInit(): void {
  }

}
