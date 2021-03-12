import {OrderLine} from './orderLine.model';

export class Order {
  reference?: string;
  description: string;
  providerCompany: string;
  openingDate: Date;
  closingDate?: Date;
  orderLines?: OrderLine[];
}
