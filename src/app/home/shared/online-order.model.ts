import {OnlineOrderState} from './online-order-state.model';
import {Ticket} from './ticket.model';

export interface OnlineOrder {
  reference?: string;
  state: OnlineOrderState;
  deliveryDate: Date;
  ticket: Ticket;
}
