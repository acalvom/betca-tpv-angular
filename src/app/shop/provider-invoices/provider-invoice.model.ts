import {Provider} from '../providers/provider.model';

export interface ProviderInvoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  provider: Provider;
  orderId: string;
}
