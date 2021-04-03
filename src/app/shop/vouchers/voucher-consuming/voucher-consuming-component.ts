import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Voucher} from '../../shared/services/models/voucher.model';
import {SharedVoucherService} from '../../shared/services/shared-voucher.service';
import {EMPTY, of} from 'rxjs';

@Component({
  selector: 'app-voucher-consuming-component',
  templateUrl: './voucher-consuming-component.html',
  styleUrls: ['./voucher-consuming-component.css']
})
export class VoucherConsumingComponent {

  vouchers: Voucher[];
  selectedVouchers: Voucher[];
  title = 'Select voucher to consume:';

  constructor(@Inject(MAT_DIALOG_DATA) data: Voucher[],
              private dialogRef: MatDialogRef<VoucherConsumingComponent>,
              private voucherService: SharedVoucherService) {
    this.vouchers = data;
    this.selectedVouchers = [];
  }

  consume(): void {
    const totalSumOfSelectedVouchers = this.getTotalSumOfSelectedVouchers();
    this.selectedVouchers.forEach(voucher => this.voucherService.consumeVoucher(voucher).subscribe());
    this.dialogRef.close(totalSumOfSelectedVouchers);
  }

  invalid(): boolean {
    return this.selectedVouchers.length === 0;
  }

  private getTotalSumOfSelectedVouchers(): number {
    return this.selectedVouchers.reduce((acc, current) => {
      acc += current.value;
      return acc;
    }, 0);
  }
}
