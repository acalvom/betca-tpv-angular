export interface ProviderInvoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  provider: string;
  orderId: string;
}
