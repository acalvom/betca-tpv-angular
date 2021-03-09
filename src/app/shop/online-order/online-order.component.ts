import {Component, OnInit} from '@angular/core';
import {OnlineOrderState} from '../../home/shared/online-order-state.model';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {
  displayedColumns = ['reference', 'deliveryDate', 'ticket', 'state'];
  onlineOrder1: { reference: string; state: OnlineOrderState } = {reference: '888000001', state: OnlineOrderState.PREPARING};
  onlineOrder2: { reference: string; state: OnlineOrderState } = {reference: '888000002', state: OnlineOrderState.SENT};
  onlineOrder3: { reference: string; state: OnlineOrderState } = {reference: '888000003', state: OnlineOrderState.DELIVERED};
  onlineOrders = [this.onlineOrder1, this.onlineOrder2, this.onlineOrder3];
  dataSource = this.onlineOrders;

  constructor() { }

  ngOnInit(): void {
  }

}
