import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {SalesPeopleSearch} from './salespeople-search.model';
import {SalesPeople} from '../shared/services/models/salespeople.model';


@Injectable({
  providedIn: 'root',
})

export class SalesPeopleService {
  private static SEARCH = '/search';

  salespeople: SalesPeople[] = [
    {
      salesperson: 'Amaya',
      day: new Date('2019-03-16'),
      ticket: '684165',
      articles: '',
      finalValue: 200
    },
    {
      salesperson: 'Martina',
      day: new Date('2019-03-16'),
      ticket: '223292',
      articles: '',
      finalValue: 200
    },
    {
      salesperson: 'Lucia',
      day: new Date('2019-03-16'),
      ticket: '397465',
      articles: '',
      finalValue: 200
    }];
  constructor(private httpService: HttpService) {
  }

  search(salesPeopleSearch: SalesPeopleSearch): Observable<SalesPeople[]> {
    return of(this.salespeople);
  }

  printSalesPeople(salesperson: string): Observable<void> {
    return of(console.log('do nothing'));
  }
}


