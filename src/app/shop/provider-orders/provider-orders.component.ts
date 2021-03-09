import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Order} from '../shared/services/models/order.model';
import {OrderSearch} from './order-search.model';
import {ProviderOrderService} from "./provider-order.service";

@Component({
  selector: 'app-provider-orders',
  templateUrl: './provider-orders.component.html',
  styleUrls: ['./provider-orders.component.css']
})
export class ProviderOrdersComponent implements OnInit {
  title = 'Provider Orders Management';
  orderSearch: OrderSearch = new OrderSearch();
  providerOrders = of([]);

  constructor(private dialog: MatDialog, private providerOrderService: ProviderOrderService) {
    this.search();
  }

  search(): void {
    this.providerOrders = this.providerOrderService.findAll();
  }

  create(): void {

  }

  read(order: Order): void {

  }

  update(order: Order): void {

  }

  delete(order: Order): void {

  }

  reset(): void {
    this.providerOrders = of([]);
  }

  ngOnInit(): void {
  }

}
