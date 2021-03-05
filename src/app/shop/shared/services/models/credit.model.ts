import {CreditSale} from './credit-sale.model';
import {User} from './user.model';

export interface Credit{
  reference: string;
  users: User;
  sales: CreditSale[];
}
