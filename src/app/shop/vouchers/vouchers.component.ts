import { Component, OnInit } from '@angular/core';
import {VouchersService} from './vouchers.service';
import {of} from 'rxjs';
import {Voucher} from '../shared/services/models/voucher.model';
import {MatDialog} from '@angular/material/dialog';

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

  }

  read(voucher: Voucher): void {

  }
}
