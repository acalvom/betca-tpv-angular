import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ProviderInvoice} from './provider-invoice.model';
import {ProviderInvoiceService} from './provider-invoice.service';
import {ProviderInvoiceCreationUpdatingDialogComponent} from './provider-invoice-creation-updating-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';

@Component({
  selector: 'app-provider-invoices',
  templateUrl: './provider-invoices.component.html',
})
export class ProviderInvoicesComponent {
  title = 'Provider Invoices Management';
  providerInvoices = of([]);

  constructor(private dialog: MatDialog, private providerInvoiceService: ProviderInvoiceService) {
    this.search();
  }

  search(): void {
    this.providerInvoices = this.providerInvoiceService.findAll();
  }

  create(): void {
    this.dialog.open(ProviderInvoiceCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  read(providerInvoice: ProviderInvoice): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Provider Invoice Details',
        object: this.providerInvoiceService.read(providerInvoice.number)
      }
    });
  }

  update(providerInvoice: ProviderInvoice): void {
    this.providerInvoiceService
      .read(providerInvoice.number)
      .subscribe(fullProviderInvoice => this.dialog.open(ProviderInvoiceCreationUpdatingDialogComponent,
        {data: fullProviderInvoice})
        .afterClosed().subscribe(() => this.search()));
  }

  delete(providerInvoice: ProviderInvoice): void {
    this.providerInvoiceService
      .delete(providerInvoice.number)
      .subscribe(() => this.search());
  }

}
