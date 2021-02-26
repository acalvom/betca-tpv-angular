import {CreditSale} from './credit-sale.model';
import {User} from './user.models';

export interface Credit{
  reference: string;
  users: User;
  sales: CreditSale[];
}
