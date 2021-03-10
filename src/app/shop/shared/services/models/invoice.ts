import {Ticket} from './ticket.model';

export class Invoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  ticket: Ticket;
}
