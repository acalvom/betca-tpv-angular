import {Component, Inject} from '@angular/core';
import {Invoice} from '../shared/services/models/invoice';
import {InvoiceUpdate} from './invoice-update.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {InvoiceService} from './invoice.service';
import {Ticket} from '../shared/services/models/ticket.model';

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
      userPhone: data.ticket.user.mobile,
      ticketReference: data.ticket.reference,
      userDni: data.ticket.user.dni,
      userName: data.ticket.user.name,
      familyNameUser: data.ticket.user.familyName,
      userEmail: data.ticket.user.email
    } : {
      number: undefined,
      creationDate: undefined,
      userPhone: undefined,
      ticketReference: undefined,
      userDni: undefined,
      userName: undefined,
      familyNameUser: undefined,
      userEmail: undefined
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

  setTicketInModel(ticket: Ticket): void{
    this.invoiceModel.ticketReference = ticket.reference;
    this.invoiceModel.creationDate = ticket.creationDate;
    this.invoiceModel.userDni = ticket.user.dni;
    this.invoiceModel.userName = ticket.user.name;
    this.invoiceModel.familyNameUser = ticket.user.familyName;
    this.invoiceModel.userPhone = ticket.user.mobile;
    this.invoiceModel.userEmail = ticket.user.email;
  }

  addTicket(ticketRef: string): void {
    const ticket = this.invoiceService
      .searchTicketByRef(ticketRef)
      .subscribe(tk => this.setTicketInModel(tk));
  }

  create(): void {
    this.invoiceService
      .create(this.invoiceModel)
      .subscribe(() => this.dialog.closeAll());
  }
}
