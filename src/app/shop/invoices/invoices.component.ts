import { Component} from '@angular/core';
import {InvoiceSearch} from './invoice-search.model';
import {MatDialog} from '@angular/material/dialog';
import {InvoiceService} from './invoice.service';
import {of} from 'rxjs';
import {InvoiceItem} from './invoice-item.model';
import {InvoiceDialogComponent} from './invoice-dialog.component';

@Component({
  templateUrl: 'invoices.component.html',
})
export class InvoicesComponent{
  invoiceSearch: InvoiceSearch;
  title = 'Invoices Management';
  invoices = of([]);

  constructor(private dialog: MatDialog, private invoiceService: InvoiceService) {
    this.resetSearch();
  }

  search(): void {
    this.invoices = this.invoiceService.search(this.invoiceSearch);
  }

  resetSearch(): void {
    this.invoiceSearch = {};
  }

  create(): void {
    this.dialog
      .open(InvoiceDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  print(invoice: InvoiceItem): void {
    this.invoiceService.printPdf(invoice.number)
        .subscribe(() => this.dialog.closeAll());
  }

  updateUserData(invoiceSelected: InvoiceItem): void {
    this.invoiceService
      .read(invoiceSelected.number)
      .subscribe(invoice => this.dialog.open(InvoiceDialogComponent, {data: invoice})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }

}
