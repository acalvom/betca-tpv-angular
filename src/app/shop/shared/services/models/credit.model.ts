import {CreditSale} from './credit-sale.model';

export interface Credit{
  reference?: string;
  userReference: string;
  sales?: CreditSale[];
}
