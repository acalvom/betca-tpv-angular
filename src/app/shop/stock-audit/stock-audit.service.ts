import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Observable} from 'rxjs';
import {StockAudit} from '../shared/services/models/stock-audit.model';
import {ArticleSearch} from '../articles/article-search.model';
import {Article} from '../shared/services/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class StockAuditService {

  constructor(private httpService: HttpService) { }

  search(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(EndPoints.ARTICLES + '/search');
  }

  readByBarcode(barcode: string): Observable<Article> {
    return this.httpService
      .get(EndPoints.ARTICLES + '/' + barcode);
  }

  readSingleOpenedAudit(): Observable<StockAudit> {
    return this.httpService
      .get(EndPoints.AUDITS + '/opened');
  }

  createAudit(barcodesWithoutAudit: string[]): Observable<StockAudit> {
    return this.httpService
      .post(EndPoints.AUDITS, barcodesWithoutAudit);
  }

  saveAudit(id: string, stockAudit: StockAudit): Observable<StockAudit> {
    return this.httpService
      .put(EndPoints.AUDITS + '/' + id, stockAudit);
  }

  closeAudit(id: string, stockAudit: StockAudit): Observable<StockAudit> {
    return this.httpService
      .put(EndPoints.AUDITS + '/close/' + id, stockAudit);
  }
}
