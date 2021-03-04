import {Provider} from '../shared/services/models/provider.model';

export interface ProviderInvoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  provider: Provider;
  orderId: string;
}
