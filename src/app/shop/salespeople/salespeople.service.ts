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
      ticket: {
        id: '3218',
        reference: 'referenceTest',
        mobile: 0
      },
      articles: {
        barcode: '674651',
        description: 'descriptionTest',
        retailPrice: 2684,
        providerCompany: 'providerCompanyTest'
      },
      finalValue: 200
    },
    {
      salesperson: 'Martina',
      date: new Date('2019-03-16'),
      ticket: {
        id: '3218',
        reference: 'referenceTest',
        mobile: 0
      },
      articles: {
        barcode: '674651',
        description: 'descriptionTest',
        retailPrice: 2684,
        providerCompany: 'providerCompanyTest'
      },
      finalValue: 69
    },
    {
      salesperson: 'Lucia',
      date: new Date(Date.parse('2019/01')),
      ticket: {
        id: '3218',
        reference: 'referenceTest',
        mobile: 0
      },
      articles: {
        barcode: '674651',
        description: 'descriptionTest',
        retailPrice: 2684,
        providerCompany: 'providerCompanyTest'
      },
      finalValue: 234
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
}


