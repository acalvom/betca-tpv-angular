import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {VouchersService} from './vouchers.service';
import {VoucherCreation} from './voucher.creation';

@Component({
  selector: 'app-voucher-creation-updating-dialog',
  templateUrl: './voucher-creation-dialog.component.html',
  styleUrls: ['./voucher-creation-dialog.component.css']
})
export class VoucherCreationDialogComponent {

  voucher: VoucherCreation;
  title = 'Create voucher';

  constructor(@Inject(MAT_DIALOG_DATA) data: VoucherCreation, private voucherService: VouchersService, private dialog: MatDialog) {
    this.voucher = data ? data : {
      value: undefined,
    };
  }

  create(): void {
    this.voucherService
      .create(this.voucher)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.voucher.value);
  }

  check(attr: number): boolean {
    return attr === undefined || null || typeof attr !== 'number' || attr < 0;
  }
}
