import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {SalesPeopleSearch} from './salespeople-search.model';
import {SalesPeopleService} from './salespeople.service';
import {SalesPeople} from '../shared/services/models/salespeople.model';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import * as moment from 'moment';

@Component({
  templateUrl: './salespeople.component.html',
  styleUrls: [ './salespeople.component.css' ]
})

export class SalesPeopleComponent {
  salesPeopleSearch: SalesPeopleSearch;
  title = 'SalesPeople management';
  salesPeoples = of([]);

  constructor(private dialog: MatDialog, private SalesPeopleService: SalesPeopleService) {
    this.resetSearch();
  }

  search(): void {
    // tslint:disable-next-line:prefer-const
    let { salesperson, startDate, endDate } = this.salesPeopleSearch;
    if ( !startDate || !endDate){
      return;
    }
    startDate = this.changeDateFormat(startDate);
    endDate = this.changeDateFormat(endDate);
    if (salesperson){
      this.salesPeoples = this.SalesPeopleService.search(salesperson, startDate, endDate);
    }
  }

  secondSearch(): void {
    let dateBeginString;
    let dateEndString;
    let  { secondDate } = this.salesPeopleSearch;
    // secondDate = secondDate.substring(secondDate.length-2)
    dateBeginString = secondDate + '-01';
    dateEndString = secondDate + '-31';
    this.salesPeoples = this.SalesPeopleService.secondSearch(dateBeginString, dateEndString);
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

  changeDateFormat(datePicker: Date): string {
    return moment(datePicker).format('YYYY-MM-DD');
  }
}
