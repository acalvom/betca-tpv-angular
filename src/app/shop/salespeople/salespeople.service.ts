import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {SalesPeople} from '../shared/services/models/salespeople.model';
import {EndPoints} from '@shared/end-points';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SalesPeopleService {
  static SEARCH = '/search';
  static SEARCH_MONTH = '/search_month';
  static salesPeopleObj: any = {};

  constructor(private httpService: HttpService) {
  }

  search(salesperson: string, startDate: string,
         endDate: string): Observable<SalesPeople[]> {
    return this.httpService
      .param('salesperson', salesperson)
      .param('dateBeginString', startDate)
      .param('dateEndString', endDate)
      .get(EndPoints.SALE_PEOPLE + SalesPeopleService.SEARCH)
      .pipe(
        map(response => {
          const delArr = [];
          response.map((item, index) => {
            item.ticketBarcode = item.ticketBarcode.substring(item.ticketBarcode.length - 12);
            if (index !== 0) {
              if (item.salesDate === response[index - 1].salesDate) {
                item.total += response[index - 1].total;
                item.ticketBarcode = item.ticketBarcode + ',' + response[index - 1].ticketBarcode;
                item.amount += response[index - 1].amount;
                item.articleBarcode.push(...response[index - 1].articleBarcode);
                delArr.push(index - 1);
              }
            }
          });
          for (let i = delArr.length - 1; i >= 0; i--) {
            response.splice(delArr[i], 1);
          }
          return response;
        })
      );
  }

  secondSearch(startDate: string, endDate: string): Observable<SalesPeople[]> {
    return this.httpService
      .param('dateBeginString', startDate)
      .param('dateEndString', endDate)
      .get(EndPoints.SALE_PEOPLE + SalesPeopleService.SEARCH_MONTH)
      .pipe(
        map(response => {
          const data = [];
          const  arr = [];
          response.map((item, index) => {
            item.localDate = item.localDate.substring(0, item.localDate.length - 3);
            if (data[item.salesperson]) {
              data[item.salesperson].total += item.total;
            } else {
              data[item.salesperson] = item;
            }
          });
          for (const key in data) {
            arr.push(data[key]);
          }
          return this.Sort(arr);
        })
      );
  }

  printSalesPeople(salesperson: string): Observable<void> {
    return of(console.log('do nothing'));
  }

  read(salesPeopleSearch: SalesPeople): Observable<SalesPeople> {
    return of(salesPeopleSearch);
  }

  Sort(arr: any): any {
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i].total < arr[i + 1].total) {
          const temp: any = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
}


