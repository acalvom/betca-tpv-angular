import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Order} from '../shared/services/models/order.model';
import {OrderSearch} from './order-search.model';
import {ProviderOrderService} from "./provider-order.service";
import {ProviderOrderDialogComponent} from "./provider-order-dialog.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-provider-orders',
  templateUrl: './provider-orders.component.html',
  styleUrls: ['./provider-orders.component.css']
})
export class ProviderOrdersComponent implements OnInit {
  title = 'Provider Orders Management';
  orderSearch: OrderSearch = new OrderSearch();
  providerOrders = of([]);
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private dialog: MatDialog, private providerOrderService: ProviderOrderService) {
    this.search();
  }

  ngOnInit(): void {
  }

  readAll(): void {
    this.providerOrders = this.providerOrderService.readAll();
  }

  search(): void {
    if (this.orderSearch.description != undefined && this.orderSearch.fromDate != undefined && this.orderSearch.toDate != undefined) {
      this.providerOrders = this.providerOrderService.search(this.orderSearch);
    } else {
      this.readAll();
    }
  }

  create(): void {
    this.dialog
      .open(ProviderOrderDialogComponent)
      .afterClosed()
      .subscribe(() => this.readAll());
  }

  update(order: Order): void {
    this.providerOrderService
      .read(order.reference)
      .subscribe(order => this.dialog.open(ProviderOrderDialogComponent, {data: order})
        .afterClosed()
        .subscribe(() => this.readAll())
      );

  }

  delete(order: Order): void {
    this.providerOrderService
      .delete(order.reference)
      .subscribe(() => this.readAll());
  }

  reset(): void {
    this.providerOrders = of([]);
    this.orderSearch = new OrderSearch();
  }


}
