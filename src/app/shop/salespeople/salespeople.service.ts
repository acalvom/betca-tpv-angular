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
      date: new Date('2019-03-16'),
      ticket: ['ca5999c4a270', 'ca5999c4a279'],
      articles: ['8400000000017'],
      num_articles: 6,
      finalValue: 20.4
    },
    {
      salesperson: 'Amaya',
      date: new Date('2019-03-16'),
      ticket: ['ca5999c4a271'],
      articles: ['8400000000018'],
      num_articles: 5,
      finalValue: 18
    },
    {
      salesperson: 'Amaya',
      date: new Date('2019-03-16'),
      ticket: ['ca5999c4a272'],
      articles: ['8400000000019'],
      num_articles: 4,
      finalValue: 22.6
    }];
  salespeople2: SalesPeople[] = [
    {
      date: new Date('2019-03-16'),
      salesperson: 'Alonso',
      finalValue: 200
    },
    {
      date: new Date('2019-03-16'),
      salesperson: 'Alva',
      finalValue: 233
    },
    {
      date: new Date('2019-03-16'),
      salesperson: 'Andres',
      finalValue: 215
    }];
  constructor(private httpService: HttpService) {
  }

  search(salesPeopleSearch: SalesPeopleSearch): Observable<SalesPeople[]> {
    return of(this.salespeople);
  }

  secondSearch(salesPeopleSearch: SalesPeopleSearch): Observable<SalesPeople[]>{
    return of(this.salespeople2);
  }

  printSalesPeople(salesperson: string): Observable<void> {
    return of(console.log('do nothing'));
  }

  read(salesPeopleSearch: SalesPeople): Observable<SalesPeople>{
    return of(salesPeopleSearch);
  }
}


