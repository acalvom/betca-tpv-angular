import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CashierClosureService} from './cashier-closure.service';
import {of} from 'rxjs';
import {CashierClosure} from './cashier-closure.model';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {Cashier} from '../../shared/services/models/cashier.model';
import {CashierUpdatingDialogComponent} from './cashier-updating-dialog.component';

@Component({
  selector: 'app-cashier-closure',
  templateUrl: './cashier-closure.component.html',
  styleUrls: ['./cashier-closure.component.css']
})
export class CashierClosureComponent implements OnInit {

  barcode: string;
  cashierClosure: CashierClosure;
  title = 'Cashier Closure management';
  cashiers = of([]);

  constructor(private dialog: MatDialog, private cashierClosureService: CashierClosureService) {
    this.resetSearch();
  }

  ngOnInit(): void {
  }

  resetSearch(): void {
    this.cashierClosure = {};
  }

  read(cashier: Cashier): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Cashier Details',
        object: this.cashierClosureService.read(cashier.id)
      }
    });
  }

  update(cashier: Cashier): void {
    this.cashierClosureService.read(cashier.id)
      .subscribe(fullCashier => this.dialog.open(CashierUpdatingDialogComponent, {data: fullCashier}));
  }

  search(): void {
    this.cashiers = this.cashierClosureService.search(this.cashierClosure);
  }
}
