import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ProviderOrderService} from './provider-order.service';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';
import {SharedArticleService} from "../shared/services/shared.article.service";
import {of} from "rxjs";

@Component({
  templateUrl: 'provider-order-dialog.component.html',
  styleUrls: ['provider-order-dialog.component.css']
})
export class ProviderOrderDialogComponent implements OnInit {
  title: string;
  order: Order = new Order();
  currentReference: string
  orderLine: OrderLine = new OrderLine();
  providerOrderLines = of([]);


  constructor(@Inject(MAT_DIALOG_DATA) data: Order,
              private providerOrderService: ProviderOrderService,
              private sharedArticleService: SharedArticleService,
              private dialog: MatDialog
  ) {
    this.title = data ? 'Update Order' : 'Create Order';
    this.order = data ? data : {
      reference: Math.random().toString(36).substring(7), description: undefined, providerCompany: undefined,
      openingDate: undefined, closingDate: undefined,
      orderLines: []
    };
    this.currentReference = data ? data.reference : undefined;
    this.search();

  }

  ngOnInit(): void {
  }

  search(): void {
    this.providerOrderService.read(this.currentReference).subscribe(order => {
      this.providerOrderLines = of(order.orderLines);
    });
  }

  isCreate(): boolean {
    console.log("create: " + this.currentReference);
    return !this.currentReference;
  }

  create(): void {
    this.providerOrderService
      .create(this.order)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    if (!this.orderLine) {
      this.order.orderLines.push(this.orderLine);
    }
    this.providerOrderService
      .update(this.currentReference, this.order)
      .subscribe(() => this.dialog.closeAll());
  }

  close(): void {
    if (!this.orderLine) {
      this.order.orderLines.push(this.orderLine);
    }
    this.providerOrderService
      .close(this.currentReference, this.order)
      .subscribe(() => this.dialog.closeAll());
  }

  addBarcode(barcode): void {
    this.sharedArticleService
      .read(barcode)
      .subscribe(article => {
        this.orderLine.articleBarcode = article.barcode;
        // console.log('barcodes ' + this.newOffer.articleBarcodes);
      });
  }

  createOrderLine(): void {
    if (!this.orderLine) {
      this.order.orderLines.push(this.orderLine);
    }
  }

  validateFields(): boolean {
    return this.checkType(this.order.description) ||
      this.checkType(this.order.providerCompany) ||
      this.checkType(this.order.openingDate);
  }

  checkType(value: any): boolean {
    return value === undefined || value === null || value === '';
  }
}
