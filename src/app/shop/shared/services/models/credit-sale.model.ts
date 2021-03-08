import {Ticket} from './ticket.model';

export interface CreditSale{
  reference?: string;
  ticket: Ticket;
  payed: boolean;
}
