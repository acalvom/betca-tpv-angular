import {Ticket} from './ticket.model';

export class Invoice {
  number: string;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  ticket: Ticket;
}
