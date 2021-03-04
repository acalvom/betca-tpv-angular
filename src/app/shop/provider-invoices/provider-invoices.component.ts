import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ProviderInvoice} from './provider-invoice.model';
import {ProviderInvoiceService} from './provider-invoice.service';
import {ProviderInvoiceCreationUpdatingDialogComponent} from './provider-invoice-creation-updating-dialog.component';

@Component({
  selector: 'app-provider-invoices',
  templateUrl: './provider-invoices.component.html',
  styleUrls: ['./provider-invoices.component.css']
})
export class ProviderInvoicesComponent {
  title = 'Provider Invoices Management';
  providerInvoices = of([]);

  constructor(private dialog: MatDialog, private providerInvoiceService: ProviderInvoiceService) {
  }

  create(): void {
    this.dialog.open(ProviderInvoiceCreationUpdatingDialogComponent);
  }

  read(providerInvoice: ProviderInvoice): void {
    // TODO
  }

  update(providerInvoice: ProviderInvoice): void {
    // TODO
  }

  delete(providerInvoice: ProviderInvoice): void {
    // TODO
  }

}
