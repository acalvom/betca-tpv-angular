import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {SalesPeopleSearch} from './salespeople-search.model';
import {SalesPeopleService} from './salespeople.service';
import {SalesPeople} from '../shared/services/models/salespeople.model';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';

@Component({
  templateUrl: './salespeople.component.html',
})

export class SalesPeopleComponent {
  salesPeopleSearch: SalesPeopleSearch;
  title = 'SalesPeople management';
  salesPeoples = of([]);

  constructor(private dialog: MatDialog, private SalesPeopleService: SalesPeopleService) {
    this.resetSearch();
  }

  search(): void {
    this.salesPeoples = this.SalesPeopleService.search(this.salesPeopleSearch);
  }

  secondSearch(): void {
    this.salesPeoples = this.SalesPeopleService.secondSearch(this.salesPeopleSearch);
  }

  resetSearch(): void {
    this.salesPeopleSearch = {};
  }

  print(salesPeople: SalesPeople): void {
    this.SalesPeopleService
      .printSalesPeople(salesPeople.salesperson)
      .subscribe(() => this.dialog.closeAll());
  }

  read(salesPeople: SalesPeople): void{
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
       title: 'salesPeople Details',
       object: this.SalesPeopleService.read(salesPeople)
      }
    });
  }
}
