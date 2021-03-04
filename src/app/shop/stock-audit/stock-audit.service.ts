import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Observable, of} from 'rxjs';
import {ArticleLoss} from '../shared/services/models/article-loss.model';
import {ArticleNotAuditLine} from '../shared/services/models/article-not-audit-line.model';
import {ArticleAudit} from '../shared/services/models/article-audit.model';
import {ArticleLossLine} from '../shared/services/models/article-loss-line.model';

@Injectable({
  providedIn: 'root'
})
export class StockAuditService {

  constructor(private httpService: HttpService) { }

  readAll(): Observable<ArticleAudit[]> {
    /*return this.httpService
      .get(EndPoints.AUDIT);*/
    // empty input field in amount if exist

    const articleAudit: ArticleAudit [] = ([
      {
        barcode: '8904598349435',
        description: 'descripcion1',
        retailPrice: 5,
        stock: 10,
        realStock: 7
      },
      {
        barcode: '890459836666',
        description: 'descripcion2',
        retailPrice: 50,
        stock: 15,
        realStock: null
      }
    ]);
    return of(articleAudit);
  }

  getNotAudit(idAudit: string): Observable<ArticleNotAuditLine[]> {
    /*return this.httpService
      .get(EndPoints.AUDITS + '/not-audit/' + idAudit);*/
    const articleNotAuditLine: ArticleNotAuditLine [] = ([
      {
        barcode: '8904598349435',
        description: 'descripcion1',
        retailPrice: 5,
        stock: 10,
      }
    ]);
    return of(articleNotAuditLine);
  }

  closeAudit(idAudit: string, barcodesWithoutAudit: string[], articlesLoss: ArticleLoss[]): void {
    /*return this.httpService
      .patch(EndPoints.AUDITS + '/' + idAudit, {closeDate: new Date(), barcodesWithoutAudit: barcodesWithoutAudit, losses: articlesLoss});*/
  }

  getLosses(idAudit: string): Observable<ArticleLossLine[]>{
    /*return this.httpService
      .get(EndPoints.AUDITS + '/not-audit/' + idAudit);*/
    const articleLossLine: ArticleLossLine [] = ([
      {
        barcode: '890459836666',
        description: 'descripcion2',
        amount: 10,
        retailPrice: 50
      }
    ]);
    return of(articleLossLine);
  }
}
