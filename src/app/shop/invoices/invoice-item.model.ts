export class InvoiceItem {
  number: number;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  userPhone: number;
  ticketRef: string;

  constructor(invoiceRef: number, creationDate: Date, baseTax: number, taxValue: number, phoneUser: number, ticketRef: string){
    this.number = invoiceRef;
    this.creationDate = creationDate;
    this.baseTax = baseTax;
    this.taxValue = taxValue;
    this.userPhone = phoneUser;
    this.ticketRef = ticketRef;
  }
}
