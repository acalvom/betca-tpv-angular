import {Shopping} from '../../shared/services/models/shopping.model';
import {User} from '../../shared/services/models/user.models';

export interface TicketCreation {
  user?: User;
  cash: number;
  card: number;
  voucher: number;
  note: string;
  shoppingList: Shopping[];
}
