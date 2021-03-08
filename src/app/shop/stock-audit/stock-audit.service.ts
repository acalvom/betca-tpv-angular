import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Observable, of} from 'rxjs';
import {StockAudit} from '../shared/services/models/stock-audit.model';
import {ArticleSearch} from '../articles/article-search.model';
import {Article} from '../shared/services/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class StockAuditService {
  private stockAudits: StockAudit[] = ([
    {
      idAudit: '1',
      creationDate: new Date(),
      closeDate: new Date(),
      barcodesWithoutAudit: ['100000', '200000'],
      lossValue: 300,
      losses: [{barcode: '300000', amount: 3}]
    },
    {
      idAudit: '2',
      creationDate: new Date(),
      closeDate: new Date(),
      barcodesWithoutAudit: ['500000'],
      lossValue: 40,
      losses: [{barcode: '600000', amount: 1}]
    }
  ]);

  constructor(private httpService: HttpService) { }

  search(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(EndPoints.ARTICLES + '/search');
  }

  readSingleOpenedAudit(): Observable<StockAudit> {
    /*return this.httpService
      .get(EndPoints.AUDITS + '/opened');*/
    /*
    return this.httpService
      .param('closeDate', null)
      .get(EndPoints.AUDITS);
     */
    return of(this.stockAudits.find(stockAudit => stockAudit.closeDate == null));
  }

  createAudit(stockAudit: StockAudit): Observable<StockAudit> {
    /*return this.httpService
      .post(EndPoints.AUDITS, stockAudit);*/
    const stockAuditCreated: StockAudit = (
      {
        idAudit: '3',
        creationDate: new Date(),
        closeDate: null,
        barcodesWithoutAudit: ['1', '8400000000017', '8400000000024', '8400000000031', '8400000000048', '8400000000055', '8400000000062', '8400000000079', '8400000000086', '8400000000093', '8400000000100'],
        lossValue: null,
        losses: []
      });
    this.stockAudits.push(stockAuditCreated);
    return of(stockAuditCreated);
  }

  saveAudit(stockAudit: StockAudit): Observable<StockAudit> {
    /*return this.httpService
      .patch(EndPoints.AUDITS + '/' + idAudit, stockAudit);*/
    this.stockAudits.pop();
    this.stockAudits.push({
      idAudit: '3',
      creationDate: new Date(),
      closeDate: null,
      barcodesWithoutAudit: stockAudit.barcodesWithoutAudit,
      lossValue: null,
      losses: stockAudit.losses
    });
    return of({
      idAudit: '3',
      creationDate: new Date(),
      closeDate: null,
      barcodesWithoutAudit: stockAudit.barcodesWithoutAudit,
      lossValue: null,
      losses: stockAudit.losses
    });
  }

  closeAudit(stockAudit: StockAudit): Observable<StockAudit> {
    /*return this.httpService
      .patch(EndPoints.AUDITS + '/close/' + idAudit, stockAudit);*/
    this.stockAudits.pop();
    return of({
      idAudit: '3',
      creationDate: new Date(),
      closeDate: new Date(),
      barcodesWithoutAudit: stockAudit.barcodesWithoutAudit,
      lossValue: 120, // HARCODED
      losses: stockAudit.losses
    });
  }
}
