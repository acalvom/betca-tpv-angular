import {Component, Inject} from '@angular/core';
import {Invoice} from '../shared/services/models/invoice';
import {InvoiceUpdate} from './invoice-update.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {InvoiceService} from './invoice.service';

@Component({
  templateUrl: './invoice-dialog.component.html',
})
export class InvoiceDialogComponent {
  title = 'Create/Update Invoice';
  invoiceModel: InvoiceUpdate;
  oldInvoice = false;

  constructor(@Inject(MAT_DIALOG_DATA) data: Invoice, private invoiceService: InvoiceService, private dialog: MatDialog) {
    this.title = data ? 'Update Invoice' : 'Create Invoice';
    this.oldInvoice = !data;

    this.invoiceModel = data ? {
      number: data.number,
      creationDate: data.creationDate,
      baseTax: data.baseTax,
      taxValue: data.taxValue,
      phoneUser: data.user.phone,
      ticketReference: data.ticket.reference,
      dniUser: data.user.dni,
      nameUser: data.user.name,
      familyNameUser: data.user.familyName
    } : {
      number: undefined,
      creationDate: undefined,
      baseTax: undefined,
      taxValue: undefined,
      phoneUser: undefined,
      ticketReference: undefined,
      dniUser: undefined,
      nameUser: undefined,
      familyNameUser: undefined
    };
  }

  isCreate(): boolean {
    return this.oldInvoice;
  }

  update(): void {
    this.invoiceService
      .update(this.invoiceModel)
      .subscribe(() => this.dialog.closeAll());
  }
}
