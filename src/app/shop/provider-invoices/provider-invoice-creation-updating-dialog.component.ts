import {Component, Inject} from '@angular/core';
import {ProviderInvoice} from './provider-invoice.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ProviderInvoiceService} from './provider-invoice.service';

@Component({
  templateUrl: 'provider-invoice-creation-updating-dialog.component.html',
  styleUrls: ['provider-invoice-dialog.component.css']
})
export class ProviderInvoiceCreationUpdatingDialogComponent {
  title: string;
  providerInvoice: ProviderInvoice;
  oldProviderInvoiceNumber: number;

  constructor(@Inject(MAT_DIALOG_DATA) data: ProviderInvoice,
              private providerInvoiceService: ProviderInvoiceService,
              private dialog: MatDialog
  ) {
    this.title = data ? 'Update Provider' : 'Create Provider Invoice';
    this.providerInvoice = data ? data : {
      number: undefined,
      creationDate: undefined,
      baseTax: undefined,
      taxValue: undefined,
      provider: undefined,
      orderId: undefined
    };
    this.oldProviderInvoiceNumber = data ? data.number : undefined;
  }

  isCreate(): boolean {
    return this.oldProviderInvoiceNumber === undefined;
  }

  invalid(): boolean {
    return this.check(this.providerInvoice.number) || this.providerInvoice.number < 1 ||
      this.check(this.providerInvoice.creationDate) ||
      this.check(this.providerInvoice.baseTax) || this.providerInvoice.baseTax < 0 ||
      this.check(this.providerInvoice.taxValue) || this.providerInvoice.taxValue < 0 ||
      this.check(this.providerInvoice.provider) ||
      this.check(this.providerInvoice.orderId);
  }

  create(): void {
    this.providerInvoiceService
      .create(this.providerInvoice)
      .subscribe(() => {
        this.dialog.closeAll();
      });
  }

  update(): void {
    console.log('update');
  }

  check(prop: any): boolean {
    return prop === undefined || prop === null || prop === '';
  }
}
