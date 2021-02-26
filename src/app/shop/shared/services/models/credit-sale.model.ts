import {Ticket} from './ticket.model';

export interface CreditSale{
  ticket: Ticket;
  payed: boolean;
}
