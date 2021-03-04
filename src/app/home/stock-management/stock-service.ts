import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {EndPoints} from '@shared/end-points';
import {Article} from '../shared/article.model';
@Injectable({
  providedIn: 'root',
})
export class StockService {
  static SEARCH = '/search';

  articulos: Article[] = [
    {
      barcode: '00001',
      stock : 20,
      retailPrice: 1,
      description : 'Camiseta blanca'
    },
    {
      barcode: '00002',
      stock : 20,
      retailPrice: 1,
      description : 'Vestido flores'
    },
    {
      barcode: '00003',
      stock : 20,
      retailPrice: 1,
      description : 'Pantalon negro'
    }];

  constructor(private httpService: HttpService) {
  }

  searchStock(stock: number): Observable< Article[]> {
    console.log('En el servicio searchStock() ');
    return of(this.articulos);
    /* return this.httpService
      .paramsFrom(stock)
      .get(EndPoints.STOCKS + StockService.SEARCH);*/
  }

  read(barcode: string): Observable<Article> {
    return of(this.articulos[0]);
    /* return this.httpService
      .get(EndPoints.STOCKS + '/' + barcode); */
  }

  searchByDate(start: Date, end: Date): Observable< Article[]>  {
     return of(this.articulos);
  }
}
