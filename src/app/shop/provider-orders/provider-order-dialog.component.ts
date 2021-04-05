import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ProviderOrderService} from './provider-order.service';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';
import {SharedArticleService} from "../shared/services/shared.article.service";
import {of} from "rxjs";
import {SharedProviderService} from "../shared/services/shared.provider.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as moment from "moment";


@Component({
  templateUrl: 'provider-order-dialog.component.html',
  styleUrls: ['provider-order-dialog.component.css']
})
export class ProviderOrderDialogComponent {
  title: string;
  titleOrderline = 'Orders Line Management';
  order: Order = new Order();
  currentReference: string
  orderLine: OrderLine = new OrderLine();
  providerOrderLines = of([]);


  constructor(@Inject(MAT_DIALOG_DATA) data: Order,
              private sharedProviderService: SharedProviderService,
              private providerOrderService: ProviderOrderService,
              private sharedArticleService: SharedArticleService,
              private dialog: MatDialog,
              private _snackBar: MatSnackBar
  ) {
    this.title = data ? 'Update Order' : 'Create Order';
    this.order = data ? data : {
      description: undefined, providerCompany: undefined,
      openingDate: undefined, closingDate: undefined,
      orderLines: []
    };
    this.currentReference = data ? data.reference : undefined;
    data.orderLines
    if (this.currentReference != undefined) {
      //this.search();
      this.providerOrderLines = of(data.orderLines);
    }

  }

  search(): void {
    this.providerOrderService.read(this.currentReference).subscribe(order => {

      this.providerOrderLines = of(order.orderLines);
    });
  }

  isCreate(): boolean {
    return !this.currentReference;
  }

  create(): void {
    this.providerOrderService
      .create(this.order)
      .subscribe(() => {
        this.openSnackBar("Se ha creado el pedido correctamente", "Success");
        this.dialog.closeAll()
      });
  }

  update(): void {
    if (!this.orderLine) {
      this.order.orderLines.push(this.orderLine);
    }
    this.providerOrderService
      .update(this.currentReference, this.order)
      .subscribe(() => {
        this.openSnackBar("Se ha actualizado el pedido correctamente", "Success");
        this.dialog.closeAll()
      });
  }

  close(): void {
    if (!this.orderLine) {
      this.order.orderLines.push(this.orderLine);
    }
    this.providerOrderService
      .close(this.currentReference, this.order)
      .subscribe(() => {
        this.openSnackBar("Se ha cerrado el pedido correctamente", "Success");
        this.dialog.closeAll()
      });
  }

  addCompany(company): void {
    this.sharedProviderService
      .searchCompanies(company)
      .subscribe(companies => {
        if (!companies) {
          this.openSnackBar("No existe la compania introducido el " + company, "InValid");
        }
        this.order.providerCompany = company;
        this.orderLine.finalAmount = undefined;
      });
  }

  addBarcode(barcode): void {
    this.sharedArticleService
      .read(barcode)
      .subscribe(article => {
        if (!article) {
          this.openSnackBar("No existe el producto introducido el " + barcode, "InValid");
        }
        this.orderLine.articleBarcode = article.barcode;
        this.orderLine.requiredAmount = undefined;
        this.orderLine.finalAmount = undefined;
      });
  }

  createOrderLine(): void {
    if (!this.validateFieldsOrderLine()) {
      if (!this.checkExistProduct()) {
        this.order.orderLines.push({
          articleBarcode: this.orderLine.articleBarcode,
          requiredAmount: this.orderLine.requiredAmount,
          finalAmount: undefined
        });
        this.providerOrderLines = of(this.order.orderLines);
        this.openSnackBar("Se añadido correctamente el articulo al pedido", "Success");
      } else {
        this.openSnackBar("Existe el producto en el listado de articulos", "InValid");
      }
    }
  }

  updateOrderLine(): void {
    if (!this.validateFieldsOrderLine()) {
      const indexOrderLine = this.order.orderLines.findIndex(orderLines => orderLines.articleBarcode === this.orderLine.articleBarcode)
      if (this.checkExistProduct()) {
        this.order.orderLines[indexOrderLine].finalAmount = this.orderLine.requiredAmount;
        this.orderLine.finalAmount = this.orderLine.requiredAmount;
        this.providerOrderLines = of(this.order.orderLines);
        this.openSnackBar("Se actualizado correctamente el articulo al pedido", "Success");
      }
    }
  }

  validateFields(): boolean {
    return this.checkType(this.order.providerCompany) || (this.checkType(this.order.orderLines) && this.order.orderLines.length != 0);
  }

  checkExistProduct(): boolean {
    const indexOrderLine = this.order.orderLines.findIndex(orderLines => orderLines.articleBarcode === this.orderLine.articleBarcode)
    return indexOrderLine > -1
  }

  validateFieldsOrderLine(): boolean {
    return this.checkType(this.orderLine.articleBarcode) ||
      this.checkType(this.orderLine.requiredAmount) || this.orderLine.requiredAmount < 1;
  }

  checkType(value: any): boolean {
    return value === undefined || value === null || value === '';
  }

  resetFinalAmount() {
    this.orderLine.finalAmount = undefined;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setFormatDate(dateInput) {
    return moment(dateInput).format('MM/DD/YYYY');
  }

}
