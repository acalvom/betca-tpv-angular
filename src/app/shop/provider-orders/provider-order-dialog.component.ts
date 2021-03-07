import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ProviderOrderService} from './provider-order.service';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';

@Component({
  templateUrl: 'provider-order-dialog.component.html',
  styleUrls: ['provider-order-dialog.component.css']
})
export class ProviderOrderDialogComponent {
  title: string;
  order: Order;
  orderLine: OrderLine;

  constructor(@Inject(MAT_DIALOG_DATA) data: Order,
              private providerOrderService: ProviderOrderService,
              private dialog: MatDialog
  ) {
    this.title = data ? 'Update Order' : 'Create Order';

  }

  isCreate(): boolean {

    return true;
  }

  create(): void {

  }

  update(): void {
  }


}
