import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CashierClosureService} from './cashier-closure.service';
import {Observable, of} from 'rxjs';
import {CashierClosure} from './cashier-closure.model';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {Cashier} from '../../shared/services/models/cashier.model';
import {CashierClosureSearch} from './cashier-closure-search.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cashier-closure',
  templateUrl: './cashier-closure.component.html',
  styleUrls: ['./cashier-closure.component.css'],
})
export class CashierClosureComponent implements OnInit {

  barcode: string;
  cashierClosure: CashierClosure;
  cashierClosureSearch: CashierClosureSearch;
  title = 'Cashier Closure Management';
  title2 = 'Total Sales';
  beginDate;
  endDate;
  totals: Observable<Cashier>;
  cashiers = of([]);
  displayedColumnsTotals = ['initialCash', 'cashSales', 'cardSales', 'usedVouchers', 'deposit', 'withdrawal', 'lostCard', 'lostCash', 'finalCash'];

  constructor(private dialog: MatDialog, private cashierClosureService: CashierClosureService, public datepipe: DatePipe) {
    this.resetSearch();
  }

  ngOnInit(): void {
  }

  resetSearch(): void {
    this.beginDate = null;
    this.endDate = null;
    this.cashierClosureSearch = {};
  }

  read(cashier: Cashier): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Cashier Details',
        object: this.cashierClosureService.read(cashier.id)
      }
    });
  }

  search(): void {
    if (this.beginDate == null || this.endDate == null) {
      this.cashierClosureSearch.dateBeginString = null;
      this.cashierClosureSearch.dateEndString = null;
    }
    else {
      this.cashierClosureSearch.dateBeginString = this.datepipe.transform(new Date(this.beginDate), 'yyyy-MM-dd 00:00');
      this.cashierClosureSearch.dateEndString = this.datepipe.transform(new Date(this.endDate), 'yyyy-MM-dd 23:59');
    }
    this.cashiers = this.cashierClosureService.search(this.cashierClosureSearch);
    this.totals = this.cashierClosureService.totals(this.cashierClosureSearch);
  }
}
