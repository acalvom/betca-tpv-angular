export class InvoiceItem {
  number: string;
  creationDate: Date;
  baseTax: number;
  taxValue: number;
  userPhone: number;
  ticketId: string;

  constructor(invoiceRef: string, creationDate: Date, baseTax: number, taxValue: number, phoneUser: number, ticketId: string){
    this.number = invoiceRef;
    this.creationDate = creationDate;
    this.baseTax = baseTax;
    this.taxValue = taxValue;
    this.userPhone = phoneUser;
    this.ticketId = ticketId;
  }
}
