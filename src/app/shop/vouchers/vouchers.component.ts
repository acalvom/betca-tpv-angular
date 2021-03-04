import {Component} from '@angular/core';
import {VouchersService} from './vouchers.service';
import {of} from 'rxjs';
import {Voucher} from '../shared/services/models/voucher.model';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {VoucherCreationUpdatingDialogComponent} from './voucher-creation-updating-dialog.component';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent {

  title = 'Vouchers management';
  vouchers = of([]);

  constructor(private dialog: MatDialog, private vouchersService: VouchersService) {
    this.findAll();
  }

  findAll(): void {
    this.vouchers = this.vouchersService.findAll();
  }

  create(): void {
    this.dialog.open(VoucherCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.findAll());
  }

  read(voucher: Voucher): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Voucher Details',
        object: this.vouchersService.read(voucher.reference)
      }
    });
  }
}
