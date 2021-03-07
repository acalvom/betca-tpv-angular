import {Ticket} from './ticket.model';
import {User} from '../../../invoices/invoice-user';

export class Invoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  user: User;
  ticket: Ticket;
}
