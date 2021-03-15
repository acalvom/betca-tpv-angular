import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Order} from '../shared/services/models/order.model';
import {OrderSearch} from './order-search.model';
import {ProviderOrderService} from "./provider-order.service";
import {ProviderOrderDialogComponent} from "./provider-order-dialog.component";

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

  ngOnInit(): void {
  }

  search(): void {
    this.providerOrders = this.providerOrderService.findAll(this.orderSearch);
  }

  create(): void {
    this.dialog
      .open(ProviderOrderDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  update(order: Order): void {
    this.providerOrderService
      .read(order.reference)
      .subscribe(order => this.dialog.open(ProviderOrderDialogComponent, {data: order})
        .afterClosed()
        .subscribe(() => this.search())
      );

  }

  delete(order: Order): void {
    this.providerOrderService
      .delete(order.reference)
      .subscribe(() => this.search());
  }

  reset(): void {
    this.providerOrders = of([]);
  }


}
