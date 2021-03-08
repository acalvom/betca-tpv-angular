import {OnlineOrderState} from './online-order-state.model';
import {Ticket} from '../../shop/shared/services/models/ticket.model';

export interface OnlineOrder {
  reference: string;
  deliveryDate: Date;
  ticket: Ticket;
  state: OnlineOrderState;
}
