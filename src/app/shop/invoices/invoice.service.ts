import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {HttpService} from '@core/http.service';
import {InvoiceSearch} from './invoice-search.model';
import {Invoice} from '../shared/services/models/invoice';
import {InvoiceItem} from './invoice-item.model';

import {Ticket} from '../shared/services/models/ticket.model';
import {InvoiceUpdate} from './invoice-update.model';
import {User} from '../shared/services/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  sequence = 111200300;
  phones: number[] = [651112230, 651112231, 651112232];

  users: User[] = [{mobile: this.phones[0], dni: 'DNI_U1', name: 'User_1', familyName: 'FamU_1'},
    {mobile: this.phones[1], dni: 'DNI_U2', name: 'User_2', familyName: 'FamU_2'},
    {mobile: this.phones[2], dni: 'DNI_U3', name: 'User_3', familyName: 'FamU_3'}];

  tickets: Ticket[] = [{id: 'Ticket_0', mobile: this.phones[0], reference: 'Tck_Ref_0', user: this.users[0]},
    {id: 'Ticket_1', mobile: this.phones[1], reference: 'Tck_Ref_1', user: this.users[1]},
    {id: 'Ticket_2', mobile: this.phones[2], reference: 'Tck_Ref_2', user: this.users[2]},
    {id: 'Ticket_3', mobile: this.phones[2], reference: 'Tck_Ref_3', user: this.users[2]},
    {id: 'Ticket_4', mobile: this.phones[2], reference: 'Tck_Ref_4', user: this.users[2]}];

  invoices: Invoice[] = [{number: this.incSequence(), creationDate: new Date(), baseTax: 1, taxValue: 1, ticket: this.tickets[0]},
    {number: this.incSequence(), creationDate: new Date(), baseTax: 1, taxValue: 1, ticket: this.tickets[1]},
    {number: this.incSequence(), creationDate: new Date(), baseTax: 1, taxValue: 1, ticket: this.tickets[2]}];

  invoicesItems: InvoiceItem[] = [];

  constructor(private httpService: HttpService) {
    let invoiceItem: InvoiceItem;
    for (const invoiceAux of this.invoices) {
      invoiceItem = new InvoiceItem(invoiceAux.number, invoiceAux.creationDate, invoiceAux.baseTax,
        invoiceAux.taxValue, invoiceAux.ticket.user.mobile, invoiceAux.ticket.reference);
      this.invoicesItems.push(invoiceItem);
    }
  }

  incSequence(): number {
    this.sequence = this.sequence + 1;
    return this.sequence;
  }

  search(invoiceSearch: InvoiceSearch): Observable<InvoiceItem[]> {
    console.log('Filtrando resultados por invoiceSearch');
    const invoices: InvoiceItem[] = this.invoicesItems.filter(invo => invoiceSearch.phone === undefined ||
      invo.userPhone === invoiceSearch.phone)
      .filter(invo => invoiceSearch.ticketId === undefined ||
        invo.number === invoiceSearch.ticketId);
    return of(invoices);
  }

  printPdf(numberInvoice: number): Observable<void> {
    return of(console.log('Implementado impresion de factura'));
  }

  read(numberInvoice: number): Observable<Invoice> {
    const invoice: Invoice = this.invoices.find(invo => invo.number === numberInvoice);
    return of(invoice);
  }

  update(invoice: InvoiceUpdate): Observable<InvoiceItem> {
    const invoiceUpdated: InvoiceItem = this.invoicesItems.find(invo => invo.number === invoice.number);
    const invoiceFullUpdated: Invoice = this.invoices.find(invo => invo.number === invoice.number);

    invoiceFullUpdated.ticket.user.dni = invoice.userDni;
    invoiceFullUpdated.ticket.user.name = invoice.userName;
    invoiceFullUpdated.ticket.user.familyName = invoice.familyNameUser;
    invoiceFullUpdated.ticket.user.mobile = invoice.userPhone;
    invoiceUpdated.userPhone = invoice.userPhone;
    return of(invoiceUpdated);
  }

  searchTicketByRef(ticketRef: string): Observable<Ticket> {
    const ticket: Ticket = this.tickets.find(tk => tk.reference === ticketRef);
    return of(ticket);
  }

  invoiceToItems(invoiceAux: Invoice): InvoiceItem {
    const invoiceItem = new InvoiceItem(invoiceAux.number, invoiceAux.creationDate, invoiceAux.baseTax,
      invoiceAux.taxValue, invoiceAux.ticket.user.mobile, invoiceAux.ticket.reference);
    this.invoicesItems.push(invoiceItem);
    return invoiceItem;
  }

  create(invoiceModel: InvoiceUpdate): Observable<InvoiceItem> {
    // {id: 'Ticket_1', mobile: this.phones[1], reference: 'Tck_Ref_1', user: this.users[1]}
    // {mobile: this.phones[1], dni: 'DNI_U2', name: 'User_2', familyName: 'FamU_2'}
    const lastPhone = this.phones.length;
    this.phones.push(invoiceModel.userPhone);

    const lastUser = this.users.length;
    const user: User = {
      mobile: this.phones[lastPhone], name: invoiceModel.userName,
      familyName: invoiceModel.familyNameUser, dni: invoiceModel.userDni
    };
    this.users.push(user);

    const sizeTickets = this.tickets.length;
    const ticket = {id: 'Ticket_' + sizeTickets, mobile: user.mobile, user: this.users[lastUser], reference: invoiceModel.ticketReference};
    this.tickets.push(ticket);

    // {number: 111200300, creationDate: new Date(), baseTax: 1, taxValue: 1, ticket: this.tickets[0]}
    const invoice: Invoice = {
      number: this.incSequence(), ticket: this.tickets[sizeTickets],
      taxValue: 1, baseTax: 1, creationDate: invoiceModel.creationDate
    };
    this.invoices.push(invoice);

    const invoiceItem: InvoiceItem = this.invoiceToItems(invoice);

    return of(invoiceItem);
  }
}
