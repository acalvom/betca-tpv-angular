export interface ProviderInvoice {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  providerCompany: string;
  orderId: string;
}
