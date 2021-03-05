import {Ticket} from './ticket.model';
import {Article} from './article.model';

export interface SalesPeople {
  salesperson: string;
  date: Date;
  ticket?: Ticket;
  articles?: Article;
  finalValue: number;
}
