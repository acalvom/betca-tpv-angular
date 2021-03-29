import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
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
  static STOCK_EMPTY = '/stock-empty';

  constructor(private httpService: HttpService) {
  }

  searchStock(stock: number): Observable<ArticleStock[]> {
    return this.httpService
      .param('stock', String(stock))
      .get(EndPoints.STOCK_MANAGER + StockService.STOCK);
  }

  searchSoldProducts(start: string, end: string): Observable<ArticleStock[]> {
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
    return this.httpService
      .param('barcode', barcode)
      .get(EndPoints.STOCK_MANAGER + StockService.STOCK_EMPTY);
  }
}
