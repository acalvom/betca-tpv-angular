import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {EndPoints} from '@shared/end-points';
import {ArticleStock} from './article-stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  static STOCK = '/stock';
  static STOCK_SOLD = '/stock-sold';
  static STOCK_FUTURE = '/stock-future';


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
    // return of(this.articulos);
    return this.httpService
      .param('stock', String(stock))
      .get(EndPoints.STOCK_MANAGER + StockService.STOCK);
  }

  searchSoldProducts(start: string, end: string): Observable<ArticleStock[]> {

    // return of(this.articulosVendidos);
    return this.httpService
      .param('initial', start)
      .param('end', end)
      .get(EndPoints.STOCK_MANAGER + StockService.STOCK_SOLD);
  }

  searchFutureStock(barcode: string): Observable<ArticleStock> {
    return this.httpService
      .param('barcode', barcode)
      .get(EndPoints.STOCK_MANAGER + StockService.STOCK_FUTURE);
  }

  searchEmptyStock(barcode: string): Observable<ArticleStock> {
    return of(this.articuloStockVacio);
  }
}
