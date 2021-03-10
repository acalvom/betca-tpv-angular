import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {EndPoints} from '@shared/end-points';
import {ArticleStock} from './article-stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  static SEARCH = '/search';

  articulos: ArticleStock[] = [
    {
      barcode: '00001',
      stock: 20,
      retailPrice: 10,
      description: 'Camiseta blanca'
    },
    {
      barcode: '00002',
      stock: 20,
      retailPrice: 30,
      description: 'Vestido flores'
    },
    {
      barcode: '00003',
      stock: 20,
      retailPrice: 50,
      description: 'Pantalon negro'
    },
    {
      barcode: '00009',
      stock: 5,
      retailPrice: 50,
      description: 'Chaqueta negro'
    }];
  articulosVendidos: ArticleStock[] = [
    {
      barcode: '00003',
      retailPrice: 1,
      description: 'Camiseta verde',
      dateSell: new Date('2020-01-25T00:00:00')
    },
    {
      barcode: '00004',
      retailPrice: 1,
      description: 'Vestido rojo',
      dateSell: new Date('2019-05-20T00:00:00')
    }
  ];
  articuloStockVacio: ArticleStock =
    {
      barcode: '00003',
      retailPrice: 1,
      stock: 0,
      description: 'Camiseta verde',
      dateStockEmpty: new Date('2020-01-25T00:00:00')
    };
  constructor(private httpService: HttpService) {
  }

  searchStock(stock: number): Observable<ArticleStock[]> {
    return of(this.articulos);
    /* return this.httpService
      .paramsFrom(stock)
      .get(EndPoints.STOCKS + StockService.SEARCH);*/
  }

  searchSoldProducts(start: Date, end: Date): Observable<ArticleStock[]> {
    return of(this.articulosVendidos);
  }

  searchFutureStock(barcode: string): Observable<ArticleStock> {
    return of(this.articulos[3]);
  }

  searchEmptyStock(barcode: string): Observable<ArticleStock> {
    return of(this.articuloStockVacio);
  }
}
